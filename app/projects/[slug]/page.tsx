import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import { getCaseStudy, getCaseStudies } from '@/lib/supabase'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

// Extract plain text paragraphs from tiptap JSON body
function parseTiptapBody(body: { type: string; content?: { type: string; content?: { type: string; text?: string }[] }[] } | null | undefined): string[] {
  if (!body?.content) return []
  return body.content
    .filter((node) => node.type === 'paragraph')
    .map((node) =>
      (node.content ?? []).map((c) => c.text ?? '').join('')
    )
    .filter(Boolean)
}

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.seo_title || `${cs.title} — Todd Engineering`,
    description: cs.seo_description || '',
    openGraph: cs.cover_image_url ? { images: [cs.cover_image_url] } : undefined,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  if (!cs) notFound()

  const stats: Array<{ label: string; value: string }> = cs.outcome_stats ?? []
  const paragraphs = parseTiptapBody(cs.body)

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
      {paragraphs.length > 0 && (
        <section style={{ padding: '80px 64px', maxWidth: 1280, margin: '0 auto' }}>
          <div className="cso-grid">
            <div className="cso-card rv">
              <div className="cso-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="cso-label">The Brief</h3>
              <p className="cso-text">{paragraphs[0]}</p>
            </div>
            <div className="cso-card rv d1">
              <div className="cso-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,11 12,14 22,4"/><path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h11"/></svg>
              </div>
              <h3 className="cso-label">The Solution</h3>
              <p className="cso-text">{paragraphs[1] ?? paragraphs[0]}</p>
            </div>
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
}
