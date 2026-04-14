import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { contracts } from '@/db/schema';
import { ne, count, eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await db
      .select({ count: count() })
      .from(contracts)
      .where(eq(contracts.status, 'completed'));

    return NextResponse.json({ count: result[0]?.count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
