'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Check } from "lucide-react";

interface User {
  id: string;
  email: string;
  plan: string;
  copyCount?: number;
  copyLimit?: number;
}

const benefits = [
  "Todos os templates (Basic + Pro)",
  "Créditos cumulativos — use quando quiser",
  "Sem prazo de validade",
  "7 dias de garantia",
];

export default function CheckoutPack5Page() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        setUser(data?.user || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCheckout = async () => {
    const btn = document.getElementById('checkout-btn') as HTMLButtonElement;
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = 'Processando...';
    try {
      const res = await fetch('/api/checkout/pack5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id }),
      });
      const data = await res.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert('Erro ao processar. Tente novamente.');
        btn.disabled = false;
        btn.textContent = 'Finalizar Compra — R$ 79';
      }
    } catch {
      alert('Erro ao processar. Tente novamente.');
      btn.disabled = false;
      btn.textContent = 'Finalizar Compra — R$ 79';
    }
  };
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">Contrato Express</span>
          </Link>
        </div>

        {/* Pack 5 Summary Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden mb-6">
          {/* Gradient top bar */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3">
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-sm">⭐ Pack 5 Contratos</span>
              <span className="text-yellow-300 font-bold text-sm">17% OFF</span>
            </div>
          </div>

          <div className="p-6">
            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-slate-900 mb-1">R$ 79</div>
              <div className="text-slate-500 text-sm">
                <span className="line-through text-slate-400 mr-2">R$ 95</span>
                <span className="text-green-600 font-semibold">Você economiza R$ 16</span>
              </div>
              <div className="mt-1 text-purple-600 font-medium text-sm">
                R$ 15,80 por contrato (vs R$ 19 no Basic)
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-2.5 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA Button — Asaas redirect via API */}
            {loading ? (
              <button
                disabled
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base rounded-xl opacity-60 cursor-not-allowed"
              >
                Verificando sessão...
              </button>
            ) : !user ? (
              <div className="space-y-2">
                <Link
                  href="/login?next=/checkout/pack5"
                  className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all text-center"
                >
                  Fazer login para comprar
                </Link>
                <p className="text-xs text-slate-500 text-center">
                  Não tem conta?{' '}
                  <Link href="/signup?next=/checkout/pack5" className="text-purple-600 font-medium hover:underline">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            ) : (
              <button
                type="button"
                id="checkout-btn"
                onClick={handleCheckout}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.01]"
              >
                Finalizar Compra — R$ 79
              </button>
            )}

            {/* Trust */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {[
                { icon: "🔒", text: "Pagamento seguro" },
                { icon: "💳", text: "Cartão, PIX ou Boleto" },
                { icon: "🛡️", text: "7 dias de garantia" },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1 text-xs text-slate-500">
                  <span>{icon}</span> {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Perguntas Fequentes</h3>
          <div className="space-y-3">
            {[
              {
                q: "Posso escolher quais templates usar?",
                a: "Sim. Pack 5 dá acesso a TODOS os templates — Basic e Pro — sem restrição.",
              },
              {
                q: "Os créditos expiram?",
                a: "Não. Pack 5 não tem prazo. Você usa quando precisar. Máximo 12 meses sem uso.",
              },
              {
                q: "O que acontece quando acabarem os créditos?",
                a: "Você compra outro Pack 5 ou usa o plano por contrato (R$ 19/contrato).",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-start justify-between gap-2 cursor-pointer list-none text-sm text-slate-700 hover:text-purple-600 transition-colors">
                  <span>{q}</span>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link href="/pricing" className="text-sm text-slate-500 hover:text-purple-600 transition-colors">
            ← Voltar para planos
          </Link>
        </div>
      </div>
    </div>
  );
}
