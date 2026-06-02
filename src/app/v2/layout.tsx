import type { Metadata } from 'next';
import { RiskBar } from '@/components/v2/RiskBar';
import { Nav } from '@/components/v2/Nav';
import { Footer } from '@/components/v2/Footer';

export const metadata: Metadata = {
  title: 'Home POC — Cursor solo build',
  description:
    'BestonFX homepage experiment: Fizens-inspired light fintech layout, compliance-safe Thai copy, GSAP scroll motion.',
  robots: { index: false, follow: false }
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RiskBar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
