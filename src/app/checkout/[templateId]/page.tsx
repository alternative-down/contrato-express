'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PageProps {
  params: { templateId: string };
}

type ContractStatus = 'draft' | 'completed' | 'paid';

interface Contract {
  id: string;
  templateId: string;
  status: ContractStatus;
  data: Record<string, string> | null;
  content: string | null;
}

function CheckoutContent({ templateId }: { templateId: string }) {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId') || '';
  const contractId = searchParams.get('contractId') || '';
  const [contract, setContract] = useState<Contract | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!contractId) {
      setChecking(false);
      return;
    }

    const checkContract = async () => {
      try {
        const res = await fetch('/api/contracts', { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          const found = (data.contracts || []).find(
            (c: Contract) => c.id === contractId
          );
          setContract(found || null);
        }
      } catch {
        // ignore
      } finally {
        setChecking(false);
      }
    };

    // Check immediately and after a delay
    checkContract();
    const timer = setTimeout(checkContract, 3000);
    return () => clearTimeout(timer);
  }, [contractId]);

  const isReady = contract?.status === 'completed';
  const rawData = contract?.data;
  let content: string | null = null;
  if (rawData) {
    try { content = (typeof rawData === 'string' ? JSON.parse(rawData) : rawData).content || null; }
    catch { /* ignore */ }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Status icon */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
          isReady ? 'bg-green-100' : 'bg-amber-100'
        }`}>
          {isReady ? (
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-amber-500 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          {isReady ? 'Contrato gerado!' : 'Processando pagamento...'}
        </h1>

        {isReady ? (
          <p className="text-slate-600 mb-6">
            Seu pagamento foi confirmado e o contrato foi gerado com sucesso!
          </p>
        ) : (
          <p className="text-slate-600 mb-6">
            O QR Code PIX foi gerado. Complete o pagamento no app do seu banco para receber o contrato.
          </p>
        )}

        {/* Contract preview when ready */}
        {isReady && content && (
          <div className="bg-white rounded-xl border border-purple-100 p-4 mb-6 text-left max-h-64 overflow-y-auto">
            <pre className="text-xs text-slate-600 whitespace-pre-wrap font-serif leading-relaxed">
              {content.slice(0, 800)}{content.length > 800 ? '...' : ''}
            </pre>
          </div>
        )}

        {isReady && (
          <div className="bg-green-50 rounded-xl border border-green-200 p-4 mb-6 text-left">
            <p className="text-sm text-green-800 font-medium mb-2">✓ Contrato pronto</p>
            <p className="text-xs text-green-600">
              Acesse seus contratos na página Meus Contratos para ver o contrato completo.
            </p>
          </div>
        )}

        <div className="bg-slate-100 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-slate-600">
            <strong>Payment ID:</strong> {paymentId || 'N/A'}
          </p>
          {contractId && (
            <p className="text-xs text-slate-400 mt-1">
              Contrato: {contractId.slice(0, 8)}...
            </p>
          )}
        </div>

        <Link
          href="/app"
          className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
        >
          {isReady ? 'Ver Meus Contratos' : 'Aguardando Pagamento'}
        </Link>

        <Link href="/templates" className="block mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
          Gerar mais contratos
        </Link>

        {/* ─── Pack 5 Upsell Banner ─── */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-5 text-left">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-lg">
              ⭐
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Pack 5</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-1.5 py-0.5 rounded-full">17% OFF</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Precisa de mais contratos?
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Pack 5 — 5 contratos por <strong className="text-purple-600">R$ 79</strong> (R$ 15,80 cada).
                Todos os templates. Sem prazo de validade.
              </p>
              <a
                href="/checkout/pack5"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:shadow-md transition-all"
              >
                Comprar Pack 5 — R$ 79
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage({ params }: PageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
      </div>
    }>
      <CheckoutContent templateId={params.templateId} />
    </Suspense>
  );
}
