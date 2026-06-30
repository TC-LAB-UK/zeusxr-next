import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'News — Todd Engineering',
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
      {/* HERO */}
      <section className="news-hero">
        <div className="news-hero-inner">
          <p className="news-hero-lbl">From Todd Engineering</p>
          <h1>News &amp; Updates</h1>
          <p>Product launches, industry insights and project highlights from the Todd Engineering team.</p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="sec">
        <div className="w-1300">
          {articles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--t2)' }}>
              <p>No articles published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="nc-grid">
              {articles.map((a: any, i: number) => (
                <Link key={a.id} href={`/news/${a.slug}`} className={`nc rv${i > 0 ? ` d${i % 4}` : ''}`}>
                  <div className="nc-thumb">
                    {a.cover_image_url
                      ? <img src={a.cover_image_url} alt={a.title} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }} />
                    }
                  </div>
                  <div className="nc-body">
                    <p className="nc-cat">{a.category || 'News'}</p>
                    <h2 className="nc-title">{a.title}</h2>
                    {a.published_at && (
                      <p className="nc-date">{new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
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
