import Link from 'next/link';
import { TEMPLATES } from '@/lib/templates';

export const metadata = {
  title: 'Templates - Contrato Express',
};

export default function TemplatesPage() {
  const basicTemplates = TEMPLATES.filter(t => t.planType === 'basic');
  const proTemplates = TEMPLATES.filter(t => t.planType === 'pro');

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
            <Link href="/pricing" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Preços</Link>
            <Link href="/login" className="text-slate-600 hover:text-purple-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Templates de Contrato</h1>
          <p className="text-lg text-slate-600">Escolha o template ideal para seu caso. Comece com 1 teste grátis.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Plano Basic — R$ 19
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicTemplates.map((template) => (
              <Link key={template.id} href={`/templates/${template.id}`} className="bg-white rounded-xl shadow-sm border border-purple-100 p-6 hover:shadow-md hover:border-purple-200 transition block">
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">BASIC</span>
                <h3 className="font-semibold text-slate-900 mt-3 mb-1">{template.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">R$ 19</span>
                  <span className="text-sm font-medium text-purple-600">Usar template →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            Plano Pro — R$ 29
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proTemplates.map((template) => (
              <Link key={template.id} href={`/templates/${template.id}`} className="bg-white rounded-xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-200 transition block">
                <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">PRO</span>
                <h3 className="font-semibold text-slate-900 mt-3 mb-1">{template.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">R$ 29</span>
                  <span className="text-sm font-medium text-pink-600">Usar template →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}