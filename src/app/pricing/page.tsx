'use client';

import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Preços - Contrato Express",
  description: "Contratos profissionais a partir de R$ 79/mês. Acesso ilimitado, sem mensalidade escondida.",
};

const CheckIcon = ({ color = "text-green-500" }: { color?: string }) => (
  <svg className={`w-4 h-4 ${color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* ─── Header ─── */}
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
            <Link href="/login" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* ─── Page header ─── */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Planos acessíveis para profissionais</h1>
          <p className="text-lg text-slate-600">Comece grátis. Evolua conforme sua demanda.</p>
        </div>

        {/* ─── Tier 1: Acesso Mensal R$ 79 — Hero Card ─── */}
        <div className="mb-10">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-900/20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                <circle cx="350" cy="-20" r="120" fill="white" />
                <circle cx="50" cy="180" r="80" fill="white" />
              </svg>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: info */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                  <span className="text-white text-sm font-semibold">⭐ ACESSO ILIMITADO</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Acesso Mensal
                </h2>
                <p className="text-purple-100 text-base mb-4">
                  <span className="text-3xl font-bold text-white">R$ 79</span>
                  <span className="text-purple-200"> /mês</span>
                </p>
                <ul className="space-y-1.5 mb-0">
                  {[
                    'Todos os contratos que precisar',
                    'Templates Basic + Pro (NDA, Retainer)',
                    'Clause Library completa',
                    'Cancelamento quando quiser',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-purple-100">
                      <svg className="w-4 h-4 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-3">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
                  <div className="text-white/80 text-xs font-medium mb-0.5">Sem limite por contrato</div>
                  <div className="text-yellow-300 font-bold text-2xl">∞</div>
                </div>
                <Link
                  href="/signup?plan=mensal"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 hover:scale-[1.02] transition-all shadow-lg text-base"
                >
                  Assinar R$ 79/mês
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-purple-200 text-xs">💳 Cartão, PIX ou Boleto · Cancele quando quiser</p>
              </div>
            </div>

            {/* Trust line */}
            <div className="mt-5 pt-5 border-t border-white/20 flex flex-wrap gap-x-6 gap-y-1">
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Acesso a todos os templates
              </span>
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Clause Library incluída
              </span>
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sem contrato de fidelidade
              </span>
            </div>
          </div>
        </div>

        {/* ─── Grid: Trial + Avulso ─── */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Trial */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Grátis</h2>
              <p className="text-slate-500 text-sm mb-4">Para testar a plataforma</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 0</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> 3 contratos (1 de cada template básico)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Visualizar antes de pagar
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Sem cadastro obrigatório
                </li>
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center border border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition text-sm">
                Começar Grátis
              </Link>
            </div>
          </div>

          {/* Avulso */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Contrato Avulso</h2>
              <p className="text-slate-500 text-sm mb-4">Pague apenas pelo que precisa</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 19</span>
                <span className="text-slate-500 text-sm"> / contrato</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> 1 contrato (template básico)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> Campos personalizáveis
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> PDF profissional
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> Sem compromisso
                </li>
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center border border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition text-sm">
                Comprar por R$ 19
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Trust signals ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          {[
            { icon: '🔒', label: 'Dados seguros', sub: 'Criptografia de ponta' },
            { icon: '📄', label: 'PDF profissional', sub: 'Formato aceito juridicamente' },
            { icon: '⚡', label: 'Em minutos', sub: 'Gere em até 5 minutos' },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="font-semibold text-slate-800 text-sm">{label}</div>
                <div className="text-slate-500 text-xs">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── FAQ ─── */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Perguntas Frequentes</h2>
          {[
            {
              q: 'Posso cancelar a qualquer momento?',
              a: 'Sim. A assinatura mensal pode ser cancelada a qualquer momento. Sem multas, sem burocracia.',
            },
            {
              q: 'O que está incluído na assinatura mensal?',
              a: 'Acesso ilimitado a todos os templates (Basic + Pro), Clause Library completa, e quantos contratos precisar dentro do mês.',
            },
            {
              q: 'Qual a diferença entre contrato avulso e assinatura mensal?',
              a: 'Contrato avulso: pagamento único por contrato. Assinatura mensal: acesso ilimitado a todos os contratos por R$ 79/mês. Para quem faz mais de 4 contratos por mês, a assinatura sai mais barato.',
            },
            {
              q: 'Os contratos têm validade?',
              a: 'Os PDFs gerados são válidos sem prazo de validade. Use quantas vezes precisar.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-slate-200 py-5">
              <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
              <p className="text-slate-600 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-200 mt-16">
        <div className="max-w-5xl mx-auto text-center text-slate-500 text-sm">
          <p>Contrato Express — Contratos profissionais para autônomos e PMEs brasileiras.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <Link href="/templates" className="hover:text-purple-600">Templates</Link>
            <Link href="/login" className="hover:text-purple-600">Entrar</Link>
            <Link href="/signup" className="hover:text-purple-600">Cadastrar</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}