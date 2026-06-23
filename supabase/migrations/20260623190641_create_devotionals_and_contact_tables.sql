/*
# Create devotionals, contact_submissions, and media_items tables

1. New Tables
- `devotionals`: devotional content with title, description, youtube_url, thumbnail, date
- `contact_submissions`: form submissions from visitors
- `media_items`: videos, music, interviews, press features, gallery images

2. Security
- Enable RLS on all tables.
- Single-tenant: allow anon + authenticated read/write for public-facing content.
*/

CREATE TABLE IF NOT EXISTS devotionals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  youtube_url text,
  thumbnail_url text,
  devotional_date date,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  type text NOT NULL CHECK (type IN ('video','music','interview','press','event','gallery')),
  embed_url text,
  thumbnail_url text,
  external_link text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE devotionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

-- Devotionals: public read
DROP POLICY IF EXISTS "anon_select_devotionals" ON devotionals;
CREATE POLICY "anon_select_devotionals" ON devotionals FOR SELECT
  TO anon, authenticated USING (true);

-- Contact submissions: public insert only
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Media: public read
DROP POLICY IF EXISTS "anon_select_media" ON media_items;
CREATE POLICY "anon_select_media" ON media_items FOR SELECT
  TO anon, authenticated USING (true);
