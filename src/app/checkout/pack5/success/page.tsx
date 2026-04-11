'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pack5SuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Pack 5 confirmado! 🎉
        </h1>
        <p className="text-slate-600 mb-2">
          Seu pagamento foi processado com sucesso.
        </p>
        {paymentId && (
          <p className="text-xs text-slate-400 mb-8">
            Payment ID: {paymentId}
          </p>
        )}

        {/* Credits summary */}
        <div className="bg-white rounded-2xl border border-purple-200 p-6 mb-6 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-lg">
              ⭐
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Pack 5 Contratos</h2>
              <p className="text-sm text-slate-500">5 créditos adicionados à sua conta</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-purple-700 font-medium mb-2">O que você recebeu:</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                5 contratos (R$ 15,80 cada)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Todos os templates (Basic + Pro)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sem prazo de validade
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/templates"
          className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all mb-3"
        >
          Criar meu primeiro contrato
        </Link>
        <Link
          href="/"
          className="block text-purple-600 hover:text-purple-700 text-sm font-medium"
        >
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
