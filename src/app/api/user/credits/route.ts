import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
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

    const result = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
    const user = result[0];

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    return NextResponse.json({
      packCredits: user.packCredits ?? 0,
      plan: user.plan ?? 'free',
    });
  } catch (error) {
    console.error('[GET /api/user/credits] Error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
