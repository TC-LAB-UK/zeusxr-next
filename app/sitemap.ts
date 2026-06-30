import { supabase, ORG_ID } from '@/lib/supabase'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://zeusxr.co'

  // Static pages
  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/zeus-xr`, priority: 0.9 },
    { url: `${base}/products`, priority: 0.8 },
    { url: `${base}/projects`, priority: 0.8 },
    { url: `${base}/news`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/about/company`, priority: 0.6 },
    { url: `${base}/solutions/installation`, priority: 0.6 },
    { url: `${base}/solutions/design-build`, priority: 0.6 },
    { url: `${base}/solutions/project-management`, priority: 0.6 },
    { url: `${base}/solutions/maintenance`, priority: 0.6 },
  ].map(p => ({ ...p, lastModified: new Date(), changeFrequency: 'monthly' as const }))

  // Dynamic: products
  const { data: products } = await supabase
    .from('products').select('slug, updated_at').eq('org_id', ORG_ID).eq('status', 'published')
  const productPages = (products || []).map((p: any) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic: articles
  const { data: articles } = await supabase
    .from('articles').select('slug, published_at').eq('org_id', ORG_ID).eq('status', 'published')
  const articlePages = (articles || []).map((a: any) => ({
    url: `${base}/news/${a.slug}`,
    lastModified: new Date(a.published_at),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }))

  // Dynamic: case studies
  const { data: cases } = await supabase
    .from('case_studies').select('slug, updated_at').eq('org_id', ORG_ID).eq('status', 'published')
  const casePages = (cases || []).map((c: any) => ({
    url: `${base}/projects/${c.slug}`,
    lastModified: new Date(c.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...articlePages, ...casePages]
}
