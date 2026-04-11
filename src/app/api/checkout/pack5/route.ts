import { NextRequest, NextResponse } from 'next/server';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://sandbox.asaas.com/api/v3';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const sessionId = (body.sessionId as string) || crypto.randomUUID();

    // Create a PIX payment for Pack 5
    const asaasResponse = await fetch(`${ASAAS_ENDPOINT}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY,
      },
      body: JSON.stringify({
        billingType: 'PIX',
        customer: process.env.ASAAS_CUSTOMER_ID || '',
        value: 79,
        dueDate: new Date().toISOString().split('T')[0],
        description: 'Pack 5 Contratos — Contrato Express',
        externalReference: `pack5:${sessionId}`,
        // Redirect after payment
        split: [],
      }),
    });

    if (!asaasResponse.ok) {
      const err = await asaasResponse.text();
      console.error('Asaas error:', err);
      return NextResponse.json({ error: 'Erro ao criar pagamento' }, { status: 500 });
    }

    const asaasData = await asaasResponse.json();

    // Get the Asaas payment URL (for hosted checkout)
    const paymentUrl = `${ASAAS_ENDPOINT}/payments/${asaasData.id}`;

    // Return the Asaas payment URL — frontend redirects to Asaas hosted checkout
    return NextResponse.json({
      paymentId: asaasData.id,
      paymentUrl,
      amount: 79,
      returnUrl: `${APP_URL}/checkout/pack5/success?paymentId=${asaasData.id}&sessionId=${sessionId}`,
    });
  } catch (error) {
    console.error('Pack5 checkout error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
