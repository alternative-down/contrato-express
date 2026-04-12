import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { orders, users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://api.asaas.com/api/v3';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

const PACK5_AMOUNT = 79;
const PACK5_DESCRIPTION = 'Pack 5 Contratos — Contrato Express';

async function createAsaasCustomerIfNeeded(user: { id: string; email: string; name?: string | null; asaasCustomerId?: string | null }) {
  if (user.asaasCustomerId) return user.asaasCustomerId;
  if (!ASAAS_API_KEY) {
    console.warn('[pack5 checkout] ASAAS_API_KEY not set');
    return null;
  }
  const response = await fetch(`${ASAAS_ENDPOINT}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'access_token': ASAAS_API_KEY,
    },
    body: JSON.stringify({
      name: user.name || user.email,
      email: user.email,
      cpfCnpj: '',
      externalReference: `user_${user.id}`,
    }),
  });
  if (!response.ok) {
    const err = await response.text();
    console.error('[pack5 checkout] Failed to create Asaas customer:', err);
    return null;
  }
  const result = await response.json();
  const customerId = result.id as string;
  await db.update(users).set({ asaasCustomerId: customerId }).where(eq(users.id, user.id));
  return customerId;
}

export async function POST(request: NextRequest) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }
    const userResult = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
    const user = userResult[0];
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    const customerId = await createAsaasCustomerIfNeeded(user);
    if (!customerId) {
      return NextResponse.json({ error: 'Não foi possível criar conta de pagamento. Tente novamente.' }, { status: 500 });
    }

    const orderId = crypto.randomUUID();
    const dueDate = new Date().toISOString().split('T')[0];

    const asaasResponse = await fetch(`${ASAAS_ENDPOINT}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY,
      },
      body: JSON.stringify({
        billingType: 'PIX',
        customer: customerId,
        value: PACK5_AMOUNT,
        dueDate,
        description: PACK5_DESCRIPTION,
        externalReference: `pack5:${orderId}:user_${user.id}`,
      }),
    });

    if (!asaasResponse.ok) {
      const err = await asaasResponse.text();
      console.error('[pack5 checkout] Asaas error:', err);
      return NextResponse.json({ error: 'Erro ao criar pagamento' }, { status: 500 });
    }

    const asaasData = await asaasResponse.json();

    await db.insert(orders).values({
      id: orderId,
      userId: user.id,
      contractId: null,
      amount: PACK5_AMOUNT,
      status: 'pending',
      asaasPaymentId: asaasData.id,
      dueDate: new Date(`${dueDate}T00:00:00.000Z`),
      createdAt: new Date(),
    });

    let pixData = null;
    const pixResponse = await fetch(`${ASAAS_ENDPOINT}/payments/${asaasData.id}/pixQrCode`, {
      headers: { access_token: ASAAS_API_KEY },
    });
    if (pixResponse.ok) {
      pixData = await pixResponse.json();
    }

    const paymentUrl = pixData?.paymentLink || asaasData.invoiceUrl || null;

    return NextResponse.json({
      paymentId: asaasData.id,
      orderId,
      amount: PACK5_AMOUNT,
      pix: pixData ? {
        encodedImage: pixData.encodedImage || null,
        payload: pixData.payload || pixData.qrCode || null,
        expirationDate: pixData.expirationDate || null,
      } : null,
      paymentUrl,
      returnUrl: `${APP_URL}/checkout/pack5/success?paymentId=${asaasData.id}&orderId=${orderId}`,
    });
  } catch (error) {
    console.error('[pack5 checkout] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}