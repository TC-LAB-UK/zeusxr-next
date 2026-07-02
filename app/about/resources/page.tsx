import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources — Todd Engineering',
  description: 'Technical guides, case studies and product brochures from Todd Engineering.',
}

const GUIDES = [
  {
    label: 'Guide',
    title: 'Choosing the Right Spraybooth',
    desc: 'Airflow, filtration, size and budget — a practical guide for bodyshop owners making a purchasing decision.',
    href: '/news',
  },
  {
    label: 'Case Study',
    title: 'UK Offshore Wind Farm',
    desc: 'How Todd Engineering delivered a bespoke large-format industrial finish facility for a British wind energy project.',
    href: '/projects/uk-offshore-wind-farm',
  },
  {
    label: 'Case Study',
    title: 'Bahrain Aerospace Facility',
    desc: 'A precision finishing environment for aerospace-grade components in a high-demand Middle East facility.',
    href: '/projects/bahrain-aerospace-facility',
  },
  {
    label: 'Case Study',
    title: 'K&S — Bespoke Zeus Spraybooth',
    desc: 'Maximising workshop space with a full-width door configuration, Track & Skate system, and fully electric Zeus Spraybooth.',
    href: '/projects/k-and-s',
  },
  {
    label: 'News',
    title: 'Zeus XR — AI Robotic Spray System',
    desc: 'Read how the Zeus XR was developed in partnership with PaintGo to bring OEM-level finish to bodyshops.',
    href: '/zeus-xr',
  },
  {
    label: 'News',
    title: 'RUPES Partnership',
    desc: 'Todd Engineering partners with RUPES to bring world-class polishing systems into the Zeus XR ecosystem.',
    href: '/news/todd-engineering-rupes-partnership',
  },
]

const DOWNLOADS = [
  {
    title: 'Zeus XR Product Brochure',
    desc: 'Full specifications, features and installation requirements for the Zeus XR system.',
    ext: 'PDF',
    href: '/contact',
    cta: 'Request brochure',
  },
  {
    title: "Spraybooth Buyer's Guide",
    desc: 'Everything you need to know before specifying a new spraybooth — from airflow to compliance.',
    ext: 'PDF',
    href: '/contact',
    cta: 'Request guide',
  },
  {
    title: 'Todd Engineering Company Overview',
    desc: 'Our history, capabilities and full product range — suitable for procurement teams and specifiers.',
    ext: 'PDF',
    href: '/contact',
    cta: 'Request overview',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 40px 100px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: "url('/media/zeus-xr-8.jpg') center/cover no-repeat", filter: 'brightness(.18)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 2 }} className="rv">
          <span className="s-lbl" style={{ color: 'rgba(255,255,255,.35)' }}>Todd Engineering</span>
          <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', margin: '16px 0 20px', lineHeight: 1.05 }}>
            Resources
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontWeight: 300, color: 'rgba(255,255,255,.5)', maxWidth: 520, margin: '0 auto' }}>
            Case studies, technical guides and product literature from over 30 years of spraybooth engineering.
          </p>
        </div>
      </section>

      {/* Guides & case studies grid */}
      <section style={{ padding: '80px 40px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="rv" style={{ marginBottom: 48 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--t3)', display: 'block', marginBottom: 12 }}>Reading</span>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--t1)', margin: 0 }}>Guides & Case Studies</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
            {GUIDES.map((g) => (
              <Link key={g.title} href={g.href} className="rv res-guide-card">
                <span className="res-guide-label">{g.label}</span>
                <span className="res-guide-title">{g.title}</span>
                <span className="res-guide-desc">{g.desc}</span>
                <span className="res-guide-cta">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section style={{ padding: '0 40px 100px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="rv" style={{ marginBottom: 48 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--t3)', display: 'block', marginBottom: 12 }}>Downloads</span>
            <h2 style={{ fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--t1)', margin: 0 }}>Product Literature</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {DOWNLOADS.map((d) => (
              <div key={d.title} className="rv res-dl-card">
                <span className="res-dl-ext">{d.ext}</span>
                <span className="res-dl-title">{d.title}</span>
                <span className="res-dl-desc">{d.desc}</span>
                <Link href={d.href} className="res-dl-btn">{d.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: 'var(--s1)', borderTop: '1px solid var(--bdr)' }}>
        <div className="rv" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--t1)', marginBottom: 16 }}>
            Can&apos;t find what you need?
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'var(--t2)', marginBottom: 32 }}>
            Our team is happy to provide technical specifications, installation guides or product information directly. Get in touch.
          </p>
          <Link href="/contact" className="btn btn-cta">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
