import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const ORG_ID = process.env.NEXT_PUBLIC_ORG_ID!

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts() {
  const { data } = await supabase
    .from('products')
    .select('id, name, slug, tagline, cover_image_url, status')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('created_at', { ascending: true })
  return data ?? []
}

export async function getProduct(slug: string) {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('org_id', ORG_ID)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
  return data
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies() {
  const { data } = await supabase
    .from('case_studies')
    .select('id, title, slug, client_name, sector, cover_image_url, status')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('created_at', { ascending: true })
  return data ?? []
}

export async function getCaseStudy(slug: string) {
  const { data } = await supabase
    .from('case_studies')
    .select('*')
    .eq('org_id', ORG_ID)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
  return data
}

// ─── Articles (news) ──────────────────────────────────────────────────────────

export async function getArticles() {
  const { data } = await supabase
    .from('articles')
    .select('id, title, slug, cover_image_url, tags, published_at, body')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  return data ?? []
}

export async function getArticle(slug: string) {
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('org_id', ORG_ID)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
  return data
}
