import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getUserByEmail } from '@/lib/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  try {
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ user: null });
    }

    const user = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
    if (!user[0]) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        id: user[0].id,
        email: user[0].email,
        name: user[0].name,
        plan: user[0].plan,
      }
    });
  } catch {
    return NextResponse.json({ user: null });
  }
}