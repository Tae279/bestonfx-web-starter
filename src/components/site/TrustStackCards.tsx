import { ShieldCheck, Calculator, MessageCircle, GraduationCap, Landmark, Users } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const cards = [
  {
    icon: ShieldCheck,
    title: 'ข้อมูลชัดเจนก่อนเปิดบัญชี',
    description: 'แสดงเงื่อนไขและความเสี่ยงแบบตรวจสอบได้ ก่อนให้ผู้ใช้ตัดสินใจ'
  },
  {
    icon: Calculator,
    title: 'เครื่องมือคำนวณความเสี่ยง',
    description: 'Pip, margin, position risk และ trading cost estimator สำหรับ pre-trade discipline'
  },
  {
    icon: MessageCircle,
    title: 'LINE Support สำหรับนักเทรดไทย',
    description: 'ออกแบบ conversion และ support flow ให้ตรงพฤติกรรมผู้ใช้ไทย'
  },
  {
    icon: GraduationCap,
    title: 'DX Academy',
    description: 'เชื่อมระบบการเรียนรู้และ risk education โดยไม่สัญญาผลลัพธ์'
  },
  {
    icon: Landmark,
    title: 'DX Exclusive',
    description: 'พื้นที่ premium experience ที่ต้องควบคุมคำเคลมและ eligibility ให้ชัด'
  },
  {
    icon: Users,
    title: 'IB tracking สำหรับพาร์ทเนอร์',
    description: 'โครงสร้าง referral, lead, lot summary และ payout visibility สำหรับ Phase 2'
  }
];

export function TrustStackCards() {
  return (
    <section className="container py-16">
      <SectionHeader
        eyebrow="Trust stack"
        title="ขายความโปร่งใสก่อนขายการเปิดบัญชี"
        description="BestonFX POC นี้ถูกออกแบบให้ premium แต่ไม่หลุดกรอบ compliance: ไม่มี profit guarantee, ไม่มี fake stats, ไม่มีคำเคลม regulation ที่ยังไม่ยืนยัน"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="premium-card rounded-3xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
