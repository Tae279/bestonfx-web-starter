-- BestonFX starter schema
-- This is a foundation for CMS, compliance, analytics, bot, and IB portal.
-- Review RLS carefully before production.

create extension if not exists "uuid-ossp";
create extension if not exists vector;

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  auth_user_id uuid unique,
  email text,
  display_name text,
  role text default 'viewer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_pages (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  locale text not null default 'th',
  title text not null,
  status text not null default 'draft' check (status in ('draft', 'review', 'approved', 'published', 'archived')),
  seo_title text,
  seo_description text,
  owner_id uuid references public.profiles(id),
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_blocks (
  id uuid primary key default uuid_generate_v4(),
  page_id uuid not null references public.content_pages(id) on delete cascade,
  block_type text not null,
  sort_order int not null default 0,
  content jsonb not null default '{}'::jsonb,
  compliance_status text not null default 'unchecked' check (compliance_status in ('unchecked', 'needs_review', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.claim_registry (
  id uuid primary key default uuid_generate_v4(),
  claim_text text not null,
  claim_type text not null,
  source_url text,
  source_file text,
  source_date date,
  confidence text not null default 'medium' check (confidence in ('low', 'medium', 'high')),
  status text not null default 'draft' check (status in ('draft', 'review', 'approved', 'rejected', 'expired')),
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.legal_disclosures (
  id uuid primary key default uuid_generate_v4(),
  disclosure_type text not null,
  locale text not null default 'th',
  version text not null,
  body text not null,
  status text not null default 'draft' check (status in ('draft', 'review', 'approved', 'published', 'archived')),
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.rag_documents (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null,
  source_type text not null default 'cms',
  status text not null default 'draft' check (status in ('draft', 'approved', 'archived')),
  content text not null,
  approved_claim_ids uuid[] default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.rag_chunks (
  id uuid primary key default uuid_generate_v4(),
  document_id uuid not null references public.rag_documents(id) on delete cascade,
  chunk_index int not null,
  content text not null,
  embedding vector(1536),
  created_at timestamptz not null default now()
);

create table if not exists public.bot_conversations (
  id uuid primary key default uuid_generate_v4(),
  channel text not null check (channel in ('web', 'line')),
  external_user_id text,
  consent_version text,
  escalated boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.bot_messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid not null references public.bot_conversations(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  compliance_flags text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default uuid_generate_v4(),
  source text,
  campaign text,
  ib_partner_id uuid,
  line_user_id text,
  email text,
  phone text,
  status text not null default 'new',
  consent_marketing boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.ib_partners (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id),
  partner_code text not null unique,
  status text not null default 'pending' check (status in ('pending', 'approved', 'suspended', 'rejected')),
  display_name text,
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.leads
  add constraint leads_ib_partner_fk foreign key (ib_partner_id) references public.ib_partners(id);

create table if not exists public.ib_referral_links (
  id uuid primary key default uuid_generate_v4(),
  partner_id uuid not null references public.ib_partners(id) on delete cascade,
  slug text not null unique,
  destination_url text not null,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.ib_commission_snapshots (
  id uuid primary key default uuid_generate_v4(),
  partner_id uuid not null references public.ib_partners(id) on delete cascade,
  period_start date not null,
  period_end date not null,
  lots numeric(18, 4) not null default 0,
  estimated_commission numeric(18, 2),
  confirmed_commission numeric(18, 2),
  currency text not null default 'USD',
  source_batch_id text,
  status text not null default 'estimated' check (status in ('estimated', 'confirmed', 'paid', 'disputed')),
  created_at timestamptz not null default now()
);

create table if not exists public.analytics_events (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  page text,
  source text,
  campaign text,
  partner_code text,
  anonymous_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  before jsonb,
  after jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.content_pages enable row level security;
alter table public.content_blocks enable row level security;
alter table public.claim_registry enable row level security;
alter table public.legal_disclosures enable row level security;
alter table public.rag_documents enable row level security;
alter table public.rag_chunks enable row level security;
alter table public.bot_conversations enable row level security;
alter table public.bot_messages enable row level security;
alter table public.leads enable row level security;
alter table public.ib_partners enable row level security;
alter table public.ib_referral_links enable row level security;
alter table public.ib_commission_snapshots enable row level security;
alter table public.analytics_events enable row level security;
alter table public.audit_logs enable row level security;

-- Public read policies should be added only for published/approved content after security review.
-- Service role should be used for ingestion/admin operations through server routes only.
