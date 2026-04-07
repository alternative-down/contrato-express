'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TEMPLATES, getTemplateById } from '@/lib/templates';

interface PageProps {
  params: { templateId: string };
}

export default function TemplateDetailPage({ params }: PageProps) {
  const router = useRouter();
  const template = getTemplateById(params.templateId);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  if (!template) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Template não encontrado</h1>
          <Link href="/templates" className="text-purple-600 hover:text-purple-700">Voltar aos templates</Link>
        </div>
      </div>
    );
  }

  const handleFieldChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreview = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: template.id, formData }),
      });
      if (res.ok) {
        const data = await res.json();
        setPreview(data.content);
      } else {
        setError('Erro ao gerar preview');
      }
    } catch {
      setError('Erro de conexão');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId: template.id,
          formData,
          planType: template.planType,
          amount: template.price,
        }),
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.encodedImage) {
          router.push(`/checkout/${template.id}?paymentId=${data.paymentId}`);
        } else {
          setError('QR Code não disponível em modo sandbox');
        }
      } else {
        setError('Erro ao iniciar checkout');
      }
    } catch {
      setError('Erro de conexão');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">Contrato Express</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/templates" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Templates</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Preços</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/templates" className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mb-4">
            ← Voltar aos templates
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${template.planType === 'basic' ? 'bg-purple-50 text-purple-600' : 'bg-pink-50 text-pink-600'}`}>
                {template.planType.toUpperCase()}
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-3">{template.name}</h1>
              <p className="text-slate-500 mt-1">{template.description}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-slate-900">R$ {template.price}</span>
              <p className="text-sm text-slate-500">por contrato</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Preencha os dados</h2>
            <div className="space-y-4">
              {template.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none"
                    />
                  ) : (
                    <input
                      type={field.type === 'date' ? 'date' : field.type === 'number' ? 'number' : 'text'}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      placeholder={field.label}
                      className="w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  )}
                </div>
              ))}

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handlePreview}
                  disabled={loading}
                  className="flex-1 py-3 bg-white border border-purple-200 text-purple-700 font-semibold rounded-xl hover:border-purple-300 transition disabled:opacity-50"
                >
                  {loading ? 'Gerando...' : 'Ver Preview'}
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? 'Processando...' : `Gerar por R$ ${template.price}`}
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Preview do Contrato</h2>
            <div className="bg-slate-50 rounded-xl p-6 min-h-[400px]">
              {preview ? (
                <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans">{preview}</pre>
              ) : (
                <p className="text-slate-400 text-center py-12">
                  Preencha os campos e clique em "Ver Preview" para visualizar o contrato.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}