import { createClient } from '@supabase/supabase-js'
import { PROJECTS_DATA } from '@/lib/projects-data'
import { PRODUCTS_DATA } from '@/lib/products-data'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const ORG_ID = process.env.NEXT_PUBLIC_ORG_ID!

// Category-based image fallback — ensures no product card is ever blank
// even when its Supabase slug doesn't match any key in PRODUCTS_DATA.
function productCategoryFallback(category: string | null, subcategory: string | null): string {
  const cat = (category || '').toLowerCase()
  const sub = (subcategory || '').toLowerCase()
  if (cat.includes('spray') && sub.includes('electric')) return '/media/zeus-8000.jpg'
  if (cat.includes('spray') && sub.includes('gas'))      return '/media/poseidon.jpg'
  if (cat.includes('spray'))                             return '/media/zeus-xr-8.jpg'
  if (cat.includes('prep'))                              return '/media/hades-prep-bay/card.jpg'
  if (cat.includes('mix'))                               return '/media/paint-mixing-room/card.jpg'
  if (cat.includes('smart') || cat.includes('repair'))   return '/media/products/nemesis/hero.jpg'
  return '/media/zeus-xr-8.jpg'
}

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id, name, slug, tagline, cover_image_url, category, subcategory, status')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('sort_order', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: true })
    if (error) throw error
    // PRODUCTS_DATA is authoritative — use it first for any known slug.
    // Fall back to Supabase local paths, then a category-based image so cards never show blank.
    return (data ?? []).map((p: any) => ({
      ...p,
      cover_image_url:
        PRODUCTS_DATA[p.slug]?.cover_image_url
        ?? (p.cover_image_url?.startsWith('/') ? p.cover_image_url : null)
        ?? productCategoryFallback(p.category, p.subcategory),
    }))
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
      .order('sort_order', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: false })
    if (error) throw error
    // PROJECTS_DATA is authoritative — use it first for any known slug.
    // Only fall back to Supabase value if it's a local path AND we have no local data entry.
    return (data ?? []).map((cs: any) => ({
      ...cs,
      cover_image_url:
        PROJECTS_DATA[cs.slug]?.cover_image_url
        ?? (cs.cover_image_url?.startsWith('/') ? cs.cover_image_url : null)
        ?? null,
    }))
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
      .select('id, title, slug, cover_image_url, tags, published_at, seo_description, body')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
    if (error) throw error
    return (data ?? []).map((a: any) => ({
      ...a,
      cover_image_url: a.cover_image_url?.startsWith('/') ? a.cover_image_url : null,
    }))
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

// ─── Solutions ────────────────────────────────────────────────────────────────

const SOLUTIONS_IMAGES: Record<string, string> = {
  'installation':        '/media/zeus-xr-21.jpg',
  'design-build':        '/media/zeus-xr-8.jpg',
  'project-management':  '/media/zeus-xr-28.jpg',
  'maintenance':         '/media/zeus-xr-26.jpg',
  'servicing':           '/media/zeus-xr-26.jpg',
}

export async function getSolutions() {
  try {
    const { data, error } = await supabase
      .from('solutions')
      .select('id, name, slug, tagline, cover_image_url, status')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('created_at', { ascending: true })
    if (error) throw error
    return (data ?? []).map((s: any) => ({
      ...s,
      cover_image_url:
        (s.cover_image_url?.startsWith('/') ? s.cover_image_url : null)
        ?? SOLUTIONS_IMAGES[s.slug]
        ?? null,
    }))
  } catch {
    return []
  }
}

export async function getSolution(slug: string) {
  try {
    const { data, error } = await supabase
      .from('solutions')
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
