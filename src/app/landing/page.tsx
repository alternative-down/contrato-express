import Link from 'next/link';

export const metadata = {
  title: 'Contrato Express - Contratos Profissionais para Freelancers',
  description: 'Gere contratos personalizados em PDF para seus projetos. A partir de R$19. Comece com 1 template grátis.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
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
            <Link href="/templates" className="text-slate-600 hover:text-purple-600 text-sm font-medium">
              Templates
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-purple-600 text-sm font-medium">
              Preços
            </Link>
            <Link href="/login" className="text-slate-600 hover:text-purple-600 text-sm font-medium">
              Entrar
            </Link>
            <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">
              Cadastrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-purple-700 text-sm font-medium">Contratos Profissionais para Freelancers</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Contratos profissionais para freelancers
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            — Sem advogado.
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Gere contratos personalizados em PDF para seus projetos. A partir de R$19. Comece com 1 template grátis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/templates" className="py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
            Ver Templates Grátis
            <span className="text-sm opacity-75">— 1 template de graça</span>
          </Link>
          <Link href="/pricing" className="py-4 px-8 bg-white border border-purple-200 text-slate-700 font-semibold rounded-xl hover:border-purple-300 transition">
            Começar por R$19
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Por que você precisa de um contrato?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Proteção Jurídica',
              description: 'Evite processos e brigas legais. Um contrato bem feito protege seu trabalho e seus direitos.',
              icon: '🛡️',
            },
            {
              title: 'Custo de Advogado',
              description: 'Advogados cobram R$500-2.000+. Aqui você gera contratos profissionais por R$19.',
              icon: '💰',
            },
            {
              title: 'Sem Contrato, Sem Pagamento',
              description: 'Sem contrato, clientes somem sem pagar. Proteja seu trabalho e seus honorários.',
              icon: '📝',
            },
          ].map((pain, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-purple-100 p-6">
              <span className="text-3xl mb-4 block">{pain.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-600">{pain.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Preview */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Templates Disponíveis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Contrato de Prestação de Serviços', category: 'Contratos Gerais', price: 'R$ 19', plan: 'basic' },
            { name: 'Contrato Freelancer', category: 'Trabalho Freelance', price: 'R$ 19', plan: 'basic' },
            { name: 'NDA - Acordo de Confidencialidade', category: 'NDA e Confidencialidade', price: 'R$ 19', plan: 'basic' },
            { name: 'Contrato de Retainer', category: 'Contratos de Retainer', price: 'R$ 29', plan: 'pro' },
          ].map((template, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${template.plan === 'basic' ? 'bg-purple-50 text-purple-600' : 'bg-pink-50 text-pink-600'}`}>
                {template.plan.toUpperCase()}
              </span>
              <h3 className="font-semibold text-slate-900 mt-3 mb-1">{template.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{template.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">{template.price}</span>
                <Link href="/templates" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Ver detalhes →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          © 2026 Contrato Express. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}