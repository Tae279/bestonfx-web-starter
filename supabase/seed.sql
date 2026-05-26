insert into public.content_pages (slug, locale, title, status, seo_title, seo_description)
values
  ('/', 'th', 'Home', 'draft', 'BestonFX', 'Premium Thai Forex/CFD broker concept'),
  ('/legal/risk-disclosure', 'th', 'Risk Disclosure', 'draft', 'Risk Disclosure', 'Forex/CFD risk disclosure placeholder')
on conflict (slug) do nothing;
