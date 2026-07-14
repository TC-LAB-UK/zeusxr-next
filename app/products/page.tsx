import Link from 'next/link'
import { getProducts } from '@/lib/supabase'
import ProductsClient from './ProductsClient'

export const revalidate = 60

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
