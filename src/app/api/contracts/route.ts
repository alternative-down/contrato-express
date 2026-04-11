import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { contracts } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';
import { getTemplateById, renderTemplate } from '@/lib/templates';

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
      content: c.data ? JSON.parse(c.data).content : null,
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

// POST: Create a new contract (before checkout)
export async function POST(request: NextRequest) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }

    const { templateId, formData, amount, planType } = await request.json();

    if (!templateId || !formData || !amount) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    const template = getTemplateById(templateId);
    if (!template) {
      return NextResponse.json({ error: 'Template não encontrado' }, { status: 404 });
    }

    // Render contract content from template
    const content = renderTemplate(template, formData);

    const contractId = crypto.randomUUID();
    const now = new Date();

    await db.insert(contracts).values({
      id: contractId,
      userId: payload.userId,
      templateId,
      planType: planType || template.planType,
      status: 'draft',
      data: JSON.stringify({ ...formData, content }),
      amount,
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json({ contractId, templateId, amount });
  } catch (error) {
    console.error('POST /api/contracts error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
