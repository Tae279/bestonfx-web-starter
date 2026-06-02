import { Check, Lock } from 'lucide-react';
import { accounts, PENDING } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

export function Accounts() {
  return (
    <section id="accounts" className="border-y border-ink-200 bg-ink-50/50">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow={accounts.eyebrow}
          title={accounts.title}
          description={accounts.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {accounts.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                tier.highlight
                  ? 'border-brand-700 bg-white shadow-glow'
                  : 'border-ink-200 bg-white shadow-card'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                  แนะนำ
                </span>
              )}
              <h3 className="text-xl font-semibold text-ink-900">{tier.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{tier.tagline}</p>

              <dl className="mt-6 space-y-3 border-t border-ink-100 pt-6">
                {accounts.rows.map((row) => (
                  <div key={row} className="flex items-center justify-between gap-3">
                    <dt className="text-sm text-ink-500">{row}</dt>
                    <dd className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-[#b45309]">
                      <Lock className="h-3 w-3" />
                      รอยืนยัน
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="/accounts"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? 'bg-brand-700 text-white hover:bg-brand-600'
                    : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
                }`}
              >
                <Check className="h-4 w-4" />
                ดูรายละเอียดบัญชี
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink-500">
          * สเปรด ค่าธรรมเนียม Leverage และเงินฝากขั้นต่ำ: {PENDING}
        </p>
      </div>
    </section>
  );
}
