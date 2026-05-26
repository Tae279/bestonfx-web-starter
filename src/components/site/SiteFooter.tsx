import Link from 'next/link';

const footerLinks = [
  { href: '/legal/risk-disclosure', label: 'Risk Disclosure' },
  { href: '/support', label: 'Support' },
  { href: '/partners', label: 'Partners' },
  { href: '/admin', label: 'Admin' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold-500/10 bg-graphite-950/70">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-semibold">BestonFX</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            เว็บไซต์นี้เป็น production starter / POC foundation สำหรับ BestonFX เท่านั้น ข้อความเกี่ยวกับบัญชี เงื่อนไขการเทรด regulation และ commission ต้องได้รับการอนุมัติก่อนเผยแพร่จริง
          </p>
          <p className="mt-4 text-xs leading-6 text-amber-200">
            Forex/CFD และ Leverage มีความเสี่ยงสูง ข้อมูลบนเว็บไซต์นี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุนเฉพาะบุคคล และไม่มีการรับประกันผลตอบแทน
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
