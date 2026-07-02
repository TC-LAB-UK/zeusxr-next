import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const ORG_ID = process.env.NEXT_PUBLIC_ORG_ID!

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id, name, slug, tagline, cover_image_url, status')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('created_at', { ascending: true })
    if (error) throw error
    return data ?? []
  } catch {
    return []
  }
}

export async function getProduct(slug: string) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('org_id', ORG_ID)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
    if (error) throw error
    return data
  } catch {
    return null
  }
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies() {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('id, title, slug, client_name, sector, cover_image_url, status')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('created_at', { ascending: true })
    if (error) throw error
    return data ?? []
  } catch {
    return []
  }
}

export async function getCaseStudy(slug: string) {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('org_id', ORG_ID)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
    if (error) throw error
    return data
  } catch {
    return null
  }
}

// ─── Articles (news) ──────────────────────────────────────────────────────────

export async function getArticles() {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, cover_image_url, tags, published_at, body')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
    if (error) throw error
    return data ?? []
  } catch {
    return []
  }
}

export async function getArticle(slug: string) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('org_id', ORG_ID)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
    if (error) throw error
    return data
  } catch {
    return null
  }
}
