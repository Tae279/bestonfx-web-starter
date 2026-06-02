import {
  ArrowUpRight,
  CalendarClock,
  Calculator,
  Coins,
  Gauge,
  MessageCircleQuestion,
  Scale
} from 'lucide-react';
import { tools } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

const icons = [Coins, Scale, Gauge, CalendarClock, Calculator, MessageCircleQuestion];

const statusStyle: Record<string, string> = {
  Demo: 'bg-brand-100 text-brand-700',
  'Coming soon': 'bg-ink-100 text-ink-500',
  Placeholder: 'bg-amber-100 text-[#b45309]',
  Mock: 'bg-ink-100 text-ink-500'
};

export function Tools() {
  return (
    <section id="tools" className="bg-white">
      <div className="container py-16 md:py-24">
        <SectionHeading eyebrow={tools.eyebrow} title={tools.title} description={tools.description} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.items.map((tool, i) => {
            const Icon = icons[i % icons.length] ?? Calculator;
            return (
              <article
                key={tool.title}
                className="premium-card flex flex-col rounded-3xl p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      statusStyle[tool.status] ?? 'bg-ink-100 text-ink-500'
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{tool.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">
                  {tool.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  ดูรายละเอียด
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
