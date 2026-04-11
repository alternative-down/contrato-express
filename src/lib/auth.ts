import { SignJWT } from 'jose';
import { hash } from 'bcryptjs';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'contrato-express-secret-key-change-in-production'
);

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function createToken(userId: string): Promise<string> {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<{ userId: string } | null> {
  try {
    const { payload } = await import('jose').then(jose =>
      jose.jwtVerify(token, JWT_SECRET)
    );
    return { userId: payload.userId as string };
  } catch {
    return null;
  }
}

export async function getUserByEmail(email: string) {
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0] || null;
}

export async function createUser(email: string, password: string, name?: string, asaasCustomerId?: string) {
  const hashed = await hashPassword(password);
  const id = crypto.randomUUID();
  const now = new Date();
  
  await db.insert(users).values({
    id,
    email,
    password: hashed,
    name,
    plan: 'free',
    copyCount: 0,
    copyLimit: 10,
    // FIX #14.3: Store per-user Asaas customer ID
    asaasCustomerId: asaasCustomerId || null,
    createdAt: now,
  });
  
  return { id, email, name, plan: 'free', asaasCustomerId: asaasCustomerId || null };
}