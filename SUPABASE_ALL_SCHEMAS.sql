-- ============================================================
-- NEW AMAZING MINDS AFRICA — COMPLETE SUPABASE SQL SCHEMA
-- Run this ENTIRE file in Supabase → SQL Editor → Run
-- This covers all phases (5, 6, 7, 8) in one shot
-- ============================================================

-- ── PHASE 5: Marketplace ─────────────────────────────────────
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, artist TEXT NOT NULL, handle TEXT,
  price INTEGER NOT NULL, category TEXT CHECK (category IN ('art','accessories','artefacts')) NOT NULL,
  description TEXT, emoji TEXT, image_url TEXT, in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_ref TEXT UNIQUE NOT NULL, user_id UUID REFERENCES auth.users(id),
  total INTEGER NOT NULL, status TEXT DEFAULT 'pending' CHECK (status IN ('pending','paid','failed','shipped','delivered')),
  phone TEXT, created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL, product_name TEXT NOT NULL, price INTEGER NOT NULL, qty INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE mpesa_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  merchant_request_id TEXT, checkout_request_id TEXT,
  result_code INTEGER, result_desc TEXT, amount INTEGER,
  mpesa_ref TEXT, phone TEXT, success BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PHASE 6: Amazing AI Chat ──────────────────────────────────
CREATE TABLE chat_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT DEFAULT 'New conversation',
  created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('user','assistant')) NOT NULL,
  content TEXT NOT NULL, created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PHASE 7: Entertainment ────────────────────────────────────
CREATE TABLE videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  youtube_id TEXT NOT NULL, youtube_url TEXT NOT NULL,
  title TEXT NOT NULL, creator TEXT NOT NULL,
  category TEXT CHECK (category IN ('music','spoken','visual','comedy','poetry','dance')) NOT NULL,
  description TEXT, views INTEGER DEFAULT 0, featured BOOLEAN DEFAULT false,
  approved BOOLEAN DEFAULT true, created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE video_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  youtube_id TEXT NOT NULL, youtube_url TEXT NOT NULL,
  title TEXT NOT NULL, creator TEXT NOT NULL, category TEXT NOT NULL,
  description TEXT, email TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  reviewed_at TIMESTAMPTZ, created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PHASE 8: Admin / Content ──────────────────────────────────
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL, title TEXT NOT NULL, excerpt TEXT,
  content TEXT NOT NULL, category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft','published')),
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL, description TEXT, date DATE NOT NULL, time TEXT,
  type TEXT CHECK (type IN ('Online','In-Person','Hybrid')) DEFAULT 'Online',
  topic TEXT, registration_url TEXT,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming','past','cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE circles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, topic TEXT NOT NULL, location TEXT, description TEXT,
  meets TEXT, language TEXT DEFAULT 'English', member_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE circle_memberships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  circle_id UUID REFERENCES circles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(circle_id, user_id)
);
CREATE TABLE clubs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, city TEXT NOT NULL, country TEXT NOT NULL,
  emoji TEXT DEFAULT '🌍', meets TEXT, member_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active', created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── ENABLE ROW LEVEL SECURITY ─────────────────────────────────
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE mpesa_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE circles ENABLE ROW LEVEL SECURITY;
ALTER TABLE circle_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;

-- ── PUBLIC READ POLICIES ──────────────────────────────────────
CREATE POLICY "products_public_read" ON products FOR SELECT USING (true);
CREATE POLICY "events_public_read" ON events FOR SELECT USING (true);
CREATE POLICY "circles_public_read" ON circles FOR SELECT USING (status = 'active');
CREATE POLICY "clubs_public_read" ON clubs FOR SELECT USING (status = 'active');
CREATE POLICY "blog_public_read" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "videos_public_read" ON videos FOR SELECT USING (approved = true);

-- ── AUTHENTICATED USER POLICIES ───────────────────────────────
CREATE POLICY "orders_own_read" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "orders_insert" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "order_items_insert" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "chat_sessions_own" ON chat_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "chat_messages_own" ON chat_messages FOR ALL USING (session_id IN (SELECT id FROM chat_sessions WHERE user_id = auth.uid()));
CREATE POLICY "membership_own" ON circle_memberships FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "submissions_public_insert" ON video_submissions FOR INSERT WITH CHECK (true);

-- ── INCREMENT VIEW COUNT FUNCTION ─────────────────────────────
CREATE OR REPLACE FUNCTION increment_video_views(video_id UUID)
RETURNS void AS $$ UPDATE videos SET views = views + 1 WHERE id = video_id; $$ LANGUAGE sql SECURITY DEFINER;
