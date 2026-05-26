import { AccountComparisonPreview } from '@/components/site/AccountComparisonPreview';
import { ComplianceNote } from '@/components/site/ComplianceNote';
import { SectionHeader } from '@/components/site/SectionHeader';

export const metadata = {
  title: 'Accounts'
};

export default function AccountsPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Accounts"
        title="เลือกบัญชีจากต้นทุน วิธีเทรด และความเสี่ยงที่รับได้"
        description="ข้อมูลในหน้านี้เป็น placeholder สำหรับ POC ต้องยืนยัน account types, spread, commission, leverage และ platform ก่อน publish"
      />
      <div className="mt-10">
        <AccountComparisonPreview />
      </div>
      <div className="mt-8">
        <ComplianceNote>
          เงื่อนไขบัญชีอาจเปลี่ยนแปลงได้ ตัวเลข spread/commission/leverage ต้องมี source, date และ approval ก่อนแสดงบนเว็บไซต์จริง
        </ComplianceNote>
      </div>
    </section>
  );
}
