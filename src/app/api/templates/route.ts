import { NextRequest, NextResponse } from 'next/server';
import { getTemplateById, renderTemplate, TEMPLATES } from '@/lib/templates';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const planType = searchParams.get('plan') || 'basic';

  const templates = TEMPLATES.filter(t => t.planType === planType);

  return NextResponse.json({ templates });
}

export async function POST(request: NextRequest) {
  try {
    const { templateId, formData } = await request.json();

    const template = getTemplateById(templateId);
    if (!template) {
      return NextResponse.json({ error: 'Template não encontrado' }, { status: 404 });
    }

    const content = renderTemplate(template, formData);

    return NextResponse.json({
      content,
      templateId,
      templateName: template.name,
    });
  } catch (error) {
    console.error('Template render error:', error);
    return NextResponse.json({ error: 'Erro ao renderizar template' }, { status: 500 });
  }
}