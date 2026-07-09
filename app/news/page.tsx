import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { getArticles } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'News & Updates — Todd Engineering',
  description: 'Product launches, industry insights and project highlights from the Todd Engineering team.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

// Slugs that need a custom CSS thumbnail instead of a cover image
const CUSTOM_THUMBS: Record<string, { bg: string; label: React.ReactNode }> = {
  'todd-engineering-rupes-partnership': {
    bg: '#E31E24',
    label: (
      <span style={{ fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: '#fff', letterSpacing: -1 }}>
        RUPES<sup style={{ fontSize: '0.4em', verticalAlign: 'super', fontStyle: 'normal' }}>®</sup>
      </span>
    ),
  },
}

export default async function NewsPage() {
  const articles = await getArticles()

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
            {articles.map((article, i) => {
              const custom = CUSTOM_THUMBS[article.slug]
              return (
                <Link key={article.slug} href={`/news/${article.slug}`} className={`nc rv d${i % 3}`}>
                  <div
                    className="nc-thumb"
                    style={
                      custom
                        ? { background: custom.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }
                        : article.cover_image_url
                          ? { backgroundImage: `url(${article.cover_image_url})`, backgroundPosition: 'center', backgroundSize: 'cover' }
                          : { background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
                    }
                  >
                    {custom ? custom.label : !article.cover_image_url && (
                      <span style={{ fontSize: 28, fontWeight: 900, fontStyle: 'italic', color: '#fff', letterSpacing: -1 }}>
                        TE
                      </span>
                    )}
                  </div>
                  <div className="nc-body">
                    <p className="nc-cat">{article.tags?.[0] ?? 'News'}</p>
                    <p className="nc-title">{article.title}</p>
                    <p className="nc-date">{formatDate(article.published_at)}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
