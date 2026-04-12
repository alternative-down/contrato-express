import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { orders, users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://api.asaas.com/api/v3';

type PaymentMethod = 'pix' | 'boleto' | 'credit_card';
type BillingType = 'PIX' | 'BOLETO' | 'CREDIT_CARD';

function resolveBillingType(method?: string): BillingType {
  switch (method) {
    case 'boleto':
      return 'BOLETO';
    case 'credit_card':
      return 'CREDIT_CARD';
    case 'pix':
    default:
      return 'PIX';
  }
}

async function fetchPixQrCode(paymentId: string) {
  const pixResponse = await fetch(`${ASAAS_ENDPOINT}/payments/${paymentId}/pixQrCode`, {
    headers: { access_token: ASAAS_API_KEY },
  });

  if (!pixResponse.ok) {
    return null;
  }

  return pixResponse.json();
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

    const { contractId, amount, planType, paymentMethod } = (await request.json()) as {
      contractId?: string;
      amount?: number;
      planType?: string;
      paymentMethod?: PaymentMethod;
    };

    if (!contractId || !amount) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

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

    const billingType = resolveBillingType(paymentMethod);
    const dueDate = new Date().toISOString().split('T')[0];

    const asaasResponse = await fetch(`${ASAAS_ENDPOINT}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: ASAAS_API_KEY,
      },
      body: JSON.stringify({
        billingType,
        customer: user.asaasCustomerId,
        value: amount,
        dueDate,
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

    await db.insert(orders).values({
      id: crypto.randomUUID(),
      userId: payload.userId,
      contractId,
      amount,
      status: 'pending',
      asaasPaymentId: asaasData.id,
      dueDate: new Date(`${dueDate}T00:00:00.000Z`),
      createdAt: new Date(),
    });

    const responseBody: Record<string, unknown> = {
      paymentId: asaasData.id,
      paymentMethod: paymentMethod || 'pix',
      billingType,
      amount,
      contractId,
      invoiceUrl: asaasData.invoiceUrl || null,
    };

    if (billingType === 'PIX') {
      const pixData = await fetchPixQrCode(asaasData.id);
      responseBody.pix = {
        encodedImage: pixData?.encodedImage || null,
        payload: pixData?.payload || pixData?.qrCode || pixData?.qrCodeUrl || null,
        expirationDate: pixData?.expirationDate || null,
      };
    }

    if (billingType === 'BOLETO') {
      responseBody.boleto = {
        bankSlipUrl: asaasData.bankSlipUrl || null,
        invoiceUrl: asaasData.invoiceUrl || null,
        identificationField: asaasData.identificationField || null,
        nossoNumero: asaasData.nossoNumero || null,
        barCode: asaasData.barCode || null,
      };
    }

    if (billingType === 'CREDIT_CARD') {
      responseBody.creditCard = {
        invoiceUrl: asaasData.invoiceUrl || null,
      };
    }

    return NextResponse.json(responseBody);
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
