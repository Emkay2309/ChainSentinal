import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChainSentinel - Web3 Security Auditing & Research',
  description: 'Professional blockchain security audits, smart contract reviews, and Web3 development services. Trusted by leading protocols.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900`}>{children}</body>
    </html>
  );
}