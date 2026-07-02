import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { PROJECTS_DATA } from '@/lib/projects-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = PROJECTS_DATA[slug]
  if (!p) return {}
  return {
    title: `${p.title} — Todd Engineering`,
    description: p.lead,
    openGraph: p.hero ? { images: [p.hero] } : undefined,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const cs = PROJECTS_DATA[slug]
  if (!cs) notFound()

  return (
    <>
      {/* HERO */}
      <section className="article-hero">
        {cs.hero && (
          <div className="article-hero-img">
            <img src={cs.hero} alt={cs.title} />
          </div>
        )}
        <div className="article-hero-grad" />
        <div className="article-hero-content">
          <p className="article-tag">{cs.sector}</p>
          <h1 className="article-hero-title">{cs.title}</h1>
          {(cs.client || cs.date) && (
            <p style={{ color: 'rgba(255,255,255,.55)', marginTop: 10, fontSize: 15 }}>
              {cs.client}{cs.client && cs.date ? ' — ' : ''}{cs.date}
            </p>
          )}
        </div>
      </section>

      {/* BODY */}
      <div className="cs-body">
        <div className="cs-main">

          {cs.lead && <p className="cs-lead rv">{cs.lead}</p>}

          {cs.features.length > 0 && (
            <>
              <div className="cs-section-title rv">Installed Equipment</div>
              <ul className="cs-features">
                {cs.features.map((f, i) => (
                  <li key={i} className="cs-feature">
                    <div className="cs-feature-dot" />
                    <div className="cs-feature-text" dangerouslySetInnerHTML={{ __html: f.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {cs.quote && (
            <div className="cs-quote rv">
              <p className="cs-quote-text">&ldquo;{cs.quote}&rdquo;</p>
              {cs.quoteAttr && <div className="cs-quote-attr">— {cs.quoteAttr}</div>}
            </div>
          )}

        </div>

        {/* SIDEBAR */}
        <aside className="cs-sidebar rv d2">
          <div className="cs-facts">
            <div className="cs-facts-header">Project Details</div>
            {cs.client && (
              <div className="cs-fact">
                <div className="cs-fact-label">Client</div>
                <div className="cs-fact-value">{cs.client}</div>
              </div>
            )}
            <div className="cs-fact">
              <div className="cs-fact-label">Sector</div>
              <div className="cs-fact-value">{cs.sector}</div>
            </div>
            {cs.date && (
              <div className="cs-fact">
                <div className="cs-fact-label">Date</div>
                <div className="cs-fact-value">{cs.date}</div>
              </div>
            )}
            {cs.location && (
              <div className="cs-fact">
                <div className="cs-fact-label">Location</div>
                <div className="cs-fact-value">{cs.location}</div>
              </div>
            )}
            {cs.product && (
              <div className="cs-fact">
                <div className="cs-fact-label">Product</div>
                <div className="cs-fact-value">{cs.product}</div>
              </div>
            )}
          </div>

          <a href="/contact" className="btn btn-cta" style={{ display: 'flex', marginTop: 24, justifyContent: 'center' }}>
            Get a Quote
          </a>
        </aside>
      </div>

      {/* GALLERY */}
      {cs.gallery.length > 0 && (
        <section className="cs-gallery-sec">
          <div className="cs-gallery-grid">
            {cs.gallery.map((src, i) => (
              <div key={i} className="cs-gallery-item rv">
                <img src={src} alt={`${cs.title} — ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 40px 72px' }}>
        <Link href="/projects" style={{ fontSize: 13, color: 'var(--t3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Back to Projects
        </Link>
      </div>

      <ScrollReveal />
    </>
  )
}
