import Link from 'next/link';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Termos de Uso — Contrato Express',
  description: 'Leia os Termos de Uso do Contrato Express antes de utilizar nossa plataforma.',
};

export default function TermosPage() {
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
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Termos de Uso</h1>
        <p className="text-slate-500 text-sm mb-10">Última atualização: 13 de abril de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2>1. Aceitação</h2>
            <p>Ao acessar ou utilizar <strong>contrato-express.com.br</strong>, você concorda em cumprir estes Termos de Uso. Se não concorda, não utilize nossos serviços.</p>
          </section>

          <section>
            <h2>2. Descrição do Serviço</h2>
            <p>O Contrato Express é uma ferramenta de geração de contratos profissionais em PDF, fornecida pela <strong>Alternative Down MEI</strong>, CNPJ XX.XXX.XXX/0001-XX.</p>
          </section>

          <section>
            <h2>3. Planos e Pagamentos</h2>
            <ul>
              <li><strong>Avulso:</strong> R$ 29/contrato — acesso a todos os templates, download em PDF</li>
              <li><strong>Mensal:</strong> R$ 79/mês — contratos ilimitados, swap de templates, histórico, suporte prioritário</li>
            </ul>
            <p>Cobranças processadas via Asaas. Assinatura renovada automaticamente. Cancelamento a qualquer momento.</p>
          </section>

          <section>
            <h2>4. Uso Aceitável</h2>
            <p>Você concorda em <strong>não</strong> utilizar o serviço para gerar conteúdo ilegal, difamatório, ameaçador ou que infrinja direitos de terceiros.</p>
          </section>

          <section>
            <h2>5. Propriedade Intelectual</h2>
            <p>Você mantém os direitos sobre o conteúdo fornecido. O Contrato Express concede licença limitada para uso do conteúdo gerado. Você é responsável por validar o conteúdo antes de qualquer uso.</p>
          </section>

          <section>
            <h2>6. Isenção de Responsabilidade</h2>
            <p>O serviço é fornecido &quot;como está&quot;. Não garantimos que o conteúdo gerado não infrinja direitos de terceiros — você é responsável pela revisão e validação.</p>
          </section>

          <section>
            <h2>7. Lei Aplicável</h2>
            <p>Estes Termos são regidos pelas leis brasileiras. Foro da comarca do local de sede da Alternative Down.</p>
          </section>

          <section>
            <h2>8. Contato</h2>
            <p><strong>Email:</strong> suporte@alternativedown.com.br</p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-purple-100">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-purple-600">Início</Link>
            <Link href="/privacidade" className="hover:text-purple-600">Política de Privacidade</Link>
            <Link href="/contato" className="hover:text-purple-600">Contato</Link>
          </div>
          <p className="text-center text-sm text-slate-400 mt-4">© 2026 Contrato Express — Alternative Down MEI</p>
        </footer>
      </main>
    </div>
  );
}
