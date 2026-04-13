import Link from 'next/link';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade — Contrato Express',
  description: 'Conheça como o Contrato Express coleta, usa e protege seus dados em conformidade com a LGPD.',
};

export default function PrivacidadePage() {
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Política de Privacidade</h1>
        <p className="text-slate-500 text-sm mb-10">Última atualização: 13 de abril de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2>1. Introdução</h2>
            <p>A <strong>Alternative Down MEI</strong> opera o site <strong>contrato-express.com.br</strong>. Esta Política descreve como coletamos, usamos e protegemos suas informações, em conformidade com a LGPD (Lei nº 13.709/2018).</p>
          </section>

          <section>
            <h2>2. Dados Coletados</h2>
            <p><strong>Fornecidos por você:</strong> nome, email, CPF (para criação de cliente Asaas), texto e informações dos contratos.</p>
            <p><strong>Coletados automaticamente:</strong> IP, agente do navegador, cookies de sessão, eventos de uso anônimos.</p>
          </section>

          <section>
            <h2>3. Uso dos Dados</h2>
            <ul>
              <li>Fornecer, manter e melhorar o serviço</li>
              <li>Processar pagamentos via Asaas</li>
              <li>Gerar contratos PDF solicitados por você</li>
              <li>Enviar comunicações relacionadas ao serviço</li>
              <li>Prevenir fraudes e garantir segurança</li>
            </ul>
          </section>

          <section>
            <h2>4. Compartilhamento</h2>
            <ul>
              <li><strong>Asaas:</strong> processador de pagamentos</li>
              <li><strong>Autoridades legais:</strong> quando exigido por lei</li>
            </ul>
            <p>Não vendemos seus dados.</p>
          </section>

          <section>
            <h2>5. Seus Direitos (LGPD)</h2>
            <p>Você pode: acessar, corrigir, anonimizar, bloquear ou eliminar seus dados. Solicitar exportação ou revogar consentimento a qualquer momento.</p>
            <p>Envie email para <strong>privacidade@alternativedown.com.br</strong>.</p>
          </section>

          <section>
            <h2>6. Retenção</h2>
            <p>Dados de conta: mantidos enquanto ativa + 5 anos. Dados fiscais: 10 anos. Dados de uso: até 2 anos anonimizados.</p>
          </section>

          <section>
            <h2>7. Segurança</h2>
            <p>Criptografia TLS, controles de acesso e monitoramento. Os contratos gerados são de sua propriedade — não acessamos ou usamos seu conteúdo.</p>
          </section>

          <section>
            <h2>8. Contato</h2>
            <p><strong>Controladora:</strong> Alternative Down MEI — <strong>privacidade@alternativedown.com.br</strong></p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-purple-100">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-purple-600">Início</Link>
            <Link href="/termos" className="hover:text-purple-600">Termos de Uso</Link>
            <Link href="/contato" className="hover:text-purple-600">Contato</Link>
          </div>
          <p className="text-center text-sm text-slate-400 mt-4">© 2026 Contrato Express — Alternative Down MEI</p>
        </footer>
      </main>
    </div>
  );
}
