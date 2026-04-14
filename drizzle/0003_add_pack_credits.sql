-- Migration: Add pack credits to users + order type for Pack 5
-- Run: npx drizzle-kit push

-- Add pack_credits column to users (defaults to 0)
ALTER TABLE users ADD COLUMN pack_credits INTEGER NOT NULL DEFAULT 0;

-- Add order_type column to orders (pack5 | subscription)
ALTER TABLE orders ADD COLUMN order_type TEXT NOT NULL DEFAULT 'subscription';
