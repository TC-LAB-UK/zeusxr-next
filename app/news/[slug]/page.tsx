import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { NEWS_DATA } from '@/lib/news-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(NEWS_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = NEWS_DATA[slug]
  if (!a) return {}
  return {
    title: `${a.title} — Todd Engineering`,
    description: a.excerpt,
    openGraph: a.hero ? { images: [a.hero] } : undefined,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = NEWS_DATA[slug]
  if (!article) notFound()

  return (
    <>
      {/* HERO */}
      <section className="article-hero">
        {article.hero && (
          <div className="article-hero-img">
            <img src={article.hero} alt={article.title} />
          </div>
        )}
        <div className="article-hero-grad" />
        <div className="article-hero-content">
          <p className="article-tag">{article.category}</p>
          <h1 className="article-hero-title">{article.title}</h1>
          <p style={{ color: 'rgba(255,255,255,.45)', marginTop: 10, fontSize: 14 }}>{article.date}</p>
        </div>
      </section>

      {/* BODY */}
      <article className="article-body">
        {article.body.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
          if (block.type === 'quote') return (
            <blockquote key={i} className="article-quote">
              &ldquo;{block.text}&rdquo;
            </blockquote>
          )
          return <p key={i}>{block.text}</p>
        })}
      </article>

      {/* BACK */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 40px 72px' }}>
        <Link href="/news" style={{ fontSize: 13, color: 'var(--t3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Back to News
        </Link>
      </div>

      <ScrollReveal />
    </>
  )
}
