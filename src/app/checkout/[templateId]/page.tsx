'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getTemplateById } from '@/lib/templates';

const CHECKOUT_STORAGE_KEY = 'contrato-express:checkout-session';

type PaymentMethod = 'pix' | 'boleto' | 'credit_card';

type CheckoutSession = {
  paymentId: string;
  paymentMethod: PaymentMethod;
  invoiceUrl?: string | null;
  pix?: {
    encodedImage?: string | null;
    payload?: string | null;
    expirationDate?: string | null;
  } | null;
  boleto?: {
    bankSlipUrl?: string | null;
    invoiceUrl?: string | null;
    identificationField?: string | null;
    nossoNumero?: string | null;
    barCode?: string | null;
  } | null;
  creditCard?: {
    invoiceUrl?: string | null;
  } | null;
};

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
  const paymentMethod = (searchParams.get('paymentMethod') as PaymentMethod | null) || 'pix';
  const [contract, setContract] = useState<Contract | null>(null);
  const [checking, setChecking] = useState(true);
  const [checkoutSession, setCheckoutSession] = useState<CheckoutSession | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(CHECKOUT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CheckoutSession;
        if (parsed.paymentId === paymentId) {
          setCheckoutSession(parsed);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, [paymentId]);

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

  const pixData = checkoutSession?.pix;
  const boletoData = checkoutSession?.boleto;
  const cardInvoiceUrl = checkoutSession?.creditCard?.invoiceUrl || checkoutSession?.invoiceUrl;

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


        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            Precisa de ajuda?{' '}
            <Link href="/support" className="text-purple-600 hover:underline">
              Fale com o suporte
            </Link>
          </p>
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
