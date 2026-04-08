import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { users } from '@/db/schema';
import { verifyToken } from '@/lib/auth';
import { eq } from 'drizzle-orm';

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

  const result = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
  const user = result[0];

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="bg-white border-b border-purple-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-500">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">Contrato Express</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user.email}</span>
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

        <div className="rounded-2xl border border-purple-100 bg-white p-12 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Nenhum contrato ainda</h2>
          <p className="mb-6 text-slate-500">Comece gerando seu primeiro contrato profissional</p>
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
