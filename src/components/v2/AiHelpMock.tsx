import { Bot, MessageCircle } from 'lucide-react';
import { bot, LINE_URL } from '@/content/v2-home';
import { SectionHeading } from './SectionHeading';

export function AiHelpMock() {
  return (
    <section id="ai-help" className="bg-surface-tint">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow="AI HELP"
          title={bot.panelTitle}
          description={bot.panelSubtitle}
          align="center"
        />

        <div className="premium-card mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] p-5 md:grid md:grid-cols-[0.85fr_1.15fr] md:p-6">
          <div className="rounded-3xl bg-brand-gradient p-6 text-white md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
              {bot.launcherLabel}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/80">{bot.sampleReply}</p>
            <p className="mt-6 text-xs text-white/70">{bot.complianceFooter}</p>
          </div>

          <div className="p-2 pt-5 md:p-6">
            <div className="flex items-center gap-3 border-b border-ink-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-900">Mock conversation</p>
                <p className="text-xs text-ink-500">ไม่ใช่ trading advice</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {bot.suggestedQuestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="w-full rounded-2xl border border-ink-200 px-3 py-2.5 text-left text-xs text-ink-600 transition hover:border-brand-200 hover:text-brand-700"
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href={LINE_URL}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-line-500/20 bg-line-500/10 px-3 py-3 text-sm font-medium text-line-600 transition hover:bg-line-500/15"
            >
              <MessageCircle className="h-4 w-4" />
              {bot.escalationText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
