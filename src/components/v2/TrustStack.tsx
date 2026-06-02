'use client';

import { BadgeCheck, Calculator, FileCheck2, MessageSquare, Network, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { trust } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

const icons = [FileCheck2, BadgeCheck, Calculator, MessageSquare, Network, Users];

export function TrustStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="trust" className="border-y border-ink-200 bg-ink-50/50">
      <div className="container py-16 md:py-24">
        <SectionHeading eyebrow={trust.eyebrow} title={trust.title} description={trust.description} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.cards.map((card, i) => {
            const Icon = icons[i % icons.length] ?? FileCheck2;
            return (
              <motion.div
                key={card.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: reduceMotion ? 0 : i * 0.06, duration: 0.45 }}
                className="premium-card group rounded-3xl p-6 transition-shadow hover:shadow-glow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
