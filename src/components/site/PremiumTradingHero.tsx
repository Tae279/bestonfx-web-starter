import { ArrowRight, LineChart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PremiumTradingHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs text-brand-700">
            <ShieldCheck className="h-4 w-4" />
            Premium Thai Forex/CFD broker concept
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tightest text-ink-900 md:text-6xl">
            โครงสร้างการเทรดระดับมืออาชีพ สำหรับนักเทรดไทยที่ต้องการความโปร่งใสและการดูแลจริง
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">
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
          <p className="mt-5 max-w-xl text-xs leading-6 text-amber-700">
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
    <div className="premium-card rounded-[2rem] p-5 shadow-glow">
      <div className="flex items-center justify-between border-b border-ink-200 pb-4">
        <div>
          <p className="text-sm text-ink-500">BestonFX terminal concept</p>
          <p className="mt-1 text-xl font-semibold text-ink-900">Risk-first dashboard</p>
        </div>
        <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
          <LineChart className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-200 bg-ink-50 p-4">
          <p className="text-xs text-ink-500">Risk meter</p>
          <div className="mt-4 h-2 rounded-full bg-ink-200">
            <div className="h-2 w-2/3 rounded-full bg-brand-700" />
          </div>
          <p className="mt-3 text-xs text-amber-700">คำนวณก่อนเปิดสถานะ</p>
        </div>
        <div className="rounded-2xl border border-line-500/20 bg-line-500/10 p-4">
          <p className="text-xs text-ink-500">LINE support</p>
          <p className="mt-3 text-sm font-medium text-ink-900">ถามบัญชี เอกสาร เครื่องมือ</p>
          <p className="mt-2 text-xs text-ink-500">ไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล</p>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map(([symbol, value, note]) => (
          <div key={symbol} className="grid grid-cols-3 rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm">
            <span className="font-medium text-ink-900">{symbol}</span>
            <span className="text-ink-600">{value}</span>
            <span className="text-right text-xs text-ink-400">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
