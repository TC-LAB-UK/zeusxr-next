import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ArticleVideo from '@/components/ArticleVideo'
import { getArticle, getArticles } from '@/lib/supabase'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((a: { slug: string }) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = await getArticle(slug)
  if (!a) return {}
  return {
    title: a.seo_title || `${a.title} — Todd Engineering`,
    description: a.seo_description || '',
    openGraph: a.cover_image_url ? { images: [a.cover_image_url] } : undefined,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const b = article.body ?? {}
  const category: string = b.category ?? (article.tags?.[0] ?? 'News')
  const date: string = b.date ?? ''
  const heroType: string = b.hero_type ?? 'photo'
  const heroPos: string = b.hero_image_position ?? 'center'
  const lead: string = b.lead ?? ''
  const paragraphs: string[] = b.paragraphs ?? []
  const quote: { text: string; attr: string } | null = b.quote ?? null
  const parasAfter: string[] = b.paragraphs_after_quote ?? []
  const sectionHeading: string | null = b.section_heading ?? null
  const benefits: string[] = b.benefits ?? []
  const featurePanel: { label: string; heading: string; body: string; pills: string[] } | null = b.feature_panel ?? null
  const tagsList: string[] = b.tags_list ?? []
  const singleImage: string | null = b.single_image ?? null
  const singleImageCaption: string | null = b.single_image_caption ?? null
  const imageGrid: string[] = b.image_grid ?? []
  const imageGridCaption: string | null = b.image_grid_caption ?? null
  const hasVideo: boolean = b.has_video ?? false
  const videoLabel: string = b.video_label ?? 'Watch'
  const videoTitle: string = b.video_title ?? 'Zeus XR — Explained'
  const videoOverlay: string = b.video_overlay_url ?? article.cover_image_url ?? ''
  const videoOverlayPos: string = b.video_overlay_position ?? 'center'
  const related: Array<{ slug: string; title: string; category: string; date: string; thumb: string }> = b.related ?? []

  return (
    <>
      {/* HERO */}
      <section className="art-hero">
        {heroType === 'rupes-brand' ? (
          <div className="rupes-hero-logo">
            <span className="rupes-wordmark">RUPES<sup style={{ fontSize: '0.35em', verticalAlign: 'super', fontStyle: 'normal' }}>®</sup></span>
          </div>
        ) : (
          <div
            className="art-hero-bg"
            style={{ backgroundImage: `url('${article.cover_image_url}')`, backgroundPosition: heroPos }}
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
        {lead && <p className="art-lead">{lead}</p>}
        {paragraphs.map((p, i) => <p key={i} className="art-p">{p}</p>)}

        {sectionHeading && <h2 className="art-h2">{sectionHeading}</h2>}

        {benefits.length > 0 && (
          <div className="art-benefits">
            {benefits.map((benefit, i) => (
              <div key={i} className="art-benefit">
                <div className="art-benefit-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12" /></svg>
                </div>
                <span className="art-benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {quote && (
          <div className="art-quote rv">
            <p className="art-quote-text">&ldquo;{quote.text}&rdquo;</p>
            <p className="art-quote-attr">{quote.attr}</p>
          </div>
        )}

        {featurePanel && (
          <div className="art-feature-panel rv">
            <span className="art-feature-panel-lbl">{featurePanel.label}</span>
            <span className="art-feature-panel-h">{featurePanel.heading}</span>
            <span className="art-feature-panel-p">{featurePanel.body}</span>
            <div className="art-feature-pills">
              {featurePanel.pills.map((pill, i) => (
                <span key={i} className="art-feature-pill">{pill}</span>
              ))}
            </div>
          </div>
        )}

        {parasAfter.map((p, i) => <p key={i} className="art-p">{p}</p>)}

        {tagsList.length > 0 && (
          <div className="art-tags">
            {tagsList.map((tag, i) => <span key={i} className="art-tag">{tag}</span>)}
          </div>
        )}
      </div>

      {/* SINGLE IMAGE */}
      {singleImage && (
        <div className="art-img-full rv">
          <img src={singleImage} alt={article.title} />
          {singleImageCaption && <p className="art-img-caption">{singleImageCaption}</p>}
        </div>
      )}

      {/* IMAGE GRID */}
      {imageGrid.length > 0 && (
        <div className="art-img-full rv">
          <div className="art-img-grid">
            {imageGrid.map((src, i) => (
              <img key={i} src={src} alt={`${article.title} ${i + 1}`} />
            ))}
          </div>
          {imageGridCaption && <p className="art-img-caption">{imageGridCaption}</p>}
        </div>
      )}

      {/* VIDEO */}
      {hasVideo && (
        <ArticleVideo
          label={videoLabel}
          title={videoTitle}
          overlayUrl={videoOverlay}
          overlayPosition={videoOverlayPos}
        />
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="art-related">
          <div className="art-related-inner rv">
            <span className="art-related-lbl">More from Todd Engineering</span>
            <div className={`art-related-grid${related.length >= 3 ? ' cols-3' : ''}`}>
              {related.map((rel) => (
                <Link key={rel.slug} href={`/news/${rel.slug}`} className="art-rel-card">
                  <div className="art-rel-thumb" style={{ backgroundImage: `url('${rel.thumb}')` }} />
                  <div className="art-rel-body">
                    <span className="art-rel-cat">{rel.category}</span>
                    <span className="art-rel-title">{rel.title}</span>
                    <span className="art-rel-date">{rel.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ScrollReveal />
    </>
  )
}
