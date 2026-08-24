import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campanha PWA Eleitoral',
  description: 'Gestão eleitoral e mobilização de base',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
