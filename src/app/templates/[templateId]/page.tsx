'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getTemplateById } from '@/lib/templates';

const CHECKOUT_STORAGE_KEY = 'contrato-express:checkout-session';

type PaymentMethod = 'pix' | 'boleto' | 'credit_card';

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
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');

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

  // Auth guard: redirect unauthenticated users before they can fill the form
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/login');
        }
      } catch {
        router.replace('/login');
      }
    };
    checkAuth();
  }, [router]);

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
      // FIX #14.1: First create the contract, then start checkout
      const contractRes = await fetch('/api/contracts', {
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

      if (!contractRes.ok) {
        const err = await contractRes.json();
        setError(err.error || 'Erro ao criar contrato');
        setLoading(false);
        return;
      }

      const { contractId } = await contractRes.json();

      // Now start PIX payment with the contract ID
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contractId,
          amount: template.price,
          planType: template.planType,
          paymentMethod,
        }),
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem(
          CHECKOUT_STORAGE_KEY,
          JSON.stringify({
            paymentId: data.paymentId,
            paymentMethod: data.paymentMethod,
            pix: data.pix || null,
            boleto: data.boleto || null,
            creditCard: data.creditCard || null,
            invoiceUrl: data.invoiceUrl || null,
          })
        );
        router.push(
          `/checkout/${template.id}?paymentId=${data.paymentId}&contractId=${contractId}&paymentMethod=${data.paymentMethod}`
        );
      } else {
        const err = await res.json();
        setError(err.error || 'Erro ao iniciar checkout');
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

              <div className="pt-2">
                <p className="text-sm font-medium text-slate-700 mb-3">Forma de pagamento</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: 'pix', label: 'PIX', hint: 'Confirmação rápida' },
                    { value: 'boleto', label: 'Boleto', hint: 'Pagamento bancário' },
                    { value: 'credit_card', label: 'Cartão', hint: 'Pagamento por link Asaas' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPaymentMethod(option.value as PaymentMethod)}
                      className={`rounded-xl border px-4 py-3 text-left transition ${paymentMethod === option.value ? 'border-purple-500 bg-purple-50' : 'border-purple-200 bg-white hover:border-purple-300'}`}
                    >
                      <p className="font-semibold text-slate-900">{option.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{option.hint}</p>
                    </button>
                  ))}
                </div>
              </div>

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
            <div className="bg-slate-100 rounded-xl p-6 min-h-[400px]">
              {preview ? (
                <div className="bg-white border border-slate-200 rounded shadow-sm p-8 max-h-[600px] overflow-y-auto scrollbar-thin">
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap font-serif leading-relaxed">
                    {preview}
                  </pre>
                  <div className="mt-8 space-y-8">
                    <div>
                      <div className="border-b border-dashed border-slate-400 mb-1"></div>
                      <p className="text-xs text-slate-500 text-center">Assinatura do Prestador(a)</p>
                    </div>
                    <div>
                      <div className="border-b border-dashed border-slate-400 mb-1"></div>
                      <p className="text-xs text-slate-500 text-center">Assinatura do Contratante(a)</p>
                    </div>
                  </div>
                </div>
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