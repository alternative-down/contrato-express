import Link from "next/link";

const CheckIcon = ({ color = "text-green-500" }: { color?: string }) => (
  <svg className={`w-4 h-4 ${color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
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
            <Link href="/login" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Preços Simples</h1>
          <p className="text-lg text-slate-600">Sem mensalidade. Pague apenas pelo contrato que precisa.</p>
        </div>

        {/* ─── Pack 5 — Full-width Hero Card ─── */}
        <div className="mb-10">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-900/20 overflow-hidden">
            {/* Background decoration */}
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
                  <span className="text-white text-sm font-semibold">⭐ MELHOR CUSTO-BENEFÍCIO</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Pack 5 Contratos
                </h2>
                <p className="text-purple-100 text-base mb-4">
                  <span className="text-3xl font-bold text-white">R$ 79</span>
                  {' '}por 5 contratos —{' '}
                  <span className="font-semibold text-yellow-300">R$ 15,80 cada</span>
                </p>
                <ul className="space-y-1.5 mb-0">
                  {[
                    'Todos os templates (Basic + Pro)',
                    'Créditos cumulativos — use quando quiser',
                    'Sem prazo de validade',
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

              {/* Right: pricing + CTA */}
              <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-3">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
                  <div className="text-white/80 text-xs font-medium mb-0.5">Economia vs Basic</div>
                  <div className="text-yellow-300 font-bold text-2xl">17% OFF</div>
                </div>
                <a
                  href="/checkout/pack5"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 hover:scale-[1.02] transition-all shadow-lg text-base"
                >
                  Comprar Pack 5 — R$ 79
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-purple-200 text-xs">💳 Cartão, PIX ou Boleto · 7 dias de garantia</p>
              </div>
            </div>

            {/* Bottom trust line */}
            <div className="mt-5 pt-5 border-t border-white/20 flex flex-wrap gap-x-6 gap-y-1">
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Os 5 contratos nunca expiram
              </span>
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Todos os templates incluídos
              </span>
              <span className="text-purple-100 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Máximo 12 meses sem uso
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Trial */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Trial</h2>
              <p className="text-slate-500 text-sm mb-4">3 contratos para testar</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">Grátis</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> 3 contratos (1 de cada template)
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

          {/* Basic */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-300 overflow-hidden">
            <div className="bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 text-center">
              MAIS POPULAR
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Basic</h2>
              <p className="text-slate-500 text-sm mb-4">Pagamento por uso — sem mensalidade</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 19</span>
                <span className="text-slate-500 text-sm"> / contrato</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> Todos os 3 templates Basic
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> Campos personalizáveis
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> PDF profissional
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon color="text-purple-500" /> Sem mensalidade
                </li>
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition">
                Criar Contrato por R$ 19
              </Link>
            </div>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Pro</h2>
              <p className="text-slate-500 text-sm mb-4">Para profissionais ativos</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 29</span>
                <span className="text-slate-500 text-sm"> / contrato</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Todos os templates Basic
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Templates Pro (NDA, Retainer)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Histórico de contratos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Revisões ilimitadas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckIcon /> Suporte prioritário
                </li>
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition">
                Criar Contrato por R$ 29
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
