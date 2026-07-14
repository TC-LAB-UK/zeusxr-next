import Link from 'next/link'
import { supabase, ORG_ID } from '@/lib/supabase'
import ProductsClient from './ProductsClient'

export const revalidate = 60

async function getProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id, name, slug, tagline, cover_image_url, category')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
      .order('created_at', { ascending: true })
    if (error) throw error
    return data ?? []
  } catch {
    return []
  }
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <div>
            <p className="page-eyebrow">Todd Engineering</p>
            <h1 className="page-h1">Product Catalogue</h1>
            <p className="page-meta">{products.length} products across {new Set(products.map(p => p.category).filter(Boolean)).size} categories</p>
          </div>
          <Link href="/contact" className="btn btn-cta">Talk to an Engineer</Link>
        </div>
      </header>

      <ProductsClient products={products} />
    </>
  )
}
