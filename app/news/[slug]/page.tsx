import { supabase, ORG_ID } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: a } = await supabase.from('articles').select('title, excerpt, seo_title, seo_description, cover_image_url').eq('slug', slug).eq('org_id', ORG_ID).single()
  if (!a) return {}
  return {
    title: a.seo_title || a.title,
    description: a.seo_description || a.excerpt,
    openGraph: a.cover_image_url ? { images: [a.cover_image_url] } : undefined,
  }
}

export async function generateStaticParams() {
  const { data } = await supabase.from('articles').select('slug').eq('org_id', ORG_ID).eq('status', 'published')
  return (data || []).map((a: any) => ({ slug: a.slug }))
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
        if (node.type === 'orderedList') return (
          <ol key={i}>
            {node.content?.map((li: any, j: number) => (
              <li key={j}>{li.content?.[0]?.content?.map((c: any) => c.text).join('') || ''}</li>
            ))}
          </ol>
        )
        if (node.type === 'blockquote') return (
          <blockquote key={i} style={{ borderLeft: '3px solid var(--green)', paddingLeft: 20, margin: '24px 0', color: 'var(--t1)', fontStyle: 'italic' }}>
            {node.content?.map((c: any) => c.content?.map((t: any) => t.text).join('')).join('')}
          </blockquote>
        )
        return null
      })}
    </>
  )
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const { data: a } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('org_id', ORG_ID)
    .single()

  if (!a || a.status !== 'published') notFound()

  return (
    <>
      <section className="article-hero">
        {a.cover_image_url && (
          <div className="article-hero-img">
            <img src={a.cover_image_url} alt={a.title} />
          </div>
        )}
        <div className="article-hero-grad"></div>
        <div className="article-hero-content">
          <p className="article-tag">{a.category || 'News'}</p>
          <h1 className="article-hero-title">{a.title}</h1>
          {a.published_at && (
            <p className="article-date" style={{ marginTop: 12 }}>
              {new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          )}
        </div>
      </section>

      <article className="article-body">
        {a.excerpt && (
          <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.7, color: 'var(--t1)', marginBottom: 32, borderBottom: '1px solid var(--bdr)', paddingBottom: 32 }}>
            {a.excerpt}
          </p>
        )}
        {a.body && <RichText content={a.body} />}
      </article>

      {/* Back link */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px 72px' }}>
        <Link href="/news" style={{ fontSize: 13, color: 'var(--t3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Back to News
        </Link>
      </div>

      {/* CTA */}
      <section className="testi-sec">
        <div className="testi-inner">
          <h2 className="s-h2" style={{ marginBottom: 16 }}>Interested in Zeus XR?</h2>
          <p className="s-p" style={{ marginBottom: 32 }}>Speak to our team to find out how Zeus XR can transform your finishing operation.</p>
          <button className="btn btn-cta btn-lg" data-quote="Zeus XR Enquiry">Get in Touch</button>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
