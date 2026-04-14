'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

type CreditsData = {
  packCredits: number;
  plan: string;
};

function Pack5SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const [credits, setCredits] = useState<CreditsData | null>(null);
  const [loadingCredits, setLoadingCredits] = useState(true);

  // Poll for real credits after page loads
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch('/api/user/credits', { credentials: 'include' });
        if (res.ok) {
          const data: CreditsData = await res.json();
          setCredits(data);
        }
      } catch (e) {
        console.error('[Pack5 success] Failed to fetch credits:', e);
      } finally {
        setLoadingCredits(false);
      }
    };

    // Small delay to let webhook process first
    const timer = setTimeout(fetchCredits, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-3">Pack 5 confirmado! 🎉</h1>
        <p className="text-slate-600 mb-2">Seu pagamento foi processado com sucesso.</p>
        {paymentId && <p className="text-xs text-slate-400 mb-8">Payment ID: {paymentId}</p>}

        <div className="bg-white rounded-2xl border border-purple-200 p-6 mb-6 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-lg">⭐</div>
            <div>
              <h2 className="font-bold text-slate-900">Pack 5 Contratos</h2>
              <p className="text-sm text-slate-500">
                {loadingCredits
                  ? 'Carregando créditos...'
                  : credits
                    ? `${credits.packCredits} créditos na sua conta`
                    : '5 créditos adicionados à sua conta'}
              </p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-purple-700 font-medium mb-2">O que você recebeu:</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" size={16} />
                5 contratos avulsos (R$ 15,80 cada)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" size={16} />
                Todos os templates (Basic + Pro)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" size={16} />
                Sem prazo de validade
              </li>
            </ul>
          </div>
          {!loadingCredits && credits && (
            <div className="text-center text-sm text-slate-500 mb-2">
              Saldo atual: <strong className="text-purple-600">{credits.packCredits} créditos</strong>
            </div>
          )}
        </div>

        <Link href="/templates" className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all mb-3">
          Criar meu primeiro contrato
        </Link>
        <Link href="/" className="block text-purple-600 hover:text-purple-700 text-sm font-medium">
          Voltar para home
        </Link>
      </div>
    </div>
  );
}

export default function Pack5SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full" /></div>}>
      <Pack5SuccessContent />
    </Suspense>
  );
}
