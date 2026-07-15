import Link from 'next/link'
import type { Metadata } from 'next'
import { getSolutions } from '@/lib/supabase'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Solutions — Todd Engineering',
  description: 'From installation and design & build to maintenance and project management — Todd Engineering delivers end-to-end solutions for spraybooth facilities.',
}

export default async function SolutionsPage() {
  const solutions = await getSolutions()

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <div>
            <p className="page-eyebrow">Todd Engineering</p>
            <h1 className="page-h1">Solutions</h1>
            <p className="page-meta">From concept to completion — we handle every aspect of your project.</p>
          </div>
          <Link href="/contact" className="btn btn-cta">Talk to an Engineer</Link>
        </div>
      </header>

      <section className="sec">
        <div className="w-1300">
          <div className="prod-grid">
            {solutions.map((s, i) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className={`prod-card rv${i > 0 ? ` d${i % 3}` : ''}`}>
                <div className="prod-img-wrap">
                  {s.cover_image_url
                    ? <img src={s.cover_image_url} alt={s.name} loading={i < 6 ? 'eager' : 'lazy'} />
                    : <div style={{ background: '#f0f0f0', width: '100%', height: '100%' }} />
                  }
                </div>
                <div className="prod-card-body">
                  <div className="prod-name">{s.name}</div>
                  {s.tagline && <div className="prod-desc">{s.tagline}</div>}
                  <div className="prod-card-footer">
                    <span className="prod-cta">
                      Learn More
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
