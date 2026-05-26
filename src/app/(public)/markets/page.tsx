import { Badge } from '@/components/ui/badge';
import { ComplianceNote } from '@/components/site/ComplianceNote';
import { SectionHeader } from '@/components/site/SectionHeader';

const markets = ['Forex', 'Metals', 'Indices', 'Commodities', 'Crypto CFDs'];

export const metadata = {
  title: 'Markets'
};

export default function MarketsPage() {
  return (
    <section className="container py-20">
      <SectionHeader
        eyebrow="Markets"
        title="เข้าถึงตลาดสำคัญ พร้อมข้อมูลต้นทุนและความเสี่ยงก่อนเทรด"
        description="แสดง product category เฉพาะที่ได้รับอนุมัติ รวมถึง contract spec, trading hours, spread/commission และ risk note รายสินค้า"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {markets.map((market) => (
          <article key={market} className="premium-card rounded-2xl p-5">
            <Badge variant="gold">Coming soon</Badge>
            <h2 className="mt-4 text-lg font-semibold">{market}</h2>
            <p className="mt-3 text-sm text-slate-300">รอยืนยัน contract specification และเงื่อนไขการซื้อขาย</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <ComplianceNote>
          Crypto CFDs และ leveraged products ต้องผ่าน legal/compliance review ก่อนเปิดเผยบน public site
        </ComplianceNote>
      </div>
    </section>
  );
}
