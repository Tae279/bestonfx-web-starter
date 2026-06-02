import { AlertTriangle } from 'lucide-react';
import { ib } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

export function IbMock() {
  return (
    <section id="partners" className="bg-white">
      <div className="container py-16 md:py-24">
        <SectionHeading eyebrow={ib.eyebrow} title={ib.title} description={ib.description} />

        <div className="mt-12 grid gap-6 overflow-hidden rounded-[2rem] border border-ink-200 bg-white shadow-card lg:grid-cols-2">
          {/* Inputs (visual-only) */}
          <div className="border-b border-ink-100 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <p className="text-sm font-semibold text-ink-800">ตัวอย่างการกรอกข้อมูล</p>
            <div className="mt-5 space-y-4">
              {ib.inputs.map((input) => (
                <label key={input.label} className="block">
                  <span className="text-sm font-medium text-ink-600">{input.label}</span>
                  <input
                    type="text"
                    disabled
                    placeholder={input.placeholder}
                    className="mt-1.5 w-full cursor-not-allowed rounded-xl border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm text-ink-500 placeholder:text-ink-400"
                  />
                </label>
              ))}
            </div>
            <span className="mt-5 inline-flex rounded-full bg-ink-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
              Mock only
            </span>
          </div>

          {/* Output + disclaimer */}
          <div className="flex flex-col justify-between gap-6 bg-brand-50/60 p-7 sm:p-9">
            <div className="rounded-2xl border border-brand-200 bg-white p-6">
              <p className="text-sm font-medium text-ink-500">{ib.outputLabel}</p>
              <p className="mt-2 text-lg font-semibold text-ink-900">{ib.outputValue}</p>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#b45309]" aria-hidden />
              <p className="text-[13px] leading-relaxed text-[#92400e]">{ib.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
