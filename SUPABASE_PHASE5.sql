-- ─────────────────────────────────────────────────────
-- Phase 5: Amazing Marketplace — Supabase SQL Schema
-- Run this in Supabase → SQL Editor
-- ─────────────────────────────────────────────────────

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  handle TEXT,
  price INTEGER NOT NULL,
  category TEXT CHECK (category IN ('art', 'accessories', 'artefacts')) NOT NULL,
  description TEXT,
  emoji TEXT,
  image_url TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_ref TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  total INTEGER NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'shipped', 'delivered')),
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  price INTEGER NOT NULL,
  qty INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- M-Pesa transactions table
CREATE TABLE mpesa_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  merchant_request_id TEXT,
  checkout_request_id TEXT,
  result_code INTEGER,
  result_desc TEXT,
  amount INTEGER,
  mpesa_ref TEXT,
  phone TEXT,
  success BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE mpesa_transactions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read products
CREATE POLICY "products_public_read" ON products
  FOR SELECT USING (true);

-- Allow authenticated users to read their own orders
CREATE POLICY "orders_own_read" ON orders
  FOR SELECT USING (auth.uid() = user_id);

-- Allow anyone to insert orders (guest checkout)
CREATE POLICY "orders_insert" ON orders
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert order items
CREATE POLICY "order_items_insert" ON order_items
  FOR INSERT WITH CHECK (true);

-- Only service role can read mpesa_transactions (admin only)
CREATE POLICY "mpesa_service_only" ON mpesa_transactions
  FOR ALL USING (auth.role() = 'service_role');
