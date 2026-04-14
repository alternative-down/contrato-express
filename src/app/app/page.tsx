import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { users, contracts } from '@/db/schema';
import { verifyToken } from '@/lib/auth';
import { eq, desc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function ProtectedAppPage() {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  const payload = await verifyToken(token);

  if (!payload) {
    redirect('/login');
  }

  const [userResult, contractResult] = await Promise.all([
    db.select().from(users).where(eq(users.id, payload.userId)).limit(1),
    db.select().from(contracts).where(eq(contracts.userId, payload.userId)).orderBy(desc(contracts.createdAt)).limit(5),
  ]);

  const user = userResult[0];
  if (!user) {
    redirect('/login');
  }

  const recentContracts = contractResult.map(c => ({
    id: c.id,
    templateId: c.templateId,
    planType: c.planType,
    status: c.status,
    amount: c.amount,
    createdAt: c.createdAt,
  }));

  const formatDate = (dateStr: Date | string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const statusLabel: Record<string, string> = {
    draft: 'Rascunho',
    completed: 'Completo',
    paid: 'Pago',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">Contrato Express</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Show Pack credits if user has any */}
            {(user.packCredits ?? 0) > 0 && (
              <div className="flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {user.packCredits} créditos
              </div>
            )}
            <span className="text-sm text-slate-600">{user.email}</span>
            <Link href="/history" className="text-sm font-medium text-purple-600 hover:text-purple-700">
              Histórico
            </Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-purple-600">
              Início
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Meus Contratos</h1>
          <p className="mt-1 text-slate-500">Bem-vindo, {user.name || user.email}</p>
        </div>

        {/* Pack credits banner */}
        {(user.packCredits ?? 0) > 0 && (
          <div className="mb-8 rounded-xl border border-purple-200 bg-purple-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-purple-900">💳 Pack 5 Contratos</p>
                <p className="text-sm text-purple-700 mt-0.5">
                  Você tem <strong>{user.packCredits} créditos</strong> de contrato avulso disponíveis
                </p>
              </div>
              <Link href="/templates" className="shrink-0 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition">
                Criar contrato
              </Link>
            </div>
          </div>
        )}

        {recentContracts.length > 0 ? (
          <div className="space-y-4 mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Contratos Recentes</h2>
            {recentContracts.map((c) => (
              <div key={c.id} className="rounded-xl border border-purple-100 bg-white p-5 shadow-sm flex items-center justify-between hover:shadow-md hover:border-purple-200 transition">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.planType === 'basic' ? 'bg-purple-50 text-purple-600' : 'bg-pink-50 text-pink-600'}`}>
                      {c.planType.toUpperCase()}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      c.status === 'paid' ? 'bg-blue-100 text-blue-700' :
                      c.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {c.status ? (statusLabel[c.status] || c.status) : '—'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 capitalize">{c.templateId.replace(/-/g, ' ')}</p>
                    <p className="text-xs text-slate-400">{formatDate(c.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-slate-900">R$ {c.amount}</span>
                  <Link href={`/templates/${c.templateId}?edit=${c.id}`} className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar
                  </Link>
                </div>
              </div>
            ))}
            {recentContracts.length >= 5 && (
              <Link href="/history" className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700">
                Ver todos os contratos →
              </Link>
            )}
          </div>
        ) : null}

        <div className="rounded-2xl border border-purple-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
            <svg className="h-7 w-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Gerar Novo Contrato</h2>
          <p className="mb-5 text-slate-500">Escolha um template e crie seu contrato profissional</p>
          <Link
            href="/templates"
            className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Ver Templates
          </Link>
        </div>
      </main>
    </div>
  );
}
