import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { NEWS_LIST } from '@/lib/news-data'

export const metadata: Metadata = {
  title: 'News & Updates — Todd Engineering',
  description: 'Product launches, industry insights and project highlights from the Todd Engineering team.',
}

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">From Todd Engineering</p>
          <h1>News &amp; Updates</h1>
          <p>Product launches, industry insights and project highlights from the Todd Engineering team.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w-1300">
          <div className="news-grid">
            {NEWS_LIST.map((article, i) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className={`nc rv d${i % 3}`}>
                <div
                  className="nc-thumb"
                  style={
                    article.thumb
                      ? { backgroundImage: `url(${article.thumb})`, backgroundPosition: 'center', backgroundSize: 'cover' }
                      : { background: article.thumbBg ?? 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
                  }
                >
                  {!article.thumb && (
                    <span style={{ fontSize: 28, fontWeight: 900, fontStyle: 'italic', color: '#fff', letterSpacing: -1 }}>
                      {article.thumbLabel ?? 'TE'}
                    </span>
                  )}
                </div>
                <div className="nc-body">
                  <p className="nc-cat">{article.category}</p>
                  <p className="nc-title">{article.title}</p>
                  <p className="nc-date">{article.date}</p>
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
