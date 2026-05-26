import { Badge } from '@/components/ui/badge';
import { ComplianceNote } from '@/components/site/ComplianceNote';
import { SectionHeader } from '@/components/site/SectionHeader';

const stats = [
  { label: 'Referral clicks', value: '—' },
  { label: 'Leads', value: '—' },
  { label: 'Monthly lots', value: 'รอยืนยัน' },
  { label: 'Estimated commission', value: 'รอยืนยัน' }
];

export const metadata = {
  title: 'Partner Dashboard'
};

export default function PartnerDashboardPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="IB Portal Mock"
        title="Partner dashboard foundation"
        description="MVP แสดง referral links, leads, lot summary และ estimated/confirmed payout หลังเชื่อม data source จริง"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="premium-card rounded-2xl p-6">
            <Badge variant="brand">MVP</Badge>
            <p className="mt-4 text-sm text-ink-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-ink-900">{stat.value}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <ComplianceNote>
          ต้องแยก Estimated commission กับ Confirmed payable อย่างชัดเจน เพื่อป้องกัน dispute และการตีความเป็นรายได้ที่รับประกัน
        </ComplianceNote>
      </div>
    </section>
  );
}
