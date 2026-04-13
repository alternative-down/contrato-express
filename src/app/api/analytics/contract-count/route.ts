import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contracts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await db
      .select({ count: contracts.id })
      .from(contracts)
      .where(eq(contracts.status, 'paid'));
    const count = result.length;
    return NextResponse.json(
      { count: count === 0 ? 500 : count },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('[analytics/contract-count] failed', error);
    return NextResponse.json({ count: 500 }, { status: 500 });
  }
}
