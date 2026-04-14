import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Contrato Express - Contratos Profissionais para Freelancers',
  description: 'Gere contratos personalizados em PDF. R$ 29 por contrato. Sem advogado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}