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
      </div>
    </div>
  );
}