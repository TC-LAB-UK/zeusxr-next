import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

// ─── TipTap JSON → React renderer ────────────────────────────────────────────
type TNode = { type: string; text?: string; attrs?: Record<string, unknown>; content?: TNode[]; marks?: { type: string }[] }

function renderNodes(nodes: TNode[] | undefined, depth = 0): ReactNode {
  if (!nodes) return null
  return nodes.map((n, i) => renderNode(n, i, depth))
}

function renderNode(n: TNode, key: number, depth = 0): ReactNode {
  switch (n.type) {
    case 'doc':
      return renderNodes(n.content, depth)
    case 'heading': {
      const lvl = (n.attrs?.level as number) ?? 2
      const text = renderNodes(n.content, depth)
      if (lvl === 2) return <h2 key={key} className="cs-bd-h2">{text}</h2>
      if (lvl === 3) return <h3 key={key} className="cs-bd-h3">{text}</h3>
      return <h4 key={key} className="cs-bd-h4">{text}</h4>
    }
    case 'paragraph':
      return <p key={key} className="cs-bd-p">{renderNodes(n.content, depth)}</p>
    case 'bulletList':
      return <ul key={key} className="cs-bd-ul">{renderNodes(n.content, depth)}</ul>
    case 'orderedList':
      return <ol key={key} className="cs-bd-ol">{renderNodes(n.content, depth)}</ol>
    case 'listItem':
      return <li key={key} className="cs-bd-li">{renderNodes(n.content, depth + 1)}</li>
    case 'hardBreak':
      return <br key={key} />
    case 'text': {
      let el: ReactNode = n.text ?? ''
      if (n.marks) {
        for (const m of n.marks) {
          if (m.type === 'bold')   el = <strong key={key}>{el}</strong>
          if (m.type === 'italic') el = <em key={key}>{el}</em>
        }
      }
      return el
    }
    default:
      return null
  }
}

const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

type Props = { params: Promise<{ slug: string }> }

// Cache at CDN edge — revalidate in background every hour.
// Supabase outages during revalidation serve the last cached version.
export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const sb = getSupabase()
    if (!sb) return []
    const { data } = await sb
      .from('case_studies')
      .select('slug')
      .eq('org_id', ORG_ID)
      .eq('status', 'published')
    return (data ?? []).map((p: { slug: string }) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params
    const sb = getSupabase()
    if (!sb) return {}
    const { data: cs } = await sb
      .from('case_studies')
      .select('title, sector, client_name, cover_image_url')
      .eq('org_id', ORG_ID)
      .eq('slug', slug)
      .single()
    if (!cs) return {}
    return {
      title: `${cs.title} — Todd Engineering`,
      description: `${cs.sector} case study — ${cs.client_name}`,
      openGraph: cs.cover_image_url ? { images: [cs.cover_image_url] } : undefined,
    }
  } catch {
    return {}
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  try {
    const sb = getSupabase()
    if (!sb) notFound()
    const { data: cs } = await sb!
      .from('case_studies')
      .select('*')
      .eq('org_id', ORG_ID)
      .eq('slug', slug)
      .single()
    if (!cs) notFound()

  const stats: { label: string; value: string }[] = cs.outcome_stats ?? []

  return (
    <>
      {/* HERO */}
      <section className="cs-hero">
        {cs.cover_image_url && (
          <div className="cs-bg" style={{ backgroundImage: `url('${cs.cover_image_url}')` }} />
        )}
        <div className="cs-grad" />
        <div className="cs-content">
          <div className="cs-sector">{cs.sector}</div>
          <h1 className="cs-h1">{cs.title}</h1>
          <div className="cs-meta">
            <div className="cs-meta-item"><strong>Client</strong>{cs.client_name}</div>
            {stats[0] && <div className="cs-meta-item"><strong>{stats[0].label}</strong>{stats[0].value}</div>}
            {stats[1] && <div className="cs-meta-item"><strong>{stats[1].label}</strong>{stats[1].value}</div>}
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      {stats.length > 0 && (
        <div className="wrapper" style={{ padding: '0 64px' }}>
          <div className="stats-row">
            {stats.map((stat, i) => (
              <div key={i} className="cs-stat" style={i === stats.length - 1 ? { borderRight: 'none' } : {}}>
                <div className="cs-num">{stat.value}</div>
                <div className="cs-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BODY */}
      <section style={{ padding: '80px 64px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="cso-grid">
          <div className="cso-card rv">
            <div className="cso-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 className="cso-label">The Brief</h3>
            <p className="cso-text">{cs.brief}</p>
          </div>
          <div className="cso-card rv d1">
            <div className="cso-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,11 12,14 22,4"/><path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h11"/></svg>
            </div>
            <h3 className="cso-label">The Solution</h3>
            <p className="cso-text">{cs.solution}</p>
          </div>
        </div>
      </section>

      {/* FULL BODY */}
      {cs.body && cs.body.content && cs.body.content.length > 0 && (
        <section style={{ padding: '0 64px 80px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="cs-bd-wrap">
            {renderNode(cs.body as TNode, 0)}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {cs.gallery_images && cs.gallery_images.length > 0 && (
        <section className="cs-gallery-sec">
          <div className="cs-gallery-grid">
            {(cs.gallery_images as string[]).map((src, i) => (
              <div key={i} className={`cs-gallery-item rv d${i % 3}`}>
                <img src={src} alt={`${cs.client_name} installation — ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      {cs.testimonial_quote && (
        <section style={{ padding: '80px 64px', borderTop: '1px solid var(--bdr)' }}>
          <div className="testi-wrap rv">
            <div className="testi-mark">&ldquo;</div>
            <p className="testi-q">{cs.testimonial_quote}</p>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--t3)' }}>
              {cs.testimonial_author}
            </p>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section style={{ padding: '80px 64px', borderTop: '1px solid var(--bdr)', background: 'var(--s1)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 12 }}>
              Enquire
            </p>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800, letterSpacing: '-.03em' }}>
              Start your project
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <ScrollReveal />
    </>
  )
  } catch {
    notFound()
  }
}
