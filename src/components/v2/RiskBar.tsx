import { ShieldAlert } from 'lucide-react';
import { RISK_WARNING } from '@/content/v2-home';

export function RiskBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50/95 backdrop-blur">
      <div className="container flex items-center gap-3 py-2">
        <ShieldAlert className="hidden h-4 w-4 shrink-0 text-[#b45309] sm:block" aria-hidden />
        <p className="text-xs leading-snug text-[#92400e] sm:text-[13px]">
          {RISK_WARNING}{' '}
          <a
            href="/legal/risk-disclosure"
            className="font-medium text-[#b45309] underline underline-offset-2 hover:text-[#92400e]"
          >
            อ่านคำเตือนความเสี่ยง
          </a>
        </p>
      </div>
    </div>
  );
}
