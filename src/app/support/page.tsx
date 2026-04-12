import Link from 'next/link'
import { LifeBuoy, Mail, ArrowLeft, HelpCircle, FileText } from 'lucide-react'

const SUPPORT_EMAIL = 'suporte@alternativedown.com.br'

const faqItems = [
  {
    question: 'Como funciona o Contrato Express?',
    answer:
      'Escolha um template, preencha os dados do projeto e do cliente, e gere um contrato profissional em PDF em minutos. Não precisa de advogado.',
  },
  {
    question: 'Preciso pagar para usar?',
    answer:
      'Não. Você começa com 3 contratos gratuitos. Depois, cada contrato adicional custa R$19.',
  },
  {
    question: 'O suporte responde por onde?',
    answer:
      'O contato é feito por email. Envie sua dúvida para suporte@alternativedown.com.br e a equipe retorna no canal informado.',
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-xl shadow-purple-100/50">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm text-purple-700">
            <LifeBuoy className="h-4 w-4" />
            Canal de suporte
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Precisa de ajuda com o Contrato Express?
          </h1>
          <p className="mb-8 text-slate-600">
            Se surgir alguma dúvida durante a criação do contrato ou depois, fale com a equipe pelo canal abaixo.
          </p>

          <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-700">Email de suporte</p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-1 inline-block text-lg font-semibold text-slate-900 underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                <p className="mt-2 text-sm text-slate-600">
                  Use este canal para dúvidas sobre contratos, templates, pagamento e acesso.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-slate-900">
              <HelpCircle className="h-5 w-5 text-purple-600" />
              <h2 className="text-xl font-semibold">Perguntas rápidas</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                  <h3 className="mb-2 font-medium text-slate-900">{item.question}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-purple-100 bg-purple-50/50 p-5 text-sm text-slate-600">
            <div className="mb-2 flex items-center gap-2 text-slate-900">
              <FileText className="h-4 w-4 text-purple-600" />
              <h2 className="font-semibold">Antes de enviar</h2>
            </div>
            <p>
              Não envie dados pessoais sensíveis no corpo do email. Se precisar de orientação jurídica específica, procure um profissional especializado.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}