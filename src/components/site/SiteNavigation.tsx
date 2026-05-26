import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteNav } from '@/lib/constants/site';

export function SiteNavigation() {
  return (
    <header className="sticky top-9 z-40 border-b border-ink-200 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700">
            B
          </span>
          <span className="font-semibold tracking-wide text-ink-900">BestonFX</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink-600 lg:flex">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/accounts" variant="secondary" className="hidden sm:inline-flex">
            เปิดบัญชีทดลอง
          </Button>
          <Button href={process.env.NEXT_PUBLIC_LINE_OA_URL ?? '/support'}>LINE</Button>
        </div>
      </div>
    </header>
  );
}
