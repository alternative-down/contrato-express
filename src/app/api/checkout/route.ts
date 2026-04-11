import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { orders, users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://api.asaas.com/api/v3';

export async function POST(request: NextRequest) {
  try {
    // FIX #14.1: Get userId from auth cookie, not request body
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }

    const { contractId, amount, planType } = await request.json();

    if (!contractId || !amount) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    // Get user from DB
    const userResult = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
    const user = userResult[0];

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    if (!user.asaasCustomerId) {
      return NextResponse.json(
        { error: 'Conta Asaas não configurada. Cadastro incompleto.' },
        { status: 400 }
      );
    }

    // Create PIX payment on Asaas using per-user customer ID
    // FIX #14.1: externalReference = contractId so webhook can find the contract
    const asaasResponse = await fetch(`${ASAAS_ENDPOINT}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY,
      },
      body: JSON.stringify({
        billingType: 'PIX',
        customer: user.asaasCustomerId,
        value: amount,
        dueDate: new Date().toISOString().split('T')[0],
        description: `Contrato Express - ${planType === 'pro' ? 'Plano Pro' : 'Plano Basic'}`,
        externalReference: contractId,
      }),
    });

    if (!asaasResponse.ok) {
      const err = await asaasResponse.text();
      console.error('Asaas error:', err);
      return NextResponse.json({ error: 'Erro ao criar pagamento' }, { status: 500 });
    }

    const asaasData = await asaasResponse.json();

    // Save order to DB with contractId
    const orderId = crypto.randomUUID();
    await db.insert(orders).values({
      id: orderId,
      userId: payload.userId,
      contractId,
      amount,
      status: 'pending',
      asaasPaymentId: asaasData.id,
      createdAt: new Date(),
    });

    // Get QR code data
    const pixResponse = await fetch(`${ASAAS_ENDPOINT}/payments/${asaasData.id}/pixQrCode`, {
      headers: { 'access_token': ASAAS_API_KEY },
    });

    let qrCodeUrl = '';
    let encodedImage = '';

    if (pixResponse.ok) {
      const pixData = await pixResponse.json();
      qrCodeUrl = pixData.encodedImage || '';
      encodedImage = pixData.qrCodeUrl || '';
    }

    return NextResponse.json({
      paymentId: asaasData.id,
      qrCodeUrl,
      encodedImage,
      amount,
      contractId,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
