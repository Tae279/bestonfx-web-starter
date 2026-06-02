import { RISK_WARNING } from '@/content/v2-home';

const columns = [
  {
    title: 'บริษัท',
    links: [
      { label: 'ทำไมต้อง BestonFX', href: '/why-bestonfx' },
      { label: 'พาร์ทเนอร์ / IB', href: '/partners' },
      { label: 'ติดต่อทีมงาน', href: '/support' }
    ]
  },
  {
    title: 'ผลิตภัณฑ์',
    links: [
      { label: 'ประเภทบัญชี', href: '/accounts' },
      { label: 'ตลาดและสินค้า', href: '/markets' },
      { label: 'เครื่องมือ', href: '/tools' }
    ]
  },
  {
    title: 'กฎหมาย',
    links: [
      { label: 'คำเตือนความเสี่ยง', href: '/legal/risk-disclosure' },
      { label: 'ข้อกำหนดการใช้งาน', href: '#' },
      { label: 'นโยบายความเป็นส่วนตัว', href: '#' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                B
              </span>
              <span className="text-lg font-semibold tracking-tight text-ink-900">
                Beston<span className="text-brand-700">FX</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              โบรกเกอร์ Forex/CFD ที่โชว์ต้นทุนจริง คืน Rebate ทุก lot และดูแลโดยทีมไทย
              (เวอร์ชัน POC — ข้อมูลบางส่วนอยู่ระหว่างยืนยัน)
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink-900">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-[13px] leading-relaxed text-[#92400e]">{RISK_WARNING}</p>
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">
          © {new Date().getFullYear()} BestonFX (POC). หน้านี้เป็นต้นแบบเพื่อการนำเสนอ ข้อมูลด้านการกำกับดูแลและเงื่อนไขบริการอยู่ระหว่างการยืนยัน
        </p>
      </div>
    </footer>
  );
}
