import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full Todd Engineering spraybooth product range — from the Zeus XR robotic system to the Zeus 8000, Olympian 1000, Poseidon and more.',
}

async function getProducts() {
  const { data } = await supabase
    .from('products')
    .select('id, name, slug, tagline, cover_image_url, featured')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('sort_order', { ascending: true })
  return data || []
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Our Range</p>
          <h1>Products</h1>
          <p>From AI-assisted robotic systems to bespoke industrial booths — engineered to perform.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w-1300">
          <div className="products-grid">
            {products.map((p: any, i: number) => (
              <Link key={p.id} href={p.slug === 'zeus-xr' ? '/zeus-xr' : `/products/${p.slug}`} className={`product-card rv d${i % 3}`}>
                <div className="product-img">
                  {p.cover_image_url
                    ? <img src={p.cover_image_url} alt={p.name} />
                    : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>
                  }
                </div>
                <div className="product-body">
                  <p className="product-eyebrow">Todd Engineering{p.featured ? ' · New' : ''}</p>
                  <h2 className="product-name">{p.name}</h2>
                  <p className="product-desc">{p.tagline || 'Premium spraybooth technology, engineered for performance.'}</p>
                  <span className="product-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="testi-sec">
        <div className="testi-inner">
          <p className="s-lbl" style={{ marginBottom: 20 }}>Can&rsquo;t find what you&rsquo;re looking for?</p>
          <h2 className="s-h2" style={{ marginBottom: 16 }}>We build bespoke.</h2>
          <p className="s-p" style={{ marginBottom: 32 }}>Every project is different. Our engineers can design and build a custom spraybooth solution around your exact requirements.</p>
          <button className="btn btn-cta btn-lg" data-quote="Bespoke Enquiry">Discuss Your Project</button>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
