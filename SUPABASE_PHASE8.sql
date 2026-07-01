-- ─────────────────────────────────────────────────────
-- Phase 8: Admin Dashboard — Supabase SQL Schema
-- Run this in Supabase → SQL Editor
-- ─────────────────────────────────────────────────────

-- Blog posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TEXT,
  type TEXT CHECK (type IN ('Online', 'In-Person', 'Hybrid')) DEFAULT 'Online',
  topic TEXT,
  registration_url TEXT,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'past', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Support circles table
CREATE TABLE circles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  topic TEXT NOT NULL,
  location TEXT,
  description TEXT,
  meets TEXT,
  language TEXT DEFAULT 'English',
  member_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Circle memberships
CREATE TABLE circle_memberships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  circle_id UUID REFERENCES circles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(circle_id, user_id)
);

-- Local clubs table
CREATE TABLE clubs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  emoji TEXT DEFAULT '🌍',
  meets TEXT,
  member_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE circles ENABLE ROW LEVEL SECURITY;
ALTER TABLE circle_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "blog_public_read" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "events_public_read" ON events FOR SELECT USING (true);
CREATE POLICY "circles_public_read" ON circles FOR SELECT USING (status = 'active');
CREATE POLICY "clubs_public_read" ON clubs FOR SELECT USING (status = 'active');

-- Circle memberships — users can join/leave
CREATE POLICY "membership_own" ON circle_memberships FOR ALL USING (auth.uid() = user_id);

-- Admin write policies (service role bypasses RLS automatically)
-- For authenticated admins, use Supabase service role key in admin API routes
