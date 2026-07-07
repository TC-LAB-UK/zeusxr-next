import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { getArticle } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

type Block = {
  type: 'p' | 'h2' | 'quote' | 'img' | string
  text?: string
  src?: string
  caption?: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Todd Engineering`,
    description: article.seo_description,
    openGraph: article.cover_image_url ? { images: [article.cover_image_url] } : undefined,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const hero: string = article.cover_image_url ?? ''
  const category: string = article.tags?.[0] ?? 'News'
  const date: string = formatDate(article.published_at)
  const blocks: Block[] = Array.isArray(article.body) ? article.body : []

  return (
    <>
      {/* HERO */}
      <section className="art-hero">
        {hero && (
          <div
            className="art-hero-bg"
            style={{ backgroundImage: `url('${hero}')`, backgroundPosition: 'center' }}
          />
        )}
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">{category}</div>
          <h1 className="art-h1">{article.title}</h1>
          <p className="art-meta">{date} &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      {/* BODY */}
      <div className="art-body rv">
        {blocks.map((block, i) => {
          if (block.type === 'p') return <p key={i} className="art-p">{block.text}</p>
          if (block.type === 'h2') return <h2 key={i} className="art-h2">{block.text}</h2>
          if (block.type === 'quote') return (
            <div key={i} className="art-quote rv">
              <p className="art-quote-text">&ldquo;{block.text}&rdquo;</p>
              <p className="art-quote-attr">Todd Engineering customer</p>
            </div>
          )
          if (block.type === 'img' && block.src) return (
            <div key={i} className="art-img-full rv" style={{ margin: '40px 0' }}>
              <img src={block.src} alt={block.caption ?? ''} style={{ width: '100%', borderRadius: 8, display: 'block' }} />
              {block.caption && <p className="art-img-caption">{block.caption}</p>}
            </div>
          )
          return null
        })}
      </div>

      <ScrollReveal />
    </>
  )
}
