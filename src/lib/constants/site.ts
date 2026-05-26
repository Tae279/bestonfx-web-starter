export const siteConfig = {
  name: 'BestonFX',
  description: 'Premium Thai-market Forex/CFD broker concept',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
};

export const siteNav = [
  { href: '/why-bestonfx', label: 'Why' },
  { href: '/accounts', label: 'Accounts' },
  { href: '/markets', label: 'Markets' },
  { href: '/tools', label: 'Tools' },
  { href: '/partners', label: 'Partners' },
  { href: '/support', label: 'Support' }
] as const;
