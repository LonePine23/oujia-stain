-- =====================================================================
-- Safe Word: crew stats (Stage 3)
-- Paste this whole file into Supabase → SQL Editor → New query → Run.
-- Running it again is safe: it updates the functions and leaves the data alone.
--
-- What it stores, per finished game: a random player ID made in the
-- browser, the date, the seven payouts, and which safe each piece of gear
-- was used on. Nothing else. Rows are deleted after 14 days.
--
-- Security model
--   * The table has row level security switched on and NO policies, and the
--     public roles get no table permissions. Nobody can read or change rows
--     through the API.
--   * The game talks only to two functions:
--       safeword_submit_result  checks a result and stores it
--       safeword_get_stats      returns totals for one day, never single rows
--   * Supabase's Security Advisor may show "RLS enabled, no policy" for this
--     table. That is deliberate.
-- =====================================================================

create table if not exists public.safeword_results (
  id             bigint generated always as identity primary key,
  player_id      uuid        not null,
  play_date      date        not null,
  payouts        integer[]   not null,
  haul           integer     not null,
  gear_blueprint smallint,
  gear_walkie    smallint,
  gear_kaleido   smallint,
  created_at     timestamptz not null default now(),
  constraint safeword_one_per_day unique (play_date, player_id),
  constraint safeword_seven_payouts check (cardinality(payouts) = 7 and array_position(payouts, null) is null),
  constraint safeword_payout_values check (payouts <@ array[0, 5000, 12500, 20000, 30000, 50000]),
  constraint safeword_haul_range check (haul between 0 and 350000),
  constraint safeword_gear_range check (
        (gear_blueprint is null or gear_blueprint between 1 and 7)
    and (gear_walkie    is null or gear_walkie    between 1 and 7)
    and (gear_kaleido   is null or gear_kaleido   between 1 and 7))
);

create index if not exists safeword_results_date on public.safeword_results (play_date);

alter table public.safeword_results enable row level security;
revoke all on table public.safeword_results from public;
revoke all on table public.safeword_results from anon, authenticated;


-- ---------------------------------------------------------------------
-- Store one finished game.
-- Returns a word the game understands:
--   'ok'        stored
--   'duplicate' this player already sent this day (the first one stands)
--   'bad_date'  the date is not yesterday, today or tomorrow (UTC)
--   'invalid'   something in the result is impossible
--   'full'      this day already has 100,000 results
-- ---------------------------------------------------------------------
create or replace function public.safeword_submit_result(
  p_player    uuid,
  p_date      date,
  p_payouts   integer[],
  p_blueprint integer default null,
  p_walkie    integer default null,
  p_kaleido   integer default null
) returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_today date := (now() at time zone 'utc')::date;
  v_count integer;
  v_rows  integer;
begin
  -- Players live in every time zone, so allow one day either side of UTC.
  if p_player is null or p_date is null or p_date < v_today - 1 or p_date > v_today + 1 then
    return 'bad_date';
  end if;

  if p_payouts is null
     or cardinality(p_payouts) <> 7
     or array_position(p_payouts, null) is not null
     or not (p_payouts <@ array[0, 5000, 12500, 20000, 30000, 50000])
     or (p_blueprint is not null and p_blueprint not between 1 and 7)
     or (p_walkie    is not null and p_walkie    not between 1 and 7)
     or (p_kaleido   is not null and p_kaleido   not between 1 and 7) then
    return 'invalid';
  end if;

  -- Tidy up: nothing older than 14 days is kept.
  delete from public.safeword_results where play_date < v_today - 14;

  -- Hard cap per day, so a flood of fake results can't fill the database.
  select count(*) into v_count from public.safeword_results where play_date = p_date;
  if v_count >= 100000 then
    return 'full';
  end if;

  insert into public.safeword_results (player_id, play_date, payouts, haul, gear_blueprint, gear_walkie, gear_kaleido)
  values (p_player, p_date, p_payouts,
          (select sum(x) from unnest(p_payouts) as x),
          p_blueprint, p_walkie, p_kaleido)
  on conflict (play_date, player_id) do nothing;

  get diagnostics v_rows = row_count;
  return case when v_rows = 1 then 'ok' else 'duplicate' end;
end;
$$;


-- ---------------------------------------------------------------------
-- Totals for one day. Shows nothing but the head count until at least
-- 10 players have finished (min_players).
--   players   how many finished
--   average   average haul, in dollars
--   buckets   14 counts: $0–24,999, $25,000–49,999 … $325,000–350,000
--   cracked   7 counts: how many cracked safe 1 … safe 7
--   below     how many hauled less than p_haul   (null if p_haul not given)
-- ---------------------------------------------------------------------
create or replace function public.safeword_get_stats(
  p_date date,
  p_haul integer default null
) returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_min     constant integer := 10;
  v_today   date := (now() at time zone 'utc')::date;
  v_players integer;
begin
  if p_date is null or p_date < v_today - 14 or p_date > v_today + 1 then
    return jsonb_build_object('players', 0, 'min_players', v_min);
  end if;

  select count(*) into v_players from public.safeword_results where play_date = p_date;
  if v_players < v_min then
    return jsonb_build_object('players', v_players, 'min_players', v_min);
  end if;

  return jsonb_build_object(
    'players', v_players,
    'min_players', v_min,
    'average', (select round(avg(haul))::integer from public.safeword_results where play_date = p_date),
    'buckets', (select jsonb_agg(coalesce(c.n, 0) order by b.i)
                  from generate_series(0, 13) as b(i)
                  left join (select least(haul / 25000, 13) as i, count(*) as n
                               from public.safeword_results where play_date = p_date group by 1) c on c.i = b.i),
    'cracked', (select jsonb_agg((select count(*) from public.safeword_results r
                                   where r.play_date = p_date and r.payouts[s.i] = 50000) order by s.i)
                  from generate_series(1, 7) as s(i)),
    'below',   case when p_haul is null then null
                    else (select count(*) from public.safeword_results where play_date = p_date and haul < p_haul) end
  );
end;
$$;


-- Only these two functions are reachable from the game.
revoke all on function public.safeword_submit_result(uuid, date, integer[], integer, integer, integer) from public;
revoke all on function public.safeword_get_stats(date, integer) from public;
grant execute on function public.safeword_submit_result(uuid, date, integer[], integer, integer, integer) to anon, authenticated;
grant execute on function public.safeword_get_stats(date, integer) to anon, authenticated;

-- Ask the API to pick up the new functions straight away.
notify pgrst, 'reload schema';
