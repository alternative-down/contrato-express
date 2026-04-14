'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Contract {
  id: string;
  templateId: string;
  planType: string;
  status: string;
  data: Record<string, string> | null;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

export default function HistoryPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function loadContracts() {
    setLoading(true);
    setError(null);
    fetch('/api/contracts', { credentials: 'include' })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(d => {
        setContracts(d.contracts || []);
        setLoading(false);
        setError(null);
      })
      .catch(() => {
        setLoading(false);
        setError('Não foi possível carregar o histórico. Tente novamente.');
      });
  }

  useEffect(() => {
    loadContracts();
  }, []);

  function reload() {
    loadContracts();
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const statusLabel: Record<string, { label: string; color: string }> = {
    draft: { label: 'Rascunho', color: 'bg-yellow-100 text-yellow-700' },
    completed: { label: 'Completo', color: 'bg-green-100 text-green-700' },
    paid: { label: 'Pago', color: 'bg-blue-100 text-blue-700' },
  };

  const statusInfo = (s: string) => statusLabel[s] || { label: s, color: 'bg-gray-100 text-gray-600' };

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
          <div className="flex items-center gap-4">
            <Link href="/app" className="text-sm text-slate-600 hover:text-purple-600">Meus Contratos</Link>
            <Link href="/templates" className="text-sm font-medium text-purple-600">Gerar Novo</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Histórico de Contratos</h1>
            <p className="mt-1 text-slate-500">
              {contracts.length > 0 ? `${contracts.length} contrato${contracts.length !== 1 ? 's' : ''} gerado${contracts.length !== 1 ? 's' : ''}` : 'Nenhum contrato gerado ainda'}
            </p>
          </div>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 font-semibold text-white hover:opacity-90 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Novo Contrato
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <svg className="h-7 w-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{error}</h2>
            <p className="mb-6 text-slate-500">Verifique sua conexão e tente novamente.</p>
            <button
              onClick={reload}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white hover:opacity-90 transition"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Tentar novamente
            </button>
          </div>
        ) : contracts.length === 0 ? (
          <div className="rounded-2xl border border-purple-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Nenhum contrato ainda</h2>
            <p className="mb-6 text-slate-500">Comece gerando seu primeiro contrato profissional</p>
            <Link href="/templates" className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white hover:opacity-90">
              Ver Templates
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {contracts.map((contract) => {
              const info = statusInfo(contract.status);
              const data = contract.data || {};
              const mainField = Object.values(data)[0] as string || '—';
              return (
                <div key={contract.id} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${contract.planType === 'basic' ? 'bg-purple-50 text-purple-600' : 'bg-pink-50 text-pink-600'}`}>
                          {contract.planType.toUpperCase()}
                        </span>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${info.color}`}>
                          {info.label}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 truncate">{contract.templateId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                      <p className="text-sm text-slate-500 truncate mt-0.5">{mainField}</p>
                      <p className="text-xs text-slate-400 mt-2">{formatDate(contract.createdAt)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-bold text-slate-900">R$ {contract.amount}</span>
                      <button
                        onClick={() => router.push(`/templates/${contract.templateId}?edit=${contract.id}`)}
                        className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Reeditar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
