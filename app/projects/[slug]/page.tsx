import { supabase, ORG_ID } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: cs } = await supabase.from('case_studies').select('title, seo_title, seo_description, cover_image_url').eq('slug', slug).eq('org_id', ORG_ID).single()
  if (!cs) return {}
  return {
    title: cs.seo_title || cs.title,
    description: cs.seo_description,
    openGraph: cs.cover_image_url ? { images: [cs.cover_image_url] } : undefined,
  }
}

export async function generateStaticParams() {
  const { data } = await supabase.from('case_studies').select('slug').eq('org_id', ORG_ID).eq('status', 'published')
  return (data || []).map((cs: any) => ({ slug: cs.slug }))
}

function RichText({ content }: { content: any }) {
  if (!content?.content) return null
  return (
    <>
      {content.content.map((node: any, i: number) => {
        if (node.type === 'paragraph') {
          const text = node.content?.map((c: any) => c.text).join('') || ''
          return text ? <p key={i}>{text}</p> : <br key={i} />
        }
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const { data: cs } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('org_id', ORG_ID)
    .single()

  if (!cs || cs.status !== 'published') notFound()

  return (
    <>
      <section className="article-hero">
        {cs.cover_image_url && (
          <div className="article-hero-img">
            <img src={cs.cover_image_url} alt={cs.title} />
          </div>
        )}
        <div className="article-hero-grad"></div>
        <div className="article-hero-content">
          <p className="article-tag">{cs.sector || 'Case Study'}</p>
          <h1 className="article-hero-title">{cs.title}</h1>
          <p style={{ color: 'rgba(255,255,255,.55)', marginTop: 10, fontSize: 15 }}>{cs.client_name}</p>
        </div>
      </section>

      {/* Outcome stats */}
      {cs.outcome_stats && cs.outcome_stats.length > 0 && (
        <section style={{ background: 'var(--s1)', borderBottom: '1px solid var(--bdr)', padding: '48px 40px' }}>
          <div className="w-1100" style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
            {cs.outcome_stats.map((s: any, i: number) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(32px,3.5vw,52px)', fontWeight: 800, letterSpacing: '-.05em', color: 'var(--t1)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'var(--t2)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <article className="article-body">
        {cs.body && <RichText content={cs.body} />}
      </article>

      {/* Testimonial */}
      {cs.testimonial_quote && (
        <section className="testi-sec">
          <div className="testi-inner">
            <p className="testi-quote">&ldquo;{cs.testimonial_quote}&rdquo;</p>
            {cs.testimonial_author && (
              <div className="testi-attr">
                <div className="testi-line"></div>
                <div className="testi-name">{cs.testimonial_author}</div>
                <div className="testi-line"></div>
              </div>
            )}
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
