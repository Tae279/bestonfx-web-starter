import { featureMarquee } from '@/content/v2-home';
import { Marquee } from '@/components/motion/marquee';

export function FeatureMarquee() {
  return (
    <section
      className="border-y border-ink-200/80 bg-white py-5"
      aria-label="จุดเด่นหลัก"
    >
      <Marquee speed="45s" className="[--marquee-duration:45s]">
        {featureMarquee.map((label) => (
          <span
            key={label}
            className="inline-flex shrink-0 items-center rounded-full border border-brand-200/80 bg-brand-50/80 px-4 py-2 text-sm font-medium text-brand-800"
          >
            {label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
