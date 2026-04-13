import Link from 'next/link';
import { FileText, Mail, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contato — Contrato Express',
  description: 'Entre em contato com a equipe do Contrato Express.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="bg-white border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">Contrato Express</span>
          </Link>
          <Link href="/create" className="text-sm font-medium text-purple-600 hover:text-purple-700">
            Criar contrato →
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Fale com a gente</h1>
        <p className="text-slate-600 mb-12">Tire dúvidas, sugira melhorias ou peça ajuda para criar seu contrato.</p>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-purple-100 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email de suporte</h3>
                <p className="text-slate-600 text-sm mb-3">Para dúvidas, problemas ou sugestões. Respondemos em até 24h úteis.</p>
                <a href="mailto:suporte@alternativedown.com.br" className="text-purple-600 font-medium text-sm hover:text-purple-700">
                  suporte@alternativedown.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-purple-100 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Suporte no produto</h3>
                <p className="text-slate-600 text-sm mb-3">Se você já é cliente, acesse a página de suporte para perguntas frequentes e ajuda direta.</p>
                <Link href="/support" className="text-purple-600 font-medium text-sm hover:text-purple-700">
                  Ir para página de suporte →
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-purple-100 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Crie seu contrato</h3>
                <p className="text-slate-600 text-sm mb-3">Prefere resolver sozinho? Gere seu contrato em minutos, sem esperar resposta.</p>
                <Link href="/create" className="text-purple-600 font-medium text-sm hover:text-purple-700">
                  Criar contrato agora →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-purple-100">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-purple-600">Início</Link>
            <Link href="/privacidade" className="hover:text-purple-600">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-purple-600">Termos de Uso</Link>
          </div>
          <p className="text-center text-sm text-slate-400 mt-4">© 2026 Contrato Express — Alternative Down MEI</p>
        </footer>
      </main>
    </div>
  );
}
