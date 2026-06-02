'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <SplineFallback label="กำลังโหลด 3D…" />
});

function SplineFallback({ label }: { label: string }) {
  return (
    <div
      className="flex h-full min-h-[280px] w-full items-center justify-center rounded-[2rem] border border-brand-200/60 bg-gradient-to-br from-brand-50 via-white to-brand-100/80"
      aria-hidden
    >
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl bg-brand-200/80" />
        <p className="mt-4 text-sm font-medium text-ink-500">{label}</p>
      </div>
    </div>
  );
}

/**
 * Embeds a Spline scene when NEXT_PUBLIC_SPLINE_HERO_SCENE is set.
 * Export from Spline: Code → React (or Next.js) → copy prod.spline.design URL.
 */
export function SplineHero({ className }: { className?: string }) {
  const scene = process.env.NEXT_PUBLIC_SPLINE_HERO_SCENE;
  const [reducedMotion, setReducedMotion] = useState(false);
  const [load3d, setLoad3d] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!scene) {
    return (
      <SplineFallback label="ตั้งค่า NEXT_PUBLIC_SPLINE_HERO_SCENE หลัง export จาก Spline" />
    );
  }

  if (reducedMotion) {
    return <SplineFallback label="3D ปิดเมื่อเปิด reduced motion" />;
  }

  return (
    <div className={className}>
      {!load3d ? (
        <button
          type="button"
          onClick={() => setLoad3d(true)}
          className="group relative flex h-full min-h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-brand-200 bg-brand-gradient p-8 text-white shadow-glow"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            3D Preview
          </span>
          <span className="mt-3 text-lg font-semibold">แตะเพื่อโหลด Spline scene</span>
          <span className="mt-2 text-sm text-white/70">ประหยัด bandwidth บนมือถือ</span>
        </button>
      ) : (
        <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-[2rem]">
          <Spline scene={scene} className="h-full w-full" />
        </div>
      )}
    </div>
  );
}
