import { Hero } from '@/components/v2/Hero';
import { FeatureMarquee } from '@/components/v2/FeatureMarquee';
import { TrustStack } from '@/components/v2/TrustStack';
import { Tools } from '@/components/v2/Tools';
import { AiHelpMock } from '@/components/v2/AiHelpMock';
import { Accounts } from '@/components/v2/Accounts';
import { IbMock } from '@/components/v2/IbMock';
import { LineCta } from '@/components/v2/LineCta';
import { Faq } from '@/components/v2/Faq';
import { ScrollReveal } from '@/components/v2/ScrollReveal';

export default function V2HomePage() {
  return (
    <>
      <Hero />

      <FeatureMarquee />

      <ScrollReveal>
        <TrustStack />
      </ScrollReveal>

      <ScrollReveal>
        <Tools />
      </ScrollReveal>

      <ScrollReveal>
        <AiHelpMock />
      </ScrollReveal>

      <ScrollReveal>
        <Accounts />
      </ScrollReveal>

      <ScrollReveal>
        <IbMock />
      </ScrollReveal>

      <ScrollReveal>
        <LineCta />
      </ScrollReveal>

      <ScrollReveal>
        <Faq />
      </ScrollReveal>
    </>
  );
}
