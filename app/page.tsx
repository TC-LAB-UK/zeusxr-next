import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Carousel from '@/components/Carousel'

async function getProducts() {
  const { data } = await supabase
    .from('products')
    .select('id, name, slug, tagline, cover_image_url, featured')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('sort_order', { ascending: true })
    .limit(8)
  return data || []
}

async function getArticles() {
  const { data } = await supabase
    .from('articles')
    .select('id, title, slug, excerpt, cover_image_url, published_at, category')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)
  return data || []
}

async function getCaseStudies() {
  const { data } = await supabase
    .from('case_studies')
    .select('id, title, slug, client_name, sector, cover_image_url')
    .eq('org_id', ORG_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)
  return data || []
}

export default async function Home() {
  const [products, articles, caseStudies] = await Promise.all([
    getProducts(),
    getArticles(),
    getCaseStudies(),
  ])

  const zeusXR = products.find((p: any) => p.slug === 'zeus-xr' || p.featured)
  const otherProducts = products.filter((p: any) => p !== zeusXR)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-vid">
          <video autoPlay muted loop playsInline poster="/media/hero-poster.jpg">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-grad"></div>
        <div className="hero-center">
          <p className="hero-eyebrow">Introducing Zeus XR</p>
          <h1 className="hero-h1">The next generation of<br />spraybooth technology.</h1>
          <p className="hero-sub-text">By Todd Engineering.</p>
          <div className="hero-ctas">
            <Link href="/zeus-xr" className="btn btn-cta btn-lg">Explore Zeus XR</Link>
            <a href="#products" className="btn btn-ghost btn-lg">View All Products</a>
          </div>
        </div>
        <div className="hero-bar">
          <div className="hero-trusted">
            <span className="hero-trusted-lbl">Trusted by</span>
            <div className="hero-badges">
              <span className="hero-badge">Automotive</span>
              <span className="hero-badge">Aerospace</span>
              <span className="hero-badge">Industrial</span>
            </div>
          </div>
          <div className="hero-award">Spray Booth Manufacturer of the Year 2024</div>
        </div>
      </section>

      {/* PRODUCTS CATALOGUE */}
      <section className="catalogue-sec" id="products">
        <div className="catalogue-header">
          <div className="catalogue-header-left">
            <p className="s-lbl">Our Range</p>
            <h2>Built for performance.<br />Designed to last.</h2>
          </div>
          <div className="catalogue-controls">
            <button className="cat-arrow" id="catPrev" aria-label="Previous">
              <svg viewBox="0 0 16 16"><polyline points="10,2 4,8 10,14"/></svg>
            </button>
            <button className="cat-arrow" id="catNext" aria-label="Next">
              <svg viewBox="0 0 16 16"><polyline points="6,2 12,8 6,14"/></svg>
            </button>
            <Link href="/products" className="cat-view-all">View All</Link>
          </div>
        </div>

        <Carousel>
          {zeusXR && (
            <div className="cat-card cat-card-featured">
              <Link href="/zeus-xr" className="cat-card-link" aria-label="Zeus XR"></Link>
              <div className="cat-render">
                <span className="cat-render-badge">New</span>
                {zeusXR.cover_image_url
                  ? <img src={zeusXR.cover_image_url} alt={zeusXR.name} />
                  : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>
                }
              </div>
              <div className="cat-card-body-wrap">
                <p className="cat-eyebrow">Zeus XR</p>
                <h3 className="cat-title">AI-Assisted Robotic<br />Spray System</h3>
                <p className="cat-desc">{zeusXR.tagline || "The world's most advanced automated spray booth. Precision AI guidance meets British engineering excellence."}</p>
                <div className="cat-actions">
                  <Link href="/zeus-xr" className="cat-btn-primary">Explore Zeus XR</Link>
                  <Link href="/contact" className="cat-btn-secondary">Get a Quote</Link>
                </div>
              </div>
            </div>
          )}

          {otherProducts.map((p: any) => (
            <div key={p.id} className="cat-card">
              <Link href={`/products/${p.slug}`} className="cat-card-link" aria-label={p.name}></Link>
              <div className="cat-render">
                {p.cover_image_url
                  ? <img src={p.cover_image_url} alt={p.name} />
                  : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>
                }
              </div>
              <div className="cat-card-body-wrap">
                <p className="cat-eyebrow">Todd Engineering</p>
                <h3 className="cat-title">{p.name}</h3>
                <p className="cat-desc">{p.tagline || 'Premium spraybooth technology, engineered for performance.'}</p>
                <div className="cat-actions">
                  <Link href={`/products/${p.slug}`} className="cat-btn-primary">Learn More</Link>
                  <button className="cat-btn-secondary" data-quote={`Quote: ${p.name}`}>Get a Quote</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* STATS */}
      <section className="sec">
        <div className="w-1300">
          <div className="stats-strip">
            <div className="stat-cell rv">
              <div className="stat-num">30<span>+</span></div>
              <div className="stat-title">Years experience</div>
              <div className="stat-note">Engineering spraybooths since 1993</div>
            </div>
            <div className="stat-cell rv d1">
              <div className="stat-num">500<span>+</span></div>
              <div className="stat-title">Installations</div>
              <div className="stat-note">Across UK, Europe & beyond</div>
            </div>
            <div className="stat-cell rv d2">
              <div className="stat-num">98<span>%</span></div>
              <div className="stat-title">Customer satisfaction</div>
              <div className="stat-note">Based on post-installation surveys</div>
            </div>
            <div className="stat-cell rv d3">
              <div className="stat-num">24<span>/7</span></div>
              <div className="stat-title">Support available</div>
              <div className="stat-note">Dedicated service & aftercare team</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="sec sec-alt" id="solutions">
        <div className="w-1300">
          <div className="tc mw-600">
            <p className="s-lbl rv">What we do</p>
            <h2 className="s-h2 rv d1">End-to-end solutions,<br />from design to aftercare.</h2>
          </div>
          <div className="sol-grid">
            {[
              { href: '/solutions/installation', title: 'Installation', desc: 'Full turnkey installation by our in-house team of certified engineers.' },
              { href: '/solutions/design-build', title: 'Design & Build', desc: 'Bespoke spray booth design tailored to your space, process and throughput.' },
              { href: '/solutions/project-management', title: 'Project Management', desc: 'Dedicated project managers from specification through to commissioning.' },
              { href: '/solutions/maintenance', title: 'Maintenance & Servicing', desc: 'Planned maintenance programmes keeping your booth at peak performance.' },
            ].map((s, i) => (
              <Link key={s.href} href={s.href} className={`sol-card rv d${i}`}>
                <div className="sol-bg" style={{ background: 'var(--s2)' }}></div>
                <div className="sol-overlay">
                  <p className="sol-eyebrow">Solutions</p>
                  <h3 className="sol-title">{s.title}</h3>
                  <p className="sol-desc">{s.desc}</p>
                  <span className="sol-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {caseStudies.length > 0 && (
        <section className="sec" id="projects">
          <div className="w-1300">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
              <div>
                <p className="s-lbl rv">Case Studies</p>
                <h2 className="s-h2 rv d1">Projects that define<br />our capability.</h2>
              </div>
              <Link href="/projects" className="cat-view-all rv">View All</Link>
            </div>
            <div className="proj-grid">
              {caseStudies.map((cs: any, i: number) => (
                <Link key={cs.id} href={`/projects/${cs.slug}`} className={`proj-card rv d${i}`}>
                  <div
                    className="proj-bg"
                    style={cs.cover_image_url ? { backgroundImage: `url(${cs.cover_image_url})` } : { background: 'var(--s2)' }}
                  ></div>
                  <div className="proj-overlay">
                    <p className="proj-sector">{cs.sector || 'Case Study'}</p>
                    <h3 className="proj-title">{cs.title}</h3>
                    <p className="proj-sub">{cs.client_name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      <section className="testi-sec">
        <div className="testi-inner rv">
          <p className="testi-quote">
            &ldquo;Todd Engineering didn&rsquo;t just deliver a spraybooth — they delivered a <strong>complete operational transformation</strong>. The Zeus XR has changed how we think about finishing.&rdquo;
          </p>
          <div className="testi-attr">
            <div className="testi-line"></div>
            <div>
              <div className="testi-name">Operations Director</div>
              <div className="testi-role">Leading UK Automotive Group</div>
            </div>
            <div className="testi-line"></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec sec-alt">
        <div className="w-1100">
          <div className="about-strip">
            <div className="about-body">
              <p className="s-lbl rv">About Us</p>
              <h2 className="s-h2 rv d1">Thirty years of British<br />engineering excellence.</h2>
              <p className="s-p rv d2">Founded in 1993, Todd Engineering has grown to become the UK&rsquo;s most trusted spray booth manufacturer. Every product we build is designed, manufactured and installed by our team in Staffordshire.</p>
              <p className="s-p rv d3" style={{ marginTop: 16 }}>From single-booth installations to multi-site rollouts across Europe, we bring the same precision, care and expertise to every project.</p>
              <div className="about-sectors">
                {['Automotive', 'Aerospace', 'Industrial', 'Marine', 'Rail', 'Motorsport'].map(s => (
                  <span key={s} className="sector-pill">{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/about/company" className="btn btn-ghost-ui">Our Story</Link>
              </div>
            </div>
            <div className="about-img rv d2">
              <img src="/media/about-todd.jpg" alt="Todd Engineering workshop" />
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      {articles.length > 0 && (
        <section className="sec" id="news">
          <div className="w-1300">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
              <div>
                <p className="s-lbl rv">Latest News</p>
                <h2 className="s-h2 rv d1">Stay up to date.</h2>
              </div>
              <Link href="/news" className="cat-view-all rv">All Articles</Link>
            </div>
            <div className="news-grid">
              {articles.map((a: any, i: number) => (
                <Link key={a.id} href={`/news/${a.slug}`} className={`news-card rv d${i}`}>
                  <div className="news-thumb">
                    {a.cover_image_url
                      ? <img src={a.cover_image_url} alt={a.title} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }}></div>
                    }
                  </div>
                  <div className="news-body">
                    <p className="news-tag">{a.category || 'News'}</p>
                    <h3 className="news-title">{a.title}</h3>
                    {a.excerpt && <p className="news-excerpt">{a.excerpt}</p>}
                    {a.published_at && (
                      <p className="news-date">{new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-bg" style={{ backgroundImage: 'url(/media/cta-bg.jpg)' }}></div>
        <div className="cta-grad"></div>
        <div className="cta-content rv">
          <p className="cta-eyebrow">Start your spraybooth journey</p>
          <h2 className="cta-h2">Talk with our team of<br />expert engineers.</h2>
          <div className="cta-btns">
            <button className="btn btn-cta btn-lg" data-quote="Get in Touch">Get in Touch</button>
            <Link href="/zeus-xr" className="btn btn-ghost btn-lg">Explore Zeus XR</Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
