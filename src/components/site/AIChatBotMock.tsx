import { Bot, MessageCircle } from 'lucide-react';

const suggestions = ['เปิดบัญชีต้องใช้อะไรบ้าง?', 'Leverage คืออะไร?', 'สมัคร IB ต้องทำอย่างไร?', 'คุยกับเจ้าหน้าที่ทาง LINE'];

export function AIChatBotMock() {
  return (
    <aside className="fixed bottom-5 right-5 z-40 hidden w-[340px] rounded-3xl border border-gold-500/20 bg-graphite-950/95 p-4 shadow-premium backdrop-blur-xl xl:block">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium">BestonFX AI Help</p>
          <p className="text-xs text-slate-400">ข้อมูลทั่วไป ไม่ใช่ trading advice</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
        สวัสดีครับ ต้องการถามเรื่องบัญชี เอกสาร เครื่องมือ หรือสมัคร IB ไหมครับ?
      </div>
      <div className="mt-4 space-y-2">
        {suggestions.map((item) => (
          <button key={item} className="w-full rounded-2xl border border-white/10 px-3 py-2 text-left text-xs text-slate-300 transition hover:border-gold-500/30 hover:text-gold-300">
            {item}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-line-500/20 bg-line-500/10 px-3 py-2 text-xs text-line-500">
        <MessageCircle className="h-4 w-4" /> Escalate to LINE support
      </div>
    </aside>
  );
}
