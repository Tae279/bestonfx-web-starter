import { ComplianceNote } from '@/components/site/ComplianceNote';
import { IBPartnerCTA } from '@/components/site/IBPartnerCTA';
import { SectionHeader } from '@/components/site/SectionHeader';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Partners'
};

export default function PartnersPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="IB Partnership"
        title="สร้างธุรกิจแนะนำลูกค้าแบบโปร่งใส พร้อมระบบติดตามและสื่อที่ผ่านการอนุมัติ"
        description="หน้านี้ใช้สำหรับสมัคร IB, อธิบาย commission model, referral link, asset library และ payout visibility โดยไม่รับประกันรายได้"
      />
      <div className="mt-10">
        <IBPartnerCTA embedded />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/partners/dashboard">ดู Portal Mock</Button>
        <Button href="/support" variant="secondary">คุยกับ Partner Manager</Button>
      </div>
      <div className="mt-8">
        <ComplianceNote>
          ตัวอย่าง commission เป็นการสาธิตวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับ program terms, volume จริง และการอนุมัติ
        </ComplianceNote>
      </div>
    </section>
  );
}
