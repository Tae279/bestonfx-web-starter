'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { BackgroundBeams } from '@/components/motion/background-beams';
import { MovingBorder } from '@/components/motion/moving-border';
import { Spotlight } from '@/components/motion/spotlight';
import { hero, LINE_URL } from '@/content/v2-home';

function HeroMockCard() {
  return (
    <div className="premium-card rounded-[2rem] p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-ink-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-line-500" />
          <span className="text-sm font-semibold text-ink-800">Trading Command Center</span>
        </div>
        <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
          Preview
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {hero.mockCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-ink-200 bg-ink-50/60 p-4">
            <p className="text-xs font-medium text-ink-500">{card.label}</p>
            <p className="mt-2 line-clamp-2 text-sm font-semibold text-ink-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-brand-gradient p-4 text-white">
        <p className="text-xs font-medium text-white/80">Risk-first onboarding</p>
        <div className="mt-3 h-2 w-full rounded-full bg-white/25">
          <div className="h-2 w-2/3 rounded-full bg-white" />
        </div>
        <p className="mt-2 text-xs text-white/80">ขั้นตอนเน้นความเข้าใจความเสี่ยงก่อนเริ่ม</p>
      </div>
    </div>
  );
}

export function ImmersiveHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const copy = copyRef.current;
    const visual = visualRef.current;
    const glow = glowRef.current;
    const card = cardRef.current;
    const float = floatRef.current;

    if (!section || !pin || !copy || !visual || !glow || !card || !float) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: pin,
          scrub: 0.85,
          anticipatePin: 1
        }
      });

      tl.fromTo(
        copy,
        { opacity: 1, y: 0 },
        { opacity: 0.55, y: -48, ease: 'none' },
        0
      );

      tl.fromTo(
        glow,
        { scale: 0.85, opacity: 0.35 },
        { scale: 1.2, opacity: 0.65, ease: 'none' },
        0
      );

      tl.fromTo(
        card,
        { scale: 0.88, y: 40, rotateX: 8 },
        { scale: 1.04, y: -24, rotateX: 0, ease: 'none' },
        0
      );

      tl.fromTo(
        float,
        { y: 0 },
        { y: -80, ease: 'none' },
        0
      );

      gsap.to(visual, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-hero-radial"
      aria-label="Hero"
    >
      <BackgroundBeams className="opacity-90" />
      <div ref={pinRef} className="relative z-10 flex min-h-[100dvh] items-center">
        <div className="container grid w-full items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div ref={copyRef} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {hero.headline}
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-600">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#accounts"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={LINE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                <MessageCircle className="h-4 w-4" />
                {hero.secondaryCta}
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-ink-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#b45309]" aria-hidden />
              {hero.riskNote}
            </p>
          </div>

          <Spotlight className="relative min-h-[320px] lg:min-h-[420px]">
            <div
              ref={visualRef}
              className="relative min-h-[320px] [perspective:1200px] lg:min-h-[420px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                ref={glowRef}
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-40 blur-3xl"
              />

              <div ref={floatRef} className="relative">
                <div ref={cardRef} className="will-change-transform">
                  <MovingBorder borderRadius="2rem">
                    <HeroMockCard />
                  </MovingBorder>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
