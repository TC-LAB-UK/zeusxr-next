import { supabase, ORG_ID } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: p } = await supabase.from('products').select('name, tagline, seo_title, seo_description').eq('slug', slug).eq('org_id', ORG_ID).single()
  if (!p) return {}
  return {
    title: p.seo_title || p.name,
    description: p.seo_description || p.tagline,
  }
}

export async function generateStaticParams() {
  const { data } = await supabase.from('products').select('slug').eq('org_id', ORG_ID).eq('status', 'published')
  return (data || []).map((p: any) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const { data: p } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('org_id', ORG_ID)
    .single()

  if (!p || p.status !== 'published') notFound()

  // Get related products
  const { data: related } = await supabase
    .from('products')
    .select('id, name, slug, cover_image_url, tagline')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .neq('slug', slug)
    .limit(3)

  return (
    <>
      {/* Hero */}
      <section className="article-hero" style={{ minHeight: '55vh' }}>
        {p.cover_image_url && (
          <div className="article-hero-img">
            <img src={p.cover_image_url} alt={p.name} />
          </div>
        )}
        <div className="article-hero-grad"></div>
        <div className="article-hero-content">
          <p className="article-tag">Todd Engineering</p>
          <h1 className="article-hero-title">{p.name}</h1>
          {p.tagline && <p style={{ color: 'rgba(255,255,255,.65)', marginTop: 12, fontSize: 18, fontWeight: 300 }}>{p.tagline}</p>}
        </div>
      </section>

      {/* Content */}
      <section className="sec">
        <div className="w-1100">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start' }}>
            <div>
              {p.description && (
                <div className="article-body" style={{ padding: 0, margin: 0, maxWidth: '100%' }}>
                  {typeof p.description === 'string'
                    ? <p>{p.description}</p>
                    : <RichText content={p.description} />
                  }
                </div>
              )}

              {p.key_features && p.key_features.length > 0 && (
                <div style={{ marginTop: 48 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--t1)', marginBottom: 20, letterSpacing: '-.02em' }}>Key Features</h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {p.key_features.map((f: string, i: number) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'var(--t2)', fontWeight: 300, lineHeight: 1.6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', marginTop: 8, flexShrink: 0 }}></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 20, padding: 32 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--t1)', marginBottom: 20 }}>Interested in {p.name}?</h3>
                <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65, marginBottom: 24 }}>Get in touch with our team to discuss specifications, pricing and installation options.</p>
                <button className="btn btn-cta" data-quote={`Quote: ${p.name}`} style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>
                  Get a Quote
                </button>
                <Link href="/contact" className="btn btn-ghost-ui" style={{ width: '100%', justifyContent: 'center' }}>
                  Contact Us
                </Link>
                <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--bdr)' }}>
                  <p style={{ fontSize: 11, color: 'var(--t3)', lineHeight: 1.6 }}>
                    0845 017 6465<br />
                    sales@toddengineering.co.uk<br />
                    Monday – Friday, 8am – 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related && related.length > 0 && (
        <section className="sec sec-alt">
          <div className="w-1300">
            <p className="s-lbl">Also from Todd Engineering</p>
            <h2 className="s-h2" style={{ marginBottom: 40 }}>Related Products</h2>
            <div className="products-grid">
              {related.map((r: any, i: number) => (
                <Link key={r.id} href={r.slug === 'zeus-xr' ? '/zeus-xr' : `/products/${r.slug}`} className={`product-card rv d${i}`}>
                  <div className="product-img">
                    {r.cover_image_url ? <img src={r.cover_image_url} alt={r.name} /> : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>}
                  </div>
                  <div className="product-body">
                    <p className="product-eyebrow">Todd Engineering</p>
                    <h3 className="product-name">{r.name}</h3>
                    <p className="product-desc">{r.tagline}</p>
                    <span className="product-link">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ScrollReveal />
    </>
  )
}

function RichText({ content }: { content: any }) {
  if (!content?.content) return null
  return (
    <>
      {content.content.map((node: any, i: number) => {
        if (node.type === 'paragraph') return <p key={i}>{node.content?.map((c: any) => c.text).join('') || ''}</p>
        if (node.type === 'heading') {
          const Tag = `h${node.attrs?.level || 2}` as any
          return <Tag key={i}>{node.content?.map((c: any) => c.text).join('')}</Tag>
        }
        if (node.type === 'bulletList') return (
          <ul key={i}>
            {node.content?.map((li: any, j: number) => (
              <li key={j}>{li.content?.[0]?.content?.map((c: any) => c.text).join('') || ''}</li>
            ))}
          </ul>
        )
        return null
      })}
    </>
  )
}
