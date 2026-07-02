import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { NEWS_DATA, NEWS_LIST } from '@/lib/news-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return NEWS_LIST.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_DATA[slug]
  if (!article) return {}
  return {
    title: `${article.title} — Todd Engineering`,
    description: article.excerpt,
    openGraph: article.hero ? { images: [article.hero] } : undefined,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = NEWS_DATA[slug]
  if (!article) notFound()

  const isRupes = slug === 'todd-engineering-rupes-partnership'

  return (
    <>
      {/* HERO */}
      <section className="art-hero">
        {isRupes ? (
          <div className="rupes-hero-logo">
            <span className="rupes-wordmark">RUPES<sup style={{ fontSize: '0.35em', verticalAlign: 'super', fontStyle: 'normal' }}>®</sup></span>
          </div>
        ) : (
          <div
            className="art-hero-bg"
            style={{ backgroundImage: `url('${article.hero}')`, backgroundPosition: 'center' }}
          />
        )}
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">{article.category}</div>
          <h1 className="art-h1">{article.title}</h1>
          <p className="art-meta">{article.date} &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      {/* BODY */}
      <div className="art-body rv">
        {article.body.map((block, i) => {
          if (block.type === 'p') return <p key={i} className="art-p">{block.text}</p>
          if (block.type === 'h2') return <h2 key={i} className="art-h2">{block.text}</h2>
          if (block.type === 'quote') return (
            <div key={i} className="art-quote rv">
              <p className="art-quote-text">&ldquo;{block.text}&rdquo;</p>
              <p className="art-quote-attr">Todd Engineering customer</p>
            </div>
          )
          return null
        })}
      </div>

      <ScrollReveal />
    </>
  )
}
