import { RiskDisclosureBar } from '@/components/site/RiskDisclosureBar';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteNavigation } from '@/components/site/SiteNavigation';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RiskDisclosureBar />
      <SiteNavigation />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
