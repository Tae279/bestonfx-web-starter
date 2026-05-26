import { SectionHeader } from '@/components/site/SectionHeader';

export const metadata = {
  title: 'Risk Disclosure'
};

export default function RiskDisclosurePage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Legal"
        title="คำเตือนความเสี่ยง"
        description="เอกสารนี้เป็น placeholder สำหรับ POC และต้องผ่าน legal/compliance review ก่อนเผยแพร่จริง"
      />
      <div className="premium-card mt-10 space-y-6 rounded-3xl p-8 text-sm leading-7 text-slate-300">
        <p>
          Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
        </p>
        <p>
          ข้อมูลบนเว็บไซต์นี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุนเฉพาะบุคคล ไม่ใช่คำสั่งซื้อขาย และไม่ใช่การรับประกันผลตอบแทน
        </p>
        <p>
          ผู้ใช้ควรพิจารณาฐานะการเงิน วัตถุประสงค์การลงทุน ความรู้ ประสบการณ์ และระดับความเสี่ยงที่ยอมรับได้ก่อนใช้ผลิตภัณฑ์ใด ๆ
        </p>
        <p className="text-gold-300">รอยืนยันเอกสารฉบับเต็มจากฝ่ายกำกับดูแลก่อน publish</p>
      </div>
    </section>
  );
}
