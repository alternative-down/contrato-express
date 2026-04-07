import Link from 'next/link';

export const metadata = {
  title: 'Preços - Contrato Express',
  description: 'Sem mensalidade. Pague apenas pelo contrato que precisa. R$19 por contrato.',
};

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

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Grátis */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Grátis</h2>
              <p className="text-slate-500 text-sm mb-4">Para testar</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 0</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['1 template para testar', 'Visualizar antes de pagar', 'Uso único'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/templates" className="block w-full py-2 text-center border border-purple-200 text-purple-700 font-semibold rounded-xl hover:border-purple-300 transition text-sm">
                Testar Grátis
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
              <p className="text-slate-500 text-sm mb-4">Para freelancers</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">R$ 19</span>
                <span className="text-slate-500 text-sm"> / contrato</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['1 tipo de contrato', 'Campos básicos', 'PDF personalizado', 'Uso único'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition">
                Geração Contrato por R$ 19
              </Link>
            </div>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-lg overflow-hidden text-white">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-1">Pro</h2>
              <p className="text-purple-100 text-sm mb-4">Para profissionais</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">R$ 29</span>
                <span className="text-purple-100 text-sm"> / contrato</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['Todos os tipos Basic', 'Contrato de Retainer', 'Revisões ilimitadas', 'Suporte prioritário'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-purple-100">
                    <svg className="w-4 h-4 text-pink-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/templates" className="block w-full py-3 text-center bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition">
                Geração Contrato por R$ 29
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}