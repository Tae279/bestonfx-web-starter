import { ShieldAlert } from 'lucide-react';

export function ComplianceNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
      <div className="flex gap-3">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
        <div>{children}</div>
      </div>
    </div>
  );
}
