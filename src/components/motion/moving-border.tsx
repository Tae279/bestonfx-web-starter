'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Magic UI–style animated border glow */
export function MovingBorder({
  children,
  className,
  borderRadius = '2rem',
  duration = 4
}: {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
  duration?: number;
}) {
  return (
    <div
      className={cn('relative overflow-hidden p-[1px]', className)}
      style={{ borderRadius }}
    >
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg 280deg, #2970ff 300deg, #0040c1 330deg, #6098ff 360deg)',
          borderRadius
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      />
      <div
        className="relative bg-white"
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </div>
  );
}
