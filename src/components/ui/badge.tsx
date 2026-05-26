import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'brand' | 'muted' | 'risk';
  className?: string;
};

const variants = {
  brand: 'border-brand-200 bg-brand-50 text-brand-700',
  muted: 'border-ink-200 bg-ink-50 text-ink-600',
  risk: 'border-amber-300 bg-amber-50 text-amber-700'
};

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-medium', variants[variant], className)}>{children}</span>;
}
