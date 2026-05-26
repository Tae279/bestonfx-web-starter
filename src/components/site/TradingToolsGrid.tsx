import { Calculator, CalendarDays, Gauge, NotebookText, Bot, ReceiptText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from './SectionHeader';

const tools = [
  { icon: Calculator, title: 'Pip Calculator', description: 'ช่วยประเมินมูลค่า pip ก่อนวางแผน position', status: 'Demo' },
  { icon: Gauge, title: 'Margin Calculator', description: 'คำนวณ margin ที่ต้องใช้และผลกระทบจาก leverage', status: 'Demo' },
  { icon: ReceiptText, title: 'Position Risk Calculator', description: 'คุมความเสี่ยงต่อไม้เทรดก่อนเปิดสถานะ', status: 'Demo' },
  { icon: CalendarDays, title: 'Economic Calendar', description: 'ดูเหตุการณ์เศรษฐกิจสำคัญก่อนเทรด', status: 'Coming soon' },
  { icon: NotebookText, title: 'Trading Journal', description: 'บันทึกเหตุผลและผลลัพธ์เพื่อพัฒนาวินัย', status: 'Phase 3' },
  { icon: Bot, title: 'AI Help Center', description: 'ถามขั้นตอนบัญชี เครื่องมือ และคำอธิบายศัพท์', status: 'Beta' }
];

export function TradingToolsGrid({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="container py-16">
      <SectionHeader
        eyebrow="Trading tools"
        title="เครื่องมือที่ช่วยให้คิดก่อนคลิก"
        description="เน้น value-add ที่ลด support workload และเพิ่มความไว้วางใจ โดยไม่สัญญาผลลัพธ์การเทรด"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <article key={tool.title} className="premium-card rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300">
                  <Icon className="h-5 w-5" />
                </div>
                <Badge variant={tool.status === 'Demo' ? 'gold' : 'muted'}>{tool.status}</Badge>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>
              <p className="mt-5 text-sm text-gold-300">ดูเครื่องมือ →</p>
            </article>
          );
        })}
      </div>
      {standalone ? (
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-amber-200">
          Calculator results เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขายเฉพาะบุคคล
        </p>
      ) : null}
    </section>
  );
}
