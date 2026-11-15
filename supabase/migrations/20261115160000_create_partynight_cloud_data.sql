-- Party Night cloud backup, isolated from FollowGym's own table.
create table if not exists public.partynight_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  schema_version integer not null default 1 check (schema_version >= 1),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partynight_data_object check (jsonb_typeof(data) = 'object')
);
alter table public.partynight_data enable row level security;
revoke all on public.partynight_data from anon, public, authenticated;
grant select, insert, update, delete on public.partynight_data to authenticated;
drop policy if exists "Users can read their own Party Night data" on public.partynight_data;
create policy "Users can read their own Party Night data"
  on public.partynight_data for select to authenticated
  using ((select auth.uid()) = user_id);
drop policy if exists "Users can insert their own Party Night data" on public.partynight_data;
create policy "Users can insert their own Party Night data"
  on public.partynight_data for insert to authenticated
  with check ((select auth.uid()) = user_id);
drop policy if exists "Users can update their own Party Night data" on public.partynight_data;
create policy "Users can update their own Party Night data"
  on public.partynight_data for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
drop policy if exists "Users can delete their own Party Night data" on public.partynight_data;
create policy "Users can delete their own Party Night data"
  on public.partynight_data for delete to authenticated
  using ((select auth.uid()) = user_id);
create or replace function public.set_partynight_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke all on function public.set_partynight_updated_at() from public, anon, authenticated;
drop trigger if exists partynight_data_updated_at on public.partynight_data;
create trigger partynight_data_updated_at
before update on public.partynight_data
for each row execute function public.set_partynight_updated_at();
