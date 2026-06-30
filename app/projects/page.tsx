import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Todd Engineering case studies — spraybooth installations across automotive, aerospace and industrial sectors.',
}

async function getCaseStudies() {
  const { data } = await supabase
    .from('case_studies')
    .select('id, title, slug, client_name, sector, cover_image_url, published_at')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  return data || []
}

export default async function ProjectsPage() {
  const caseStudies = await getCaseStudies()

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
          {caseStudies.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--t2)' }}>
              <p>No projects published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="proj-grid">
              {caseStudies.map((cs: any, i: number) => (
                <Link key={cs.id} href={`/projects/${cs.slug}`} className={`proj-card rv d${i % 3}`}>
                  <div
                    className="proj-bg"
                    style={cs.cover_image_url ? { backgroundImage: `url(${cs.cover_image_url})` } : { background: 'var(--s2)' }}
                  ></div>
                  <div className="proj-overlay">
                    <p className="proj-sector">{cs.sector || 'Case Study'}</p>
                    <h2 className="proj-title">{cs.title}</h2>
                    <p className="proj-sub">{cs.client_name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
