import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { getCaseStudies } from '@/lib/supabase'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects — Todd Engineering',
  description: 'Explore Todd Engineering case studies — spraybooth installations across automotive, aerospace, renewable energy and defence sectors.',
}

export default async function ProjectsPage() {
  const projects = await getCaseStudies()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Case Studies</p>
          <h1>Our Projects</h1>
          <p>From wind energy to aerospace, motorsport to volume automotive — work that defines our capability.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w-1300">
          <div className="proj-grid">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={`proj-card rv d${i % 3}`}>
                <div
                  className="proj-bg"
                  style={{ backgroundImage: p.cover_image_url ? `url(${p.cover_image_url})` : undefined }}
                />
                <div className="proj-overlay">
                  <p className="proj-sector">{p.sector ?? p.client_name}</p>
                  <h2 className="proj-title">{p.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
