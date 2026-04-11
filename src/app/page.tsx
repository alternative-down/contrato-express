import Link from "next/link";
import { GraduationCap, Shield, CreditCard, FileText, Check, HelpCircle, Users, CreditCardIcon, Undo, Headphones, ShieldCheck, Lock } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Contrato Express</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#templates" className="text-slate-600 hover:text-purple-600 transition-colors">Templates</a>
            <a href="#pricing" className="text-slate-600 hover:text-purple-600 transition-colors">Preços</a>
            <a href="#faq" className="text-slate-600 hover:text-purple-600 transition-colors">FAQ</a>
            <Link href="/create" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
              Começar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Contratos Profissionais para Freelancers —{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Sem Advogado
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
            Gere contratos personalizados em PDF para seus projetos.
          </p>
          <p className="text-lg text-slate-600 mb-10">
            Gere contratos profissionais em PDF, sem advogado. Comece com <strong className="text-purple-600">3 gratuitos</strong>. Depois, <strong className="text-purple-600">R$19/contrato</strong>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/create?plan=free" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all">
              Começar Grátis — 3 Contratos
            </Link>
            <a href="#templates" className="px-8 py-4 rounded-xl bg-white border border-purple-200 text-purple-700 font-medium hover:bg-purple-50 transition-colors">
              Ver Todos os Templates
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" />3 contratos grátis</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" />Sem cartão</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" />Pronto em minutos</span>
          </div>

          {/* Social Proof Counter */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/60 border border-purple-100 rounded-full px-5 py-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs">👩</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">👨</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs">🧑</div>
            </div>
            <span className="text-sm text-slate-700">
              Contratos gerados por freelancers e autônomos brasileiros
            </span>
          </div>

          {/* Trust Bar — Design spec: generated/doc/contrato-express-trust-bar-design-spec.firm */}
          <div className="mt-8 bg-gray-50 py-6 px-4 rounded-2xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Badge 1: Segurança */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm min-w-[140px]" title="Criptografia SSL + LGPD compliance">
                <ShieldCheck className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">Seus dados seguros</span>
              </div>
              {/* Badge 2: Pagamento */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm min-w-[140px]" title="Cartão, PIX ou Boleto — transação protegida">
                <CreditCardIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">Pagamento seguro</span>
              </div>
              {/* Badge 3: Garantia */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm min-w-[140px]" title="Reembolso total se não ficar satisfeito">
                <Undo className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">7 dias de garantia</span>
              </div>
              {/* Badge 4: Suporte */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm min-w-[140px]" title="Time brasileiro, horário comercial">
                <Headphones className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-600">Suporte em português</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Por que você precisa de um contrato?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Proteção Jurídica</h3>
              <p className="text-slate-600">Evite processos e brigas legais. Tenha documentos que protegem seus direitos e dos seus clientes.</p>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Custo Acessível</h3>
              <p className="text-slate-600">Advogados cobram R$500 a R$2.000+ por contrato. Aqui você paga apenas R$19 por contrato.</p>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Ganhe Credibilidade</h3>
              <p className="text-slate-600">Clientes levam você mais a sério quando apresentam um contrato profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Como funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Escolha o Template</h3>
              <p className="text-slate-600">Selecione o tipo de contrato ideal para seu projeto.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Preencha os Dados</h3>
              <p className="text-slate-600">Informe as partes, valores e condições do serviço.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Baixe seu PDF</h3>
              <p className="text-slate-600">Receba o contrato pronto para impressão ou assinatura digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-4">
            Templates Disponíveis
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Contratos prontos para os casos mais comuns de freelancers
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow relative">
              <span className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-medium">
                Mais Popular
              </span>
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Prestação de Serviços</h3>
              <p className="text-slate-600 text-sm">Contrato geral para prestação de serviços profissionais.</p>
              <div className="mt-4 text-sm font-medium text-purple-600">R$ 19/contrato</div>
              <Link href="/create?template=services" className="mt-3 block w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-center hover:shadow-lg transition-shadow text-sm">
                Usar Template
              </Link>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Freelance / Projeto</h3>
              <p className="text-slate-600 text-sm">Contrato para projetos pontuais com escopo definido.</p>
              <div className="mt-4 text-sm font-medium text-pink-600">R$ 19/contrato</div>
              <Link href="/create?template=freelance" className="mt-3 block w-full py-2.5 rounded-lg border border-pink-200 text-pink-700 font-medium text-center hover:bg-pink-50 transition-colors text-sm">
                Usar Template
              </Link>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Retainer</h3>
              <p className="text-slate-600 text-sm">Contrato de retainer para trabalhos recorrentes.</p>
              <div className="mt-4 text-sm font-medium text-blue-600">R$ 19/contrato</div>
              <Link href="/create?template=retainer" className="mt-3 block w-full py-2.5 rounded-lg border border-blue-200 text-blue-700 font-medium text-center hover:bg-blue-50 transition-colors text-sm">
                Usar Template
              </Link>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">⭐ Freemium</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Acordo de Confidencialidade (NDA)</h3>
              <p className="text-slate-600 text-sm">Proteja ideias, termos e metodologias antes de fechar negócio. Essencial para freelas em design, dev e consultoria.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">Grátis no Basic</span>
                <Link href="/create?template=nda" className="mt-3 text-sm font-medium text-purple-600 hover:text-purple-700">
                  Usar Template →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-4">
            Planos simples, sem surpresa
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Escolha quando precisar. Sem mensalidade.
          </p>

          {/* ─── Pack 5 Upsell Banner ─── */}
          <div className="mb-8 relative bg-gradient-to-r from-purple-50 via-white to-pink-50 border border-purple-200 rounded-2xl p-5 md:px-6 md:py-5 overflow-hidden">
            <div className="absolute right-0 top-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-1/2 translate-x-1/4 opacity-50" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">⭐ Pack 5</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full">17% OFF</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                  5 contratos por <span className="text-purple-600">R$ 79</span> — R$ 15,80 cada
                </h3>
                <p className="text-slate-600 text-sm">
                  Todos os templates. Sem prazo. Ideal para freelancers ativos.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2">
                <a
                  href="/checkout/pack5"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm whitespace-nowrap"
                >
                  Comprar Pack 5
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center text-purple-600 font-medium px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors text-sm whitespace-nowrap"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Teste</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">R$0</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">1 template para experimentar.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> 3 contratos-grátis para testar
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Visualização do contrato
                </li>
              </ul>
              <Link href="/create" className="block w-full py-3 rounded-xl border border-purple-200 text-purple-700 font-medium text-center hover:bg-purple-50 transition-colors">
                Começar Grátis
              </Link>
            </div>
            {/* Basic */}
            <div className="p-6 rounded-2xl border-2 border-purple-500 bg-white relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">
                Mais Escolhido
              </span>
              <h3 className="text-lg font-medium text-slate-600 mb-2">Individual</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">R$19</span>
                <span className="text-slate-500">/contrato</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">Sem mensalidade. Pague só pelo que usar.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Todos os templates
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Contratos ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Download em PDF
                </li>
              </ul>
              <Link href="/create?plan=individual" className="block w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-center hover:shadow-lg transition-shadow">
                Começar por R$19/contrato
              </Link>
            </div>
            {/* Pro */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-lg font-medium text-slate-600 mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">R$29</span>
                <span className="text-slate-500">/contrato</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Pagamento por uso. Sem mensalidade.</p>
              <p className="text-slate-500 text-xs mb-4">Swap de templates + reuso + histórico.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Todos os templates
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Swap de templates
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Reuso de contratos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Histórico de contratos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Prioridade no suporte
                </li>
              </ul>
              <Link href="/create?plan=pro" className="block w-full py-3 rounded-xl border border-purple-200 text-purple-700 font-medium text-center hover:bg-purple-50 transition-colors">
                Começar por R$29
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <details className="group p-6 rounded-2xl border border-purple-100">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-slate-900">O contrato é válido juridicamente?</span>
                <HelpCircle className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">Sim. Nossos contratos são desenvolvidos com base na legislação brasileira vigente (Lei 9.307/96, Código Civil). São documentos legally válidos quando properly preenchidos e assinados por ambas as partes.</p>
            </details>
            <details className="group p-6 rounded-2xl border border-purple-100">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-slate-900">Posso editar o contrato depois?</span>
                <HelpCircle className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">No plano Basic você recebe 1 versão final. No plano Pro, você pode fazer revisões ilimitadas até ficar satisfeito com o resultado.</p>
            </details>
            <details className="group p-6 rounded-2xl border border-purple-100">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-slate-900">Como funciona a assinatura digital?</span>
                <HelpCircle className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">Após gerar o PDF, você pode usar plataformas gratuitas como DocuSign, HelloSign ou até mesmo imprimir e assinar manualmente. O contrato em PDF é válido em qualquer formato.</p>
            </details>
            <details className="group p-6 rounded-2xl border border-purple-100">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-slate-900">Posso cancelar a qualquer momento?</span>
                <HelpCircle className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-slate-600">Nosso modelo é pay-per-use. Você paga apenas pelo contrato que precisa, sem mensalidade ou compromisso. Sem cancelamento necessário.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Pronto para formalizar seus projetos?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Gere seu primeiro contrato profissional em minutos.
          </p>
          <Link href="/templates" className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all">
            Ver Templates
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-slate-600">Contrato Express — Alternative Down</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/termos" className="hover:text-purple-600 transition-colors">Termos</Link>
            <Link href="/privacidade" className="hover:text-purple-600 transition-colors">Privacidade</Link>
            <Link href="/contato" className="hover:text-purple-600 transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
