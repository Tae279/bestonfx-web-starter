'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const beams = [
  { left: '8%', delay: 0, height: '55%' },
  { left: '28%', delay: 0.4, height: '70%' },
  { left: '52%', delay: 0.2, height: '48%' },
  { left: '72%', delay: 0.6, height: '62%' },
  { left: '88%', delay: 0.3, height: '40%' }
];

/** Aceternity-inspired vertical beams — light fintech variant */
export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]',
        className
      )}
      aria-hidden
    >
      {beams.map((beam) => (
        <motion.span
          key={beam.left}
          className="absolute bottom-0 w-px bg-gradient-to-t from-brand-700/0 via-brand-500/25 to-transparent"
          style={{ left: beam.left, height: beam.height }}
          initial={{ opacity: 0.2, scaleY: 0.6 }}
          animate={{ opacity: [0.15, 0.45, 0.15], scaleY: [0.5, 1, 0.5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: beam.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
