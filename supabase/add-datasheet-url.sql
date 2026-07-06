-- Add datasheet_url column to products table
-- Run this in Supabase SQL Editor

ALTER TABLE products
ADD COLUMN IF NOT EXISTS datasheet_url TEXT;

COMMENT ON COLUMN products.datasheet_url IS 'URL to downloadable PDF datasheet (Supabase Storage or external link)';
