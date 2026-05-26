import { AccountComparisonPreview } from '@/components/site/AccountComparisonPreview';
import { AIChatBotMock } from '@/components/site/AIChatBotMock';
import { IBPartnerCTA } from '@/components/site/IBPartnerCTA';
import { LineSupportCTA } from '@/components/site/LineSupportCTA';
import { PremiumTradingHero } from '@/components/site/PremiumTradingHero';
import { TradingToolsGrid } from '@/components/site/TradingToolsGrid';
import { TrustStackCards } from '@/components/site/TrustStackCards';
import { SectionHeader } from '@/components/site/SectionHeader';

export default function HomePage() {
  return (
    <>
      <PremiumTradingHero />
      <TrustStackCards />
      <section className="container py-16">
        <SectionHeader
          eyebrow="Account path"
          title="เลือกเส้นทางจากข้อมูล ไม่ใช่จากความรีบ"
          description="MVP นี้ใช้ placeholder จนกว่าเงื่อนไขบัญชี, spread, commission, leverage และ platform จะได้รับการอนุมัติจากทีมกำกับดูแล"
        />
        <AccountComparisonPreview />
      </section>
      <TradingToolsGrid />
      <LineSupportCTA />
      <IBPartnerCTA />
      <AIChatBotMock />
    </>
  );
}
