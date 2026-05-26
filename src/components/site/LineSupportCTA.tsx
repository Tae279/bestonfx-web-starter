import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LineSupportCTA({ embedded = false }: { embedded?: boolean }) {
  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper className={embedded ? '' : 'container py-16'}>
      <div className="premium-card grid overflow-hidden rounded-[2rem] lg:grid-cols-[1fr_0.8fr]">
        <div className="p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-line-500/10 px-4 py-2 text-sm text-line-500">
            <MessageCircle className="h-4 w-4" /> LINE-first support
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            มีคำถามเรื่องบัญชีหรือเอกสาร? คุยกับทีม BestonFX ทาง LINE
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            เหมาะสำหรับสอบถามขั้นตอนเปิดบัญชี เอกสาร เงื่อนไขบัญชี และการใช้งานเครื่องมือ ทีมงานไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={process.env.NEXT_PUBLIC_LINE_OA_URL ?? '/support'}>เพิ่มเพื่อน LINE</Button>
            <Button href="/support" variant="secondary">ดู Help Center</Button>
          </div>
        </div>
        <div className="border-t border-white/10 bg-navy-950/70 p-8 lg:border-l lg:border-t-0">
          <div className="rounded-3xl border border-line-500/20 bg-line-500/10 p-5">
            <p className="text-sm text-slate-400">LINE chat preview</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">เปิดบัญชีต้องใช้อะไรบ้าง?</div>
              <div className="rounded-2xl bg-line-500/10 p-4 text-sm text-slate-100">
                AI/ทีมงานจะช่วยอธิบายขั้นตอนเอกสารและเงื่อนไขทั่วไป พร้อมแจ้งความเสี่ยงก่อนตัดสินใจ
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-600 p-6 text-center text-xs text-slate-400">QR placeholder</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
