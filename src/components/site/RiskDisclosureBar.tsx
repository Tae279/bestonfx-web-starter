import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export function RiskDisclosureBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-gold-500/20 bg-graphite-950/95 text-xs text-slate-200 backdrop-blur-xl">
      <div className="container flex min-h-9 items-center justify-between gap-3 py-2">
        <div className="flex items-start gap-2 sm:items-center">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold-300 sm:mt-0" aria-hidden="true" />
          <p>
            Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
          </p>
        </div>
        <Link href="/legal/risk-disclosure" className="hidden shrink-0 text-gold-300 hover:text-gold-400 sm:block">
          อ่านคำเตือน
        </Link>
      </div>
    </div>
  );
}
