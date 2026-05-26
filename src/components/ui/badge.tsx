import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'gold' | 'muted' | 'risk';
  className?: string;
};

const variants = {
  gold: 'border-gold-500/30 bg-gold-500/10 text-gold-300',
  muted: 'border-white/10 bg-white/5 text-slate-300',
  risk: 'border-amber-300/30 bg-amber-300/10 text-amber-200'
};

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-medium', variants[variant], className)}>{children}</span>;
}
