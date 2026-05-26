import { LineSupportCTA } from '@/components/site/LineSupportCTA';
import { SectionHeader } from '@/components/site/SectionHeader';

const faqs = [
  'เปิดบัญชีต้องใช้อะไรบ้าง?',
  'Leverage คืออะไร และมีความเสี่ยงอย่างไร?',
  'สมัคร IB ต้องทำอย่างไร?',
  'ทีมงานให้คำแนะนำซื้อขายเฉพาะบุคคลหรือไม่?',
  'ร้องเรียนหรือขอให้ตรวจสอบเรื่องบัญชีได้ที่ไหน?'
];

export const metadata = {
  title: 'Support'
};

export default function SupportPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Support"
        title="LINE-first support พร้อม Help Center และ AI bot"
        description="ใช้สำหรับตอบคำถามบัญชี เอกสาร เครื่องมือ และการใช้งานทั่วไป โดยไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล"
      />
      <div className="mt-10">
        <LineSupportCTA embedded />
      </div>
      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq} className="premium-card rounded-2xl p-5 text-sm text-ink-700">
            {faq}
          </div>
        ))}
      </div>
    </section>
  );
}
