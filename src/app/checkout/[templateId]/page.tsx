import Link from 'next/link';
import { getTemplateById } from '@/lib/templates';

interface PageProps {
  params: { templateId: string };
  searchParams: { paymentId?: string };
}

export default function CheckoutSuccessPage({ params, searchParams }: PageProps) {
  const template = getTemplateById(params.templateId);
  const paymentId = searchParams.paymentId;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-4">Pagamento iniciado!</h1>
        <p className="text-slate-600 mb-6">
          O QR Code PIX foi gerado. Complete o pagamento no app do seu banco para receber o contrato por email.
        </p>

        {template && (
          <div className="bg-white rounded-xl border border-purple-100 p-4 mb-6">
            <p className="font-medium text-slate-900">{template.name}</p>
            <p className="text-sm text-slate-500">R$ {template.price}</p>
          </div>
        )}

        <div className="bg-slate-100 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-slate-600">
            <strong>Payment ID:</strong> {paymentId || 'N/A'}
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Em modo sandbox, o pagamento não será processado automaticamente.
          </p>
        </div>

        <Link href="/app" className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition">
          Acompanhar Meus Contratos
        </Link>

        <Link href="/templates" className="block mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
          Gerar mais contratos
        </Link>

        {/* ─── Pack 5 Upsell Banner ─── */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-5 text-left">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-lg">
              ⭐
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Pack 5</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-1.5 py-0.5 rounded-full">17% OFF</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Precisa de mais contratos?
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Pack 5 — 5 contratos por <strong className="text-purple-600">R$ 79</strong> (R$ 15,80 cada).
                Todos os templates. Sem prazo de validade.
              </p>
              <a
                href="/checkout/pack5"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:shadow-md transition-all"
              >
                Comprar Pack 5 — R$ 79
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}