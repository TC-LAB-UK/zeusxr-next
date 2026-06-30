import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest news, product updates and industry insights from Todd Engineering.',
}

async function getArticles() {
  const { data } = await supabase
    .from('articles')
    .select('id, title, slug, excerpt, cover_image_url, published_at, category')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  return data || []
}

export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">From Todd Engineering</p>
          <h1>News & Updates</h1>
          <p>Product launches, industry insights and project highlights from the Todd Engineering team.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w-1300">
          {articles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--t2)' }}>
              <p>No articles published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="news-grid">
              {articles.map((a: any, i: number) => (
                <Link key={a.id} href={`/news/${a.slug}`} className={`news-card rv d${i % 3}`}>
                  <div className="news-thumb">
                    {a.cover_image_url
                      ? <img src={a.cover_image_url} alt={a.title} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>
                    }
                  </div>
                  <div className="news-body">
                    <p className="news-tag">{a.category || 'News'}</p>
                    <h2 className="news-title">{a.title}</h2>
                    {a.excerpt && <p className="news-excerpt">{a.excerpt}</p>}
                    {a.published_at && (
                      <p className="news-date">{new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    )}
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
