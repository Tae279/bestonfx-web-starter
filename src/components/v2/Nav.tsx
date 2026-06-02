'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { v2Nav, LINE_URL } from '@/content/v2-home';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[33px] z-40 border-b border-ink-200/70 bg-white/80 backdrop-blur-md sm:top-[37px]">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white shadow-glow-sm">
            B
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink-900">
            Beston<span className="text-brand-700">FX</span>
          </span>
          <span className="ml-1 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
            POC
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {v2Nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LINE_URL}
            className="rounded-full bg-line-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-line-600"
          >
            เพิ่มเพื่อน LINE
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-100 md:hidden"
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {v2Nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINE_URL}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-line-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              เพิ่มเพื่อน LINE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
