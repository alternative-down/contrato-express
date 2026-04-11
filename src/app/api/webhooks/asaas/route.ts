import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { orders, contracts } from '@/db/schema';
import { eq } from 'drizzle-orm';

const ASAAS_WEBHOOK_TOKEN = process.env.ASAAS_WEBHOOK_TOKEN || '';

type AsaasEvent = {
  event: string;
  payment: {
    id: string;
    status: 'PENDING' | 'CONFIRMED' | 'RECEIVED' | 'OVERDUE' | 'CANCELLED';
    billingType: string;
    customer: string;
    value: number;
    externalReference: string | null;
  };
};

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // FIX #14.4: Validate webhook token
    if (ASAAS_WEBHOOK_TOKEN) {
      const token = request.headers.get('asaas-signature');
      if (token !== ASAAS_WEBHOOK_TOKEN) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const event: AsaasEvent = await request.json();
    console.log(`[Asaas Webhook] Event: ${event.event}, Payment: ${event.payment?.id}`);

    switch (event.event) {
      case 'PAYMENT_CONFIRMED':
      case 'PAYMENT_RECEIVED':
        await handlePaymentConfirmed(event);
        break;
      case 'PAYMENT_OVERDUE':
        await handlePaymentOverdue(event);
        break;
      default:
        console.log(`[Asaas Webhook] Unhandled event: ${event.event}`);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('[Asaas Webhook] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handlePaymentConfirmed(event: AsaasEvent) {
  const paymentId = event.payment.id;
  const externalReference = event.payment.externalReference;

  // Find the order by contractId (externalReference) or payment ID
  let order;
  if (externalReference) {
    const result = await db
      .select()
      .from(orders)
      .where(eq(orders.contractId, externalReference))
      .limit(1);
    order = result[0];
  }

  if (!order && paymentId) {
    const result = await db
      .select()
      .from(orders)
      .where(eq(orders.asaasPaymentId, paymentId))
      .limit(1);
    order = result[0];
  }

  if (!order) {
    console.log(`[Asaas Webhook] Order not found for payment: ${paymentId}`);
    return;
  }

  // Update order status to paid
  await db
    .update(orders)
    .set({ status: 'paid' })
    .where(eq(orders.id, order.id));

  // FIX #14.4: Mark contract as completed (was 'paid' before, now 'completed')
  await db
    .update(contracts)
    .set({
      status: 'completed',
      updatedAt: new Date(),
    })
    .where(eq(contracts.id, order.contractId));

  console.log(`[Asaas Webhook] Order ${order.id} marked as paid. Contract ${order.contractId} marked as completed.`);
}

async function handlePaymentOverdue(event: AsaasEvent) {
  const paymentId = event.payment.id;
  console.log(`[Asaas Webhook] Payment overdue: ${paymentId}`);
}
