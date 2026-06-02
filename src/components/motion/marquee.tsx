import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/** Magic UI–style infinite marquee (duplicate children for seamless loop) */
export function Marquee({
  className,
  children,
  reverse = false,
  pauseOnHover = true,
  speed = '40s'
}: {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        pauseOnHover && 'group',
        className
      )}
    >
      <div
        className={cn(
          'flex w-max items-center gap-4',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{ ['--marquee-duration' as string]: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
