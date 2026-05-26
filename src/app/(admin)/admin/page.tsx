import { SectionHeader } from '@/components/site/SectionHeader';

const modules = [
  'CMS pages',
  'Claim registry',
  'Legal disclosures',
  'Bot knowledge base',
  'Analytics events',
  'IB applications',
  'Support escalations'
];

export const metadata = {
  title: 'Admin'
};

export default function AdminPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Admin"
        title="Custom CMS / Ops / Analytics backend placeholder"
        description="หน้านี้เป็น placeholder สำหรับ Supabase Auth + role-based admin dashboard"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {modules.map((module) => (
          <article key={module} className="premium-card rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{module}</h2>
            <p className="mt-3 text-sm text-slate-300">MVP module placeholder</p>
          </article>
        ))}
      </div>
    </section>
  );
}
