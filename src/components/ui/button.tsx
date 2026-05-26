import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const variantClasses = {
  primary: 'bg-gold-500 text-navy-950 hover:bg-gold-300',
  secondary: 'border border-gold-500/30 bg-gold-500/10 text-gold-300 hover:bg-gold-500/20',
  ghost: 'text-slate-200 hover:bg-white/10'
};

const sizeClasses = {
  default: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base'
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  onClick
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
