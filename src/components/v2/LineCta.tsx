import { Clock, MessageCircle, QrCode } from 'lucide-react';
import { line, LINE_URL } from '@/content/v2-home';

export function LineCta() {
  return (
    <section className="bg-white">
      <div className="container pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-200 bg-surface-tint p-8 shadow-card sm:p-12">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-line-500/10 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-line-600">
                {line.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {line.headline}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{line.subheadline}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={LINE_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-line-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-line-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  {line.primaryButton}
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-700 transition-colors hover:bg-ink-50"
                >
                  {line.secondaryButton}
                </a>
              </div>

              <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink-500">
                <Clock className="h-4 w-4" />
                {line.supportHours}
              </p>
            </div>

            <div className="premium-card rounded-3xl p-5">
              <div className="space-y-3">
                {line.chat.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'ml-auto bg-brand-700 text-white'
                        : 'bg-ink-100 text-ink-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-ink-50 p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-line-600 shadow-sm">
                  <QrCode className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-ink-500">{line.qrLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
