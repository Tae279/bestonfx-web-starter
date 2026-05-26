import { ComplianceNote } from '@/components/site/ComplianceNote';
import { SectionHeader } from '@/components/site/SectionHeader';
import { trustCards } from '@/content/home';

export const metadata = {
  title: 'Why BestonFX'
};

export default function WhyBestonFXPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Why BestonFX"
        title="สร้างบนหลักการ: โปร่งใส ตรวจสอบได้ ดูแลจริง"
        description="หน้านี้ควรใช้เป็นพื้นที่อธิบาย entity, regulatory status, risk policy, support process และ DX ecosystem หลังข้อมูลได้รับการอนุมัติ"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {trustCards.map((card) => (
          <article key={card.title} className="premium-card rounded-2xl p-6">
            <p className="text-sm font-medium text-brand-700">{card.eyebrow}</p>
            <h2 className="mt-3 text-xl font-semibold text-ink-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink-600">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <ComplianceNote>
          รอยืนยัน regulatory/entity wording ก่อนเผยแพร่จริง ห้ามใช้ข้อความที่สื่อว่าอยู่ภายใต้การกำกับของหน่วยงานใดหากยังไม่มีหลักฐานและ approval
        </ComplianceNote>
      </div>
    </section>
  );
}
