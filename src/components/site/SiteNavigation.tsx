import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteNav } from '@/lib/constants/site';

export function SiteNavigation() {
  return (
    <header className="sticky top-9 z-40 border-b border-gold-500/10 bg-navy-950/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/10 text-sm font-bold text-gold-300">
            B
          </span>
          <span className="font-semibold tracking-wide">BestonFX</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold-300">
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
