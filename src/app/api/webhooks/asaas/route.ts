import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { orders, contracts, users } from '@/db/schema';
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
    // Validate webhook token
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

  // Find the order by payment ID or contractId (externalReference)
  let order;
  if (externalReference) {
    // Pack5 orders have externalReference = `pack5:${orderId}:user_${userId}`
    // Template orders have externalReference = contractId
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
    .set({ status: 'paid', paidAt: new Date() })
    .where(eq(orders.id, order.id));

  // Mark contract as completed (skip for pack5/prepaid orders that have no contractId)
  if (order.contractId) {
    await db
      .update(contracts)
      .set({ status: 'completed', updatedAt: new Date() })
      .where(eq(contracts.id, order.contractId));
    console.log(`[Asaas Webhook] Order ${order.id} paid. Contract ${order.contractId} completed.`);
  } else {
    console.log(`[Asaas Webhook] Order ${order.id} paid. Pack5 — no contract to update.`);
  }

  // FIX #196: Add Pack 5 credits when Pack5 payment is confirmed
  if (order.orderType === 'pack5') {
    // Get current user credits
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, order.userId))
      .limit(1);
    const user = userResult[0];
    const currentCredits = user?.packCredits ?? 0;

    await db
      .update(users)
      .set({ packCredits: currentCredits + 5 })
      .where(eq(users.id, order.userId));
    console.log(`[Asaas Webhook] Order ${order.id} (Pack5) — added 5 credits to user ${order.userId}. Total: ${currentCredits + 5}`);
  }
}

async function handlePaymentOverdue(event: AsaasEvent) {
  const paymentId = event.payment.id;
  console.log(`[Asaas Webhook] Payment overdue: ${paymentId}`);

  // Find the order by payment ID or externalReference
  let order;
  if (event.payment.externalReference) {
    const result = await db
      .select()
      .from(orders)
      .where(eq(orders.contractId, event.payment.externalReference))
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
    console.log(`[Asaas Webhook] Order not found for overdue payment: ${paymentId}`);
    return;
  }

  // Only update if still pending (don't overwrite if already paid)
  if (order.status === 'pending') {
    await db
      .update(orders)
      .set({ status: 'cancelled' })
      .where(eq(orders.id, order.id));
    console.log(`[Asaas Webhook] Order ${order.id} cancelled (overdue).`);
  }
}
