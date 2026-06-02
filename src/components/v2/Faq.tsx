'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-ink-200 bg-ink-50/50">
      <div className="container py-16 md:py-24">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-ink-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-ink-900">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-700 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
