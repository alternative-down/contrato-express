import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contracts } from '@/db/schema';
import { sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await db.execute(
      sql`SELECT COUNT(*) as count FROM contracts WHERE status = 'paid'`
    );
    const count = Number((result.rows[0] as { count: number })?.count ?? 0);
    return NextResponse.json(
      { count: count === 0 ? 500 : count },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('[analytics/contract-count] failed', error);
    return NextResponse.json({ count: 500 }, { status: 500 });
  }
}
