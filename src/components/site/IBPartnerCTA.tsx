import { UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function IBPartnerCTA({ embedded = false }: { embedded?: boolean }) {
  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper className={embedded ? '' : 'container py-16'}>
      <div className="premium-card rounded-[2rem] p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-2 text-sm text-gold-300">
              <UsersRound className="h-4 w-4" /> IB partner program
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Partner landing + portal สำหรับ lot-based commission model
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              ออกแบบให้พาร์ทเนอร์เห็น referral link, lead status, monthly lot summary และ estimated/confirmed payout โดยต้องมี audit trail และ approved marketing assets
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/partners">สมัครเป็นพาร์ทเนอร์</Button>
              <Button href="/partners/dashboard" variant="secondary">ดู Portal Mock</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-gold-500/20 bg-navy-950/70 p-6">
            <p className="text-sm text-slate-400">Commission estimator mock</p>
            <div className="mt-5 space-y-4 text-sm">
              <MockRow label="Monthly lots" value="รอยืนยัน" />
              <MockRow label="Commission / lot" value="รอยืนยัน" />
              <MockRow label="Estimated commission" value="ตัวอย่างเท่านั้น" />
            </div>
            <p className="mt-6 text-xs leading-6 text-amber-200">
              ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function MockRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
