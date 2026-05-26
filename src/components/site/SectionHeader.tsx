type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-gold-300">{eyebrow}</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
