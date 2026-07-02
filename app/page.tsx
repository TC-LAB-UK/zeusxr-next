import { supabase, ORG_ID } from '@/lib/supabase'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Carousel from '@/components/Carousel'
import IndustriesSection from '@/components/IndustriesSection'
import ZXRVideoScript from '@/components/ZXRVideoScript'

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

// Local image fallbacks keyed by slug
const localImages: Record<string, string> = {
  'zeus-xr': '/media/zeus-xr-card.jpg',
  'zeus-8000': '/media/zeus-8000.png',
  'zeus-8000-series': '/media/zeus-8000.png',
  'olympian-1000': '/media/olympian-1000.jpg',
  'olympian-1000-series': '/media/olympian-1000.jpg',
  'poseidon': '/media/poseidon.jpg',
  'spartan-2000': '/media/spartan.png',
  'spartan-2000-series': '/media/spartan.png',
  'titan-cv': '/media/titan.jpg',
  'titan-cv-series': '/media/titan.jpg',
}

const staticNewsItems = [
  {
    href: '/news/todd-engineering-rupes-partnership',
    thumbBg: '#E31E24' as string | undefined,
    thumbImg: undefined as string | undefined,
    cat: 'Partnership',
    date: 'June 2026',
    title: 'Todd Engineering partners with RUPES for complete dust extraction solutions',
    excerpt: 'RUPES dust extraction and air purification technology will now be available as part of our ZEUS spraybooth preparation room packages — a complete prep-to-paint solution.',
  },
  {
    href: '/news/zeus-xr-msrt-installation',
    thumbBg: undefined as string | undefined,
    thumbImg: '/media/news/msrt-zeus-xr.jpeg' as string | undefined,
    cat: 'Project',
    date: 'June 2026',
    title: 'Zeus XR installation at MSRT',
    excerpt: "A full Zeus XR system has been commissioned at MSRT's facility, delivering AI-guided robotic spraying capability to one of the UK's leading refinishing centres.",
  },
  {
    href: '/news/car-sos-zeus-xr',
    thumbBg: undefined as string | undefined,
    thumbImg: '/media/news/car-sos.jpeg' as string | undefined,
    cat: 'Media',
    date: 'May 2026',
    title: 'Car S.O.S approve of the Zeus XR',
    excerpt: "The team at Channel 4's Car S.O.S got a first-hand look at the Zeus XR and came away impressed with its precision, speed and zero-compromise finish quality.",
  },
]

export default async function Home() {
  const [products, articles, caseStudies] = await Promise.all([
    getProducts(),
    getArticles(),
    getCaseStudies(),
  ])

  // Use Supabase articles if available, otherwise fall back to static
  const newsItems = articles.length > 0 ? null : staticNewsItems

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-vid">
          <video autoPlay muted loop playsInline poster="/media/zeus-xr-8.jpg">
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
            <div className="hero-logo-wrap">
              <div className="hero-logo-track">
                <img src="https://amalgam-models.co.uk/wp-content/uploads/2016/08/amalgam-logo.png" alt="Amalgam" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/RMD_Kwikform_logo.svg" alt="RMD Kwikform" />
                <img src="https://autolux.uk.com/wp-content/uploads/autolux_body_paint_full-01.svg" alt="AutoLux" />
                <img src="https://www.jetglow.co.uk/media/com_sppagebuilder/placeholder/full-logo_0e182f_blue.png" alt="Jetglow" />
                <img src="https://www.pjrhodes.co.uk/files/pages/logo.png" alt="Rhodes" />
                {/* Duplicates for seamless loop */}
                <img src="https://amalgam-models.co.uk/wp-content/uploads/2016/08/amalgam-logo.png" alt="Amalgam" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/RMD_Kwikform_logo.svg" alt="RMD Kwikform" />
                <img src="https://autolux.uk.com/wp-content/uploads/autolux_body_paint_full-01.svg" alt="AutoLux" />
                <img src="https://www.jetglow.co.uk/media/com_sppagebuilder/placeholder/full-logo_0e182f_blue.png" alt="Jetglow" />
                <img src="https://www.pjrhodes.co.uk/files/pages/logo.png" alt="Rhodes" />
              </div>
            </div>
          </div>
          <div className="hero-award">Spray Booth Manufacturer of the Year 2024</div>
        </div>
      </section>

      {/* ── PRODUCT CATALOGUE ── */}
      <section className="catalogue-sec" id="products">
        <div className="catalogue-header">
          <div className="catalogue-header-left">
            <p className="s-lbl">Our Spraybooth Systems</p>
            <h2>Discover our catalogue</h2>
          </div>
          <div className="catalogue-controls">
            <button className="cat-arrow" id="catPrev" aria-label="Previous">
              <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
            <button className="cat-arrow" id="catNext" aria-label="Next">
              <svg viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
            </button>
            <Link href="/products" className="cat-view-all">View all</Link>
          </div>
        </div>

        <Carousel>
          {/* Zeus XR — always first */}
          <div className="cat-card">
            <Link href="/zeus-xr" className="cat-card-link" aria-label="Explore Zeus XR"></Link>
            <div className="cat-render" style={{ padding: 0 }}>
              <span className="cat-render-badge">New — AI Robotic</span>
              <img src="/media/zeus-xr-card.jpg" alt="Zeus XR" draggable={false} style={{ objectFit: 'cover', mixBlendMode: 'normal' }} />
            </div>
            <div className="cat-card-body-wrap">
              <div className="cat-eyebrow">The Future of Spray Finishing</div>
              <div className="cat-title">Zeus XR</div>
              <p className="cat-desc">Booth. Robot. AI. The world&rsquo;s most advanced automated spray finishing system. Designed and built in Britain.</p>
              <div className="cat-actions">
                <Link href="/zeus-xr" className="cat-btn-primary">Learn More</Link>
                <button className="cat-btn-secondary" data-quote="Quick Quote">Quick Quote</button>
              </div>
            </div>
          </div>

          {/* Dynamic products from Supabase, with local image fallbacks */}
          {products
            .filter((p: any) => p.slug !== 'zeus-xr')
            .map((p: any) => {
              const img = p.cover_image_url || localImages[p.slug] || null
              return (
                <div key={p.id} className="cat-card">
                  <Link href={`/products/${p.slug}`} className="cat-card-link" aria-label={p.name}></Link>
                  <div className="cat-render">
                    {img
                      ? <img src={img} alt={p.name} draggable={false} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--s2)' }} />
                    }
                  </div>
                  <div className="cat-card-body-wrap">
                    <div className="cat-eyebrow">Todd Engineering</div>
                    <div className="cat-title">{p.name}</div>
                    <p className="cat-desc">{p.tagline || 'Premium spraybooth technology, engineered for performance.'}</p>
                    <div className="cat-actions">
                      <Link href={`/products/${p.slug}`} className="cat-btn-primary">Learn More</Link>
                      <button className="cat-btn-secondary" data-quote="Quick Quote">Quick Quote</button>
                    </div>
                  </div>
                </div>
              )
            })
          }

          {/* Static fallback cards if Supabase returns nothing */}
          {products.filter((p: any) => p.slug !== 'zeus-xr').length === 0 && (
            <>
              {[
                { slug: 'zeus-8000', img: '/media/zeus-8000.png', eyebrow: "UK's #1 All Electric Spray Booth", title: 'Zeus 8000 Series', desc: 'Far infrared curing, fully electric operation and intelligent control — engineered to revolutionise automotive refinishing.' },
                { slug: 'olympian-1000', img: '/media/olympian-1000.jpg', eyebrow: 'Performance at Every Level', title: 'Olympian 1000 Series', desc: 'Robust construction, advanced LED lighting and efficient airflow. Ideal for start-ups and lower throughput operations.' },
                { slug: 'poseidon', img: '/media/poseidon.jpg', eyebrow: 'High-Specification Finishing', title: 'Poseidon', desc: 'Intelligent temperature control, Hydra-cure™ water-based curing and energy-saving automated operation.' },
                { slug: 'spartan-2000', img: '/media/spartan.png', eyebrow: 'Compact. Capable. Built to Last.', title: 'Spartan 2000 Series', desc: 'A robust, no-compromise spraybooth designed for demanding environments. Reliable performance at a competitive price point.' },
                { slug: 'titan-cv', img: '/media/titan.jpg', eyebrow: 'Built for Commercial Vehicles', title: 'Titan CV Series', desc: 'Fully customisable layout and dimensions. Engineered for large commercial vehicles and industrial refinishing processes.' },
              ].map(p => (
                <div key={p.slug} className="cat-card">
                  <Link href={`/products/${p.slug}`} className="cat-card-link" aria-label={p.title}></Link>
                  <div className="cat-render">
                    <img src={p.img} alt={p.title} draggable={false} />
                  </div>
                  <div className="cat-card-body-wrap">
                    <div className="cat-eyebrow">{p.eyebrow}</div>
                    <div className="cat-title">{p.title}</div>
                    <p className="cat-desc">{p.desc}</p>
                    <div className="cat-actions">
                      <Link href={`/products/${p.slug}`} className="cat-btn-primary">Learn More</Link>
                      <button className="cat-btn-secondary" data-quote="Quick Quote">Quick Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </Carousel>
      </section>

      {/* ── ELECTRIC PLATFORM ── */}
      <section className="elec-plat">
        <div className="elec-plat-inner">
          <div className="elec-hd">
            <div className="elec-eyebrow">Trusted by Industry Leaders</div>
            <h2 className="elec-h2">The shift to electric is happening.<br />AI robotic automation is next.</h2>
            <p className="elec-sub">Leading operations across automotive, aerospace and industrial finishing have already made the move. Two ways in. One platform. Choose your entry point.</p>
            <div className="elec-logos-row">
              <img src="/brand/koenigsegg.png" alt="Koenigsegg" className="elec-logo-slot" style={{ height: 52 }} />
              <img src="/brand/ms-rt.webp" alt="MS-RT" className="elec-logo-slot" style={{ height: 48 }} />
            </div>
          </div>

          <div className="elec-cards">
            <div className="elec-card elec-card-xr">
              <div className="elec-card-img-wrap">
                <img src="/media/zeus-xr-card.jpg" alt="Zeus XR — AI Robotic Spray System" />
              </div>
              <div className="elec-card-body">
                <span className="elec-card-badge">The Booth + Robot + AI</span>
                <div className="elec-card-wordmark">Zeus XR</div>
                <h3 className="elec-card-title">Powered by AI robotics.</h3>
                <p className="elec-card-desc">Zeus XR pairs the electric platform with a 6-axis industrial robot and AI vision system. It programs itself to any vehicle, holds OEM-grade consistency, and never has a bad shift.</p>
                <ul className="elec-card-features">
                  <li>6-axis industrial spray robot</li>
                  <li>AI vision — self-programs to any vehicle</li>
                  <li>Patented FIR heating and airflow</li>
                  <li>30% more throughput. 50% less rework.</li>
                </ul>
                <div className="elec-card-ctas">
                  <Link href="/zeus-xr" className="btn btn-cta">Explore Zeus XR</Link>
                  <button className="btn-ghost-dk" data-quote="Zeus XR — Book a Demo">Book a Demo</button>
                </div>
              </div>
            </div>

            <div className="elec-card">
              <div className="elec-card-img-wrap">
                <img src="/media/zeus-8000.png" alt="Zeus 8000 — All Electric Spray Booth" />
              </div>
              <div className="elec-card-body">
                <span className="elec-card-badge elec-card-badge-std">Not ready for the robot?</span>
                <div className="elec-card-wordmark">Zeus 8000</div>
                <h3 className="elec-card-title">Start with the best booth in the industry.</h3>
                <p className="elec-card-desc">No gas. No compromise. The Zeus 8000 is the same electric platform — without the robot. Still the most advanced booth most bodyshops have ever seen.</p>
                <ul className="elec-card-features">
                  <li>100% electric — zero fossil fuels</li>
                  <li>Patented FIR heating and airflow</li>
                  <li>Hydra-Cure™ water-based optimisation</li>
                  <li>Robot-ready when you are</li>
                </ul>
                <div className="elec-card-ctas">
                  <Link href="/products/zeus-8000" className="btn btn-cta">Explore Zeus 8000</Link>
                  <button className="btn-ghost-dk" data-quote="Zeus 8000 — Quick Quote">Get a Quote</button>
                </div>
              </div>
            </div>
          </div>

          <div className="elec-pillars">
            <div className="elec-pillar">
              <svg className="elec-pillar-icon" viewBox="0 0 24 24"><polyline points="13 2 4.5 13 11 13 9 22 18.5 11 12 11 13 2"/></svg>
              <div className="elec-pillar-n">100<span>%</span></div>
              <div className="elec-pillar-l">Electric</div>
            </div>
            <div className="elec-pillar">
              <svg className="elec-pillar-icon" viewBox="0 0 24 24"><path d="M12 2c0 5-5 7-5 12a5 5 0 0 0 10 0c0-5-5-7-5-12z"/><path d="M10 15a2 2 0 0 0 4 0"/></svg>
              <div className="elec-pillar-n">FIR</div>
              <div className="elec-pillar-l">Infrared Curing</div>
            </div>
            <div className="elec-pillar">
              <svg className="elec-pillar-icon" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"/><path d="M3.93 13c-.11.64-.18 1.31-.18 2 0 4.97 4.03 9 9 9"/><path d="M12 13C12 8.03 7.97 4 3 4c0 4.97 4.03 9 9 9z"/></svg>
              <div className="elec-pillar-n">40<span>%</span></div>
              <div className="elec-pillar-l">Less Energy</div>
            </div>
            <div className="elec-pillar">
              <svg className="elec-pillar-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <div className="elec-pillar-n">GB</div>
              <div className="elec-pillar-l">Made in Britain</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZEUS XR FEATURE ── */}
      <section className="zxr-feature">
        <div className="zxr-inner">
          <div className="zxr-hd">
            <img src="/brand/paintgo-lockup.png" alt="Todd Engineering x PaintGo" className="zxr-logo" />
            <h2 className="zxr-h2">Spray finishing,<br />without the variables.</h2>
            <p className="zxr-p">Zeus XR brings the booth, robotics and AI into one coordinated system. Every variable controlled. Every finish consistent — the kind of results your best operators deliver on their best days, now the standard for every job.</p>
            <div className="zxr-stats">
              <div className="zxr-stat">
                <div className="zxr-stat-n">30%↑</div>
                <div className="zxr-stat-l">More throughput</div>
              </div>
              <div className="zxr-stat">
                <div className="zxr-stat-n">50%↓</div>
                <div className="zxr-stat-l">Less rework</div>
              </div>
              <div className="zxr-stat">
                <div className="zxr-stat-n">35%↓</div>
                <div className="zxr-stat-l">Paint waste reduction</div>
              </div>
            </div>
            <div className="zxr-btns">
              <Link href="/zeus-xr" className="btn btn-cta btn-lg">Explore Zeus XR</Link>
              <button className="btn btn-ghost-ui btn-lg" data-quote="Zeus XR — Book a Demo">Book a Demo</button>
            </div>
          </div>
          <div className="zxr-video-wrap" id="zxrVideoWrap" style={{ marginTop: 56 }}>
            <img src="/media/robot-image.jpg" alt="Zeus XR robot spraying" className="zxr-thumb" />
            <button className="zxr-play" id="zxrPlayBtn" aria-label="Play Zeus XR video">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39" stroke="rgba(255,255,255,.35)" strokeWidth="1"/>
                <polygon points="33,25 57,40 33,55" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="about-strip rv">
            <div className="about-body">
              <div className="s-lbl">About Todd Engineering</div>
              <h2 className="s-h2">Engineering expertise<br />at our core.</h2>
              <p className="s-p">For over 30 years, Todd Engineering has been designing, manufacturing and installing world-class spraybooth systems for some of the UK&rsquo;s most demanding industries. From single-bay bodyshop installations to large-scale international projects, we deliver engineering excellence at every scale.</p>
              <div style={{ marginTop: 32 }}>
                <Link href="/about/company" className="btn btn-cta">Our Story</Link>
              </div>
            </div>
            <div className="about-img">
              <img src="/media/heritage-todd.jpg" alt="Todd Engineering — heritage" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <IndustriesSection />

      {/* ── STATS ── */}
      <section className="sec" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="w-1300">
          <div className="stats-strip rv">
            <div className="stat-cell">
              <div className="stat-num">30<span>+</span></div>
              <div className="stat-title">Years of Engineering Excellence</div>
              <div className="stat-note">Designing and building premium spraybooth systems since 1993.</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">10k<span>+</span></div>
              <div className="stat-title">Spraybooths Installed</div>
              <div className="stat-note">Installed across automotive, aerospace and industrial sectors.</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">100<span>+</span></div>
              <div className="stat-title">Bespoke Installations</div>
              <div className="stat-note">Large-scale, turnkey projects delivered globally.</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">25<span>+</span></div>
              <div className="stat-title">Engineers Nationwide</div>
              <div className="stat-note">Installation, servicing and support teams across the UK.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="trusted-sec">
        <p className="trusted-label">Trusted by</p>
        <div className="logos-track-wrap">
          <div className="logos-track">
            <img src="https://amalgam-models.co.uk/wp-content/uploads/2016/08/amalgam-logo.png" alt="Amalgam Models" loading="lazy" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/RMD_Kwikform_logo.svg" alt="RMD Kwikform" loading="lazy" />
            <img src="https://www.angusmackinnon.co.uk/img-src/_themev2-angusmackinnon-5224/theme/logo.1780043768.png" alt="Angus MacKinnon" loading="lazy" />
            <img src="https://autolux.uk.com/wp-content/uploads/autolux_body_paint_full-01.svg" alt="AutoLux" loading="lazy" />
            <img src="https://www.jetglow.co.uk/media/com_sppagebuilder/placeholder/full-logo_0e182f_blue.png" alt="Jetglow" loading="lazy" />
            <img src="https://www.pjrhodes.co.uk/files/pages/logo.png" alt="Rhodes Accident Repair" loading="lazy" />
            {/* Duplicates for seamless loop */}
            <img src="https://amalgam-models.co.uk/wp-content/uploads/2016/08/amalgam-logo.png" alt="Amalgam Models" loading="lazy" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/RMD_Kwikform_logo.svg" alt="RMD Kwikform" loading="lazy" />
            <img src="https://www.angusmackinnon.co.uk/img-src/_themev2-angusmackinnon-5224/theme/logo.1780043768.png" alt="Angus MacKinnon" loading="lazy" />
            <img src="https://autolux.uk.com/wp-content/uploads/autolux_body_paint_full-01.svg" alt="AutoLux" loading="lazy" />
            <img src="https://www.jetglow.co.uk/media/com_sppagebuilder/placeholder/full-logo_0e182f_blue.png" alt="Jetglow" loading="lazy" />
            <img src="https://www.pjrhodes.co.uk/files/pages/logo.png" alt="Rhodes Accident Repair" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="sec sec-alt" id="solutions">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Our Solutions</div>
            <h2 className="s-h2 mw-600">From first conversation<br />to ongoing support.</h2>
          </div>
          <div className="sol-grid">
            {[
              { href: '/solutions/installation', title: 'Installation', desc: 'Full project management from site survey through to commissioning — delivered on time, on budget.', bg: '/media/zeus-xr-21.jpg', pos: 'center 30%' },
              { href: '/solutions/design-build', title: 'Design & Build', desc: 'Bespoke engineering solutions tailored to your exact operational requirements and site constraints.', bg: '/media/zeus-xr-8.jpg', pos: 'center 40%' },
              { href: '/solutions/project-management', title: 'Project Management', desc: 'End-to-end delivery for complex, multi-stage industrial projects with dedicated engineering oversight.', bg: '/media/zeus-xr-28.jpg', pos: 'center' },
              { href: '/solutions/maintenance', title: 'Servicing', desc: 'Nationwide servicing, planned maintenance contracts and rapid response support to keep you operational.', bg: '/media/zeus-xr-26.jpg', pos: 'center' },
            ].map((s, i) => (
              <Link key={s.href} href={s.href} className={`sol-card rv d${i}`}>
                <div className="sol-bg" style={{ backgroundImage: `url(${s.bg})`, backgroundPosition: s.pos }}></div>
                <div className="sol-overlay">
                  <div className="sol-eyebrow">Solutions</div>
                  <h3 className="sol-title">{s.title}</h3>
                  <p className="sol-desc">{s.desc}</p>
                  <span className="sol-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="sec" id="projects">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Bespoke Projects</div>
            <h2 className="s-h2 mw-600">Where engineering meets ambition.</h2>
          </div>
          <div className="proj-grid">
            {caseStudies.length > 0 ? caseStudies.map((cs: any, i: number) => (
              <Link key={cs.id} href={`/projects/${cs.slug}`} className={`proj-card rv d${i}`}>
                <div className="proj-bg" style={cs.cover_image_url ? { backgroundImage: `url(${cs.cover_image_url})` } : { background: 'var(--s2)' }}></div>
                <div className="proj-overlay">
                  <div className="proj-sector">{cs.sector || 'Case Study'}</div>
                  <div className="proj-title">{cs.title}</div>
                  <div className="proj-sub">{cs.client_name}</div>
                </div>
              </Link>
            )) : (
              <>
                <Link href="/projects/case-study-1" className="proj-card rv">
                  <div className="proj-bg" style={{ backgroundImage: "url('/media/windfarm.png')", backgroundPosition: 'center' }}></div>
                  <div className="proj-overlay">
                    <div className="proj-sector">Renewable Energy</div>
                    <div className="proj-title">UK Offshore Wind Farm</div>
                    <div className="proj-sub">Seah Wind — 18-month installation programme</div>
                  </div>
                </Link>
                <Link href="/projects/case-study-2" className="proj-card rv d1">
                  <div className="proj-bg" style={{ backgroundImage: "url('/media/aerospace.png')", backgroundPosition: 'center' }}></div>
                  <div className="proj-overlay">
                    <div className="proj-sector">Aerospace</div>
                    <div className="proj-title">Dubai Aerospace Facility</div>
                    <div className="proj-sub">International export — bespoke design &amp; build</div>
                  </div>
                </Link>
                <Link href="/projects/case-study-3" className="proj-card rv d2">
                  <div className="proj-bg" style={{ backgroundImage: "url('/media/amalgam.jpg')", backgroundPosition: 'center' }}></div>
                  <div className="proj-overlay">
                    <div className="proj-sector">Automotive</div>
                    <div className="proj-title">Amalgam</div>
                    <div className="proj-sub">Specialist refinishing facility — full turnkey</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }} className="rv">
            <Link href="/projects" className="btn btn-ghost-ui">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── GREEN FUTURE ── */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="about-strip rv">
            <div className="about-img">
              <img src="/media/greener-future.jpg" alt="Greener spraybooth technology" />
            </div>
            <div className="about-body">
              <div className="s-lbl">Sustainability</div>
              <h2 className="s-h2">Driving towards<br />a greener future.</h2>
              <p className="s-p">The spraybooth industry is changing. Tightening emissions regulations, rising energy costs and growing environmental responsibility are pushing bodyshops to rethink how they operate. Todd Engineering is ahead of the curve — engineering systems that are cleaner, more efficient and built for the standards of tomorrow.</p>
              <p className="s-p" style={{ marginTop: 16 }}>From fully electric operation and reduced paint consumption to AI-optimised spray paths that cut waste at every pass — sustainability isn&rsquo;t an add-on. It&rsquo;s engineered in from the start.</p>
              <div className="about-sectors" style={{ marginTop: 24 }}>
                <span className="sector-pill">All Electric Systems</span>
                <span className="sector-pill">25% Paint Reduction</span>
                <span className="sector-pill">Reduced Emissions</span>
                <span className="sector-pill">Energy Efficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MADE IN BRITAIN ── */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="about-strip rv">
            <div className="about-body">
              <div className="s-lbl">Heritage</div>
              <h2 className="s-h2">Designed &amp; built<br />in Britain.</h2>
              <p className="s-p">Every system that leaves Todd Engineering is conceived, engineered and manufactured in the United Kingdom. From the first design consultation to final commissioning, our team of British engineers are with you at every stage.</p>
              <p className="s-p" style={{ marginTop: 16 }}>It&rsquo;s not just a badge — it&rsquo;s a commitment to quality, craftsmanship and accountability. When something needs attention, we&rsquo;re not on the other side of the world. We&rsquo;re here.</p>
              <div className="about-sectors" style={{ marginTop: 24 }}>
                <span className="sector-pill">Made in Britain</span>
                <span className="sector-pill">30+ Years</span>
                <span className="sector-pill">Staffordshire, UK</span>
                <span className="sector-pill">British Engineering</span>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/about/company" className="btn btn-cta">Our Story</Link>
              </div>
            </div>
            <div className="about-img">
              <img src="/media/zeus-xr-32.jpg" alt="Made in Britain — Todd Engineering" style={{ objectPosition: 'center 30%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <div className="partners rv">
        <div className="partners-inner">
          <span className="p-lbl">Partners</span>
          <div className="p-sep"></div>
          <img src="/brand/logo.png" alt="Todd Engineering" className="p-logo" />
          <img src="/brand/paintgo-lockup.png" alt="PaintGo" className="p-logo" />
          <img src="/brand/anest-iwata.png" alt="Anest Iwata" className="p-logo" />
        </div>
      </div>

      {/* ── RESOURCES ── */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Resources</div>
            <h2 className="s-h2 mw-600">Knowledge &amp; expertise, freely shared.</h2>
          </div>
          <div className="res-grid">
            <a href="#" className="res-card rv">
              <div className="res-icon"><svg viewBox="0 0 32 32"><rect x="5" y="3" width="22" height="26" rx="2"/><line x1="10" y1="10" x2="22" y2="10"/><line x1="10" y1="15" x2="22" y2="15"/><line x1="10" y1="20" x2="18" y2="20"/></svg></div>
              <div className="res-label">Guide</div>
              <div className="res-title">The Green Bodyshop</div>
              <p className="res-desc">A practical guide to reducing emissions, energy use and waste in modern automotive refinishing.</p>
            </a>
            <a href="#" className="res-card rv d1">
              <div className="res-icon"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13"/><polyline points="16 10 16 16 21 19"/></svg></div>
              <div className="res-label">Resource Hub</div>
              <div className="res-title">Sustainability &amp; Compliance Library</div>
              <p className="res-desc">Technical documentation, COSHH guidance and environmental compliance resources for bodyshop operators.</p>
            </a>
            <a href="#" className="res-card rv d2">
              <div className="res-icon"><svg viewBox="0 0 32 32"><path d="M16 3l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/></svg></div>
              <div className="res-label">Skills &amp; Training</div>
              <div className="res-title">British Engineering &amp; Skills Library</div>
              <p className="res-desc">Training resources, operator guides and technical support materials for Todd Engineering customers.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="sec" id="news">
        <div className="w-1300">
          <div className="sec-hd">
            <div>
              <div className="s-lbl">News</div>
              <h2 className="s-h2 mw-600">Latest from Todd Engineering.</h2>
            </div>
            <Link href="/news" className="btn btn-ghost" style={{ alignSelf: 'flex-end', marginBottom: 6 }}>View all news →</Link>
          </div>
          <div className="news-grid">
            {articles.length > 0 ? articles.map((a: any, i: number) => (
              <Link key={a.id} href={`/news/${a.slug}`} className={`news-card rv d${i}`}>
                <div className="news-thumb-wrap">
                  <div className="news-thumb-inner" style={a.cover_image_url ? { backgroundImage: `url(${a.cover_image_url})` } : { background: 'var(--s2)' }}></div>
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span className="news-cat">{a.category || 'News'}</span>
                    {a.published_at && <span style={{ fontSize: 11, color: 'var(--t3)' }}>{new Date(a.published_at).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>}
                  </div>
                  <div className="news-title">{a.title}</div>
                  {a.excerpt && <p className="news-excerpt">{a.excerpt}</p>}
                  <span className="news-link">Read more →</span>
                </div>
              </Link>
            )) : staticNewsItems.map((item, i) => (
              <Link key={item.href} href={item.href} className={`news-card rv d${i}`}>
                <div className="news-thumb-wrap">
                  {item.thumbImg
                    ? <div className="news-thumb-inner" style={{ backgroundImage: `url(${item.thumbImg})` }}></div>
                    : <div className="news-thumb-inner" style={{ background: item.thumbBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: '#fff', letterSpacing: -1 }}>RUPES<sup style={{ fontSize: '0.4em', verticalAlign: 'super', fontStyle: 'normal' }}>®</sup></span>
                      </div>
                  }
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span className="news-cat">{item.cat}</span>
                    <span style={{ fontSize: 11, color: 'var(--t3)' }}>{item.date}</span>
                  </div>
                  <div className="news-title">{item.title}</div>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="news-link">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/news" className="btn btn-sec">View all news</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-sec-clean">
        <div className="cta-content rv" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
          <p className="cta-eyebrow">Start your spraybooth journey</p>
          <h2 className="cta-h2">Talk with our team of<br />expert engineers.</h2>
          <div className="cta-btns">
            <button className="btn btn-cta btn-lg" data-quote="Get in Touch">Get in Touch</button>
            <Link href="/zeus-xr" className="btn btn-ghost btn-lg">Explore Zeus XR</Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
      <ZXRVideoScript />
    </>
  )
}
