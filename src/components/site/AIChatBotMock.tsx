import { Bot, MessageCircle } from 'lucide-react';

const suggestions = ['เปิดบัญชีต้องใช้อะไรบ้าง?', 'Leverage คืออะไร?', 'สมัคร IB ต้องทำอย่างไร?', 'คุยกับเจ้าหน้าที่ทาง LINE'];

export function AIChatBotMock() {
  return (
    <section className="container py-16">
      <div className="premium-card mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-5 md:grid md:grid-cols-[0.85fr_1.15fr] md:p-6">
        <div className="rounded-3xl bg-brand-gradient p-6 text-white md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">BestonFX AI Help</h2>
          <p className="mt-4 text-sm leading-7 text-white/80">
            ตัวอย่างผู้ช่วยตอบคำถามทั่วไปเกี่ยวกับบัญชี เอกสาร เครื่องมือ และการส่งต่อให้ทีม LINE โดยไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล
          </p>
        </div>
        <div className="p-2 pt-5 md:p-6">
          <div className="flex items-center gap-3 border-b border-ink-200 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-ink-900">AI help preview</p>
              <p className="text-xs text-ink-500">ข้อมูลทั่วไป ไม่ใช่ trading advice</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-ink-50 p-4 text-sm leading-6 text-ink-600">
            สวัสดีครับ ต้องการถามเรื่องบัญชี เอกสาร เครื่องมือ หรือสมัคร IB ไหมครับ?
          </div>
          <div className="mt-4 space-y-2">
            {suggestions.map((item) => (
              <button key={item} className="w-full rounded-2xl border border-ink-200 px-3 py-2 text-left text-xs text-ink-600 transition hover:border-brand-200 hover:text-brand-700">
                {item}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-line-500/20 bg-line-500/10 px-3 py-2 text-xs text-line-600">
            <MessageCircle className="h-4 w-4" /> ส่งต่อให้ทีม LINE support
          </div>
        </div>
      </div>
    </section>
  );
}
