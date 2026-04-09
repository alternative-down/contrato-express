import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { contracts } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }

    const result = await db
      .select()
      .from(contracts)
      .where(eq(contracts.userId, payload.userId))
      .orderBy(desc(contracts.createdAt));

    const formatted = result.map(c => ({
      id: c.id,
      templateId: c.templateId,
      planType: c.planType,
      status: c.status,
      data: c.data ? JSON.parse(c.data) : null,
      amount: c.amount,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }));

    return NextResponse.json({ contracts: formatted });
  } catch (error) {
    console.error('GET /api/contracts error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
