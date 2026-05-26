import { Badge } from '@/components/ui/badge';

const accounts = [
  {
    name: 'Standard',
    bestFor: 'นักเทรดที่ต้องการเริ่มจากข้อมูลพื้นฐาน',
    spread: 'รอยืนยันเงื่อนไขบัญชี',
    commission: 'รอยืนยัน',
    platform: 'รอยืนยัน',
    support: 'LINE + Help Center'
  },
  {
    name: 'Pro',
    bestFor: 'นักเทรดที่ต้องการต้นทุนและ execution detail มากขึ้น',
    spread: 'รอยืนยันเงื่อนไขบัญชี',
    commission: 'รอยืนยัน',
    platform: 'รอยืนยัน',
    support: 'Priority support placeholder'
  },
  {
    name: 'Partner / IB',
    bestFor: 'พาร์ทเนอร์ที่แนะนำลูกค้าและต้องการ tracking',
    spread: 'ตาม account ของลูกค้า',
    commission: 'Lot-based, รอยืนยัน',
    platform: 'Partner dashboard',
    support: 'Partner manager placeholder'
  }
];

export function AccountComparisonPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {accounts.map((account) => (
        <article key={account.name} className="premium-card rounded-3xl p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-ink-900">{account.name}</h3>
            <Badge variant="brand">POC</Badge>
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <Info label="เหมาะกับ" value={account.bestFor} />
            <Info label="Spread" value={account.spread} />
            <Info label="Commission" value={account.commission} />
            <Info label="Platform" value={account.platform} />
            <Info label="Support" value={account.support} />
          </dl>
          <p className="mt-6 text-xs leading-6 text-amber-700">
            เงื่อนไขบัญชีอาจเปลี่ยนแปลงได้ และไม่ใช่การรับประกันผลลัพธ์การเทรด
          </p>
        </article>
      ))}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-ink-400">{label}</dt>
      <dd className="mt-1 text-ink-700">{value}</dd>
    </div>
  );
}
