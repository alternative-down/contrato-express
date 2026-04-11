import { NextRequest, NextResponse } from 'next/server';
import { createUser, createToken, getUserByEmail } from '@/lib/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://api.asaas.com/api/v3';

async function createAsaasCustomer(data: {
  name: string;
  email: string;
  cpfCnpj?: string;
}) {
  if (!ASAAS_API_KEY) {
    console.warn('[Asaas] API key not set, skipping customer creation');
    return null;
  }

  const response = await fetch(`${ASAAS_ENDPOINT}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'access_token': ASAAS_API_KEY,
    },
    body: JSON.stringify({
      name: data.name || data.email,
      email: data.email,
      cpfCnpj: data.cpfCnpj || '',
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('[Asaas] Failed to create customer:', err);
    return null;
  }

  const result = await response.json();
  return result.id;
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, cpf } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e senha são obrigatórios' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Senha deve ter no mínimo 6 caracteres' }, { status: 400 });
    }

    // Check if user exists
    const existing = await getUserByEmail(email);
    if (existing) {
      return NextResponse.json({ error: 'Email já cadastrado' }, { status: 409 });
    }

    // Create Asaas customer for this user (Fix #14.3)
    const asaasCustomerId = await createAsaasCustomer({
      name: name || '',
      email,
      cpfCnpj: cpf,
    });

    // Create user with Asaas customer ID
    const user = await createUser(email, password, name, asaasCustomerId || undefined);
    const token = await createToken(user.id);

    const response = NextResponse.json({ user: { id: user.id, email: user.email, name: user.name } });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Erro ao criar conta' }, { status: 500 });
  }
}
