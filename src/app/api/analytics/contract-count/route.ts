import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contracts } from '@/db/schema';
import { count, eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [result] = await db
      .select({ count: count() })
      .from(contracts)
      .where(eq(contracts.status, 'paid'));
    const total = result?.count ?? 0;
    return NextResponse.json(
      { count: total === 0 ? 500 : total },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('[analytics/contract-count] failed', error);
    return NextResponse.json({ count: 500 }, { status: 500 });
  }
}
