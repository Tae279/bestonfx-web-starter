import { ArrowRight, LineChart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PremiumTradingHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-premium-radial" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-xs text-gold-300">
            <ShieldCheck className="h-4 w-4" />
            Premium Thai Forex/CFD broker concept
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            โครงสร้างการเทรดระดับมืออาชีพ สำหรับนักเทรดไทยที่ต้องการความโปร่งใสและการดูแลจริง
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            BestonFX รวมข้อมูลบัญชี เครื่องมือคำนวณความเสี่ยง การเรียนรู้ และ LINE support เพื่อช่วยให้คุณตัดสินใจอย่างมีวินัย
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/accounts" size="lg">
              เปิดบัญชีทดลอง <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={process.env.NEXT_PUBLIC_LINE_OA_URL ?? '/support'} size="lg" variant="secondary">
              คุยกับทีมทาง LINE
            </Button>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-6 text-amber-200">
            ไม่มีการรับประกันผลตอบแทน การเทรด Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน
          </p>
        </div>
        <TradingTerminalMock />
      </div>
    </section>
  );
}

function TradingTerminalMock() {
  const rows = [
    ['XAUUSD', 'รอยืนยัน', 'Risk: High'],
    ['EURUSD', 'รอยืนยัน', 'Spread variable'],
    ['US30', 'รอยืนยัน', 'CFD risk']
  ];

  return (
    <div className="premium-card rounded-[2rem] p-5 shadow-gold">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-sm text-slate-400">BestonFX terminal concept</p>
          <p className="mt-1 text-xl font-semibold">Risk-first dashboard</p>
        </div>
        <div className="rounded-2xl bg-gold-500/10 p-3 text-gold-300">
          <LineChart className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gold-500/20 bg-navy-950/70 p-4">
          <p className="text-xs text-slate-400">Risk meter</p>
          <div className="mt-4 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-2/3 rounded-full bg-gold-500" />
          </div>
          <p className="mt-3 text-xs text-amber-200">คำนวณก่อนเปิดสถานะ</p>
        </div>
        <div className="rounded-2xl border border-line-500/20 bg-line-500/10 p-4">
          <p className="text-xs text-slate-400">LINE support</p>
          <p className="mt-3 text-sm font-medium text-white">ถามบัญชี เอกสาร เครื่องมือ</p>
          <p className="mt-2 text-xs text-slate-400">ไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล</p>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map(([symbol, value, note]) => (
          <div key={symbol} className="grid grid-cols-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
            <span className="font-medium text-white">{symbol}</span>
            <span className="text-slate-300">{value}</span>
            <span className="text-right text-xs text-slate-400">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
