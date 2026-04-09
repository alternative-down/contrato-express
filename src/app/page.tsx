import { GraduationCap, Shield, CreditCard, FileText, Check, HelpCircle, Users, CreditCardIcon, Undo, Headphones } from "lucide-react"

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
            <a href="/create" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
              Começar
            </a>
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
          <p className="text-lg text-slate-500 mb-10">
            A partir de <strong className="text-purple-600">R$19/mês</strong>. Comece com <strong className="text-purple-600">3 contratos grátis</strong>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/create" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all">
              Criar Meu Primeiro Contrato
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-xl bg-white border border-purple-200 text-purple-700 font-medium hover:bg-purple-50 transition-colors">
              Ver Templates Grátis
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">3 contratos grátis. Depois, R$19/mês para contratos ilimitados.</p>

          {/* Social Proof Counter */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/60 border border-purple-100 rounded-full px-5 py-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs">👩</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">👨</div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs">🧑</div>
            </div>
            <span className="text-sm text-slate-700">
              <strong className="text-purple-700">+2.847</strong> contratos gerados por freelancers e autônomos brasileiros
            </span>
          </div>

          {/* Trust Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <CreditCardIcon className="w-4 h-4" />
              Cartão, PIX ou Boleto
            </span>
            <span className="flex items-center gap-1.5">
              <Undo className="w-4 h-4" />
              Cancelamento a qualquer momento
            </span>
            <span className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4" />
              Suporte em português
            </span>
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
              <p className="text-slate-600">Advogados cobram R$500 a R$2.000+ por contrato. Aqui você paga apenas R$19.</p>
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
              <a href="/create?template=services" className="mt-3 block w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-center hover:shadow-lg transition-shadow text-sm">
                Usar Template
              </a>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Freelance / Projeto</h3>
              <p className="text-slate-600 text-sm">Contrato para projetos pontuais com escopo definido.</p>
              <div className="mt-4 text-sm font-medium text-pink-600">R$ 19/contrato</div>
              <a href="/create?template=freelance" className="mt-3 block w-full py-2.5 rounded-lg border border-pink-200 text-pink-700 font-medium text-center hover:bg-pink-50 transition-colors text-sm">
                Usar Template
              </a>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Retainer</h3>
              <p className="text-slate-600 text-sm">Contrato de retainer para trabalhos recorrentes.</p>
              <div className="mt-4 text-sm font-medium text-blue-600">R$ 19/contrato</div>
              <a href="/create?template=retainer" className="mt-3 block w-full py-2.5 rounded-lg border border-blue-200 text-blue-700 font-medium text-center hover:bg-blue-50 transition-colors text-sm">
                Usar Template
              </a>
            </div>
            <div className="p-6 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">NDA / Confidencialidade</h3>
              <p className="text-slate-600 text-sm">Acordo de não divulgação para proteger informações sensíveis.</p>
              <div className="mt-4 text-sm font-medium text-green-600">R$ 19/contrato</div>
              <a href="/create?template=nda" className="mt-3 block w-full py-2.5 rounded-lg border border-green-200 text-green-700 font-medium text-center hover:bg-green-50 transition-colors text-sm">
                Usar Template
              </a>
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
          <p className="text-center text-slate-600 mb-12">
            Escolha quando precisar. Sem mensalidade.
          </p>
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
                  <Check className="w-4 h-4 text-green-500" /> 3 contratos por mês
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Visualização do contrato
                </li>
              </ul>
              <a href="/create" className="block w-full py-3 rounded-xl border border-purple-200 text-purple-700 font-medium text-center hover:bg-purple-50 transition-colors">
                Começar Grátis
              </a>
            </div>
            {/* Basic */}
            <div className="p-6 rounded-2xl border-2 border-purple-500 bg-white relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">
                Mais Escolhido
              </span>
              <h3 className="text-lg font-medium text-slate-600 mb-2">Individual</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">R$19</span>
                <span className="text-slate-500">/mês</span>
              </div>
              <p className="text-slate-600 text-sm mb-6">Contratos ilimitados. Sem swap entre templates.</p>
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
              <a href="/create?plan=individual" className="block w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-center hover:shadow-lg transition-shadow">
                Começar por R$19/mês
              </a>
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
              <a href="/create?plan=pro" className="block w-full py-3 rounded-xl border border-purple-200 text-purple-700 font-medium text-center hover:bg-purple-50 transition-colors">
                Começar por R$29
              </a>
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
          <a href="/create" className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all">
            Ver Templates Grátis
          </a>
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
            <a href="/termos" className="hover:text-purple-600 transition-colors">Termos</a>
            <a href="/privacidade" className="hover:text-purple-600 transition-colors">Privacidade</a>
            <a href="/contato" className="hover:text-purple-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
