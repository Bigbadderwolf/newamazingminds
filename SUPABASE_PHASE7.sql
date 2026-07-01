-- ─────────────────────────────────────────────────────
-- Phase 7: Amazing Entertainment — Supabase SQL Schema
-- Run this in Supabase → SQL Editor
-- ─────────────────────────────────────────────────────

-- Videos table (admin approved videos)
CREATE TABLE videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  youtube_id TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  title TEXT NOT NULL,
  creator TEXT NOT NULL,
  category TEXT CHECK (category IN ('music','spoken','visual','comedy','poetry','dance')) NOT NULL,
  description TEXT,
  views INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Video submissions table (pending admin review)
CREATE TABLE video_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  youtube_id TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  title TEXT NOT NULL,
  creator TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  email TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved videos
CREATE POLICY "videos_public_read" ON videos
  FOR SELECT USING (approved = true);

-- Anyone can submit a video
CREATE POLICY "submissions_public_insert" ON video_submissions
  FOR INSERT WITH CHECK (true);

-- Only service role (admin) can read submissions
CREATE POLICY "submissions_admin_only" ON video_submissions
  FOR SELECT USING (auth.role() = 'service_role');

-- Only service role can update submission status
CREATE POLICY "submissions_admin_update" ON video_submissions
  FOR UPDATE USING (auth.role() = 'service_role');

-- Increment view count function
CREATE OR REPLACE FUNCTION increment_video_views(video_id UUID)
RETURNS void AS $$
  UPDATE videos SET views = views + 1 WHERE id = video_id;
$$ LANGUAGE sql SECURITY DEFINER;
