import type { Metadata } from 'next';
import './globals.css';
import { RiskDisclosureBar } from '@/components/site/RiskDisclosureBar';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteNavigation } from '@/components/site/SiteNavigation';
import { siteConfig } from '@/lib/constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: `${siteConfig.name} — Premium Thai Forex/CFD Broker Concept`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    'BestonFX public website starter for premium Thai-market Forex/CFD broker positioning, AI support, LINE integration, and IB portal foundation.',
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <body>
        <RiskDisclosureBar />
        <SiteNavigation />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
