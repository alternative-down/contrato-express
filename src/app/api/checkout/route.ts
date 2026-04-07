import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { orders } from '@/db/schema';
import { eq } from 'drizzle-orm';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://sandbox.asaas.com/api/v3';

export async function POST(request: NextRequest) {
  try {
    const { contractId, userId, amount, planType } = await request.json();

    if (!contractId || !userId || !amount) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    // Create PIX payment on Asaas
    const asaasResponse = await fetch(`${ASAAS_ENDPOINT}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': ASAAS_API_KEY,
      },
      body: JSON.stringify({
        billingType: 'PIX',
        customer: process.env.ASAAS_CUSTOMER_ID || '',
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

    // Save order to DB
    const orderId = crypto.randomUUID();
    await db.insert(orders).values({
      id: orderId,
      userId,
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
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}