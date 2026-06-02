'use client';

import { useCallback, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/** Aceternity-style cursor spotlight — adapted for BestonFX light theme */
export function Spotlight({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const background = useMotionTemplate`radial-gradient(720px circle at ${mouseX}px ${mouseY}px, rgba(0, 64, 193, 0.14), transparent 72%)`;

  return (
    <div
      className={cn('group relative overflow-hidden', className)}
      onMouseMove={onMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
