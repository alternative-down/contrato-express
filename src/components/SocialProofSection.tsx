'use client';

import { useEffect, useState } from 'react';

function formatCount(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString('pt-BR');
  }
  return String(n);
}

export function SocialProofSection() {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);

    async function fetchCount() {
      try {
        const res = await fetch('/api/analytics/contract-count');
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch {
        // Silently fail — no badge shown
      }
    }

    fetchCount();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mt-8 inline-flex items-center gap-2 bg-white/60 border border-purple-100 rounded-full px-5 py-2 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex -space-x-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs">👩</div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">👨</div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs">🧑</div>
      </div>
      <span className="text-sm text-slate-700">
        {count !== null && count > 0
          ? `Mais de ${formatCount(count)} contratos criados`
          : 'Contratos gerados por freelancers e autônomos brasileiros'}
      </span>
    </div>
  );
}
