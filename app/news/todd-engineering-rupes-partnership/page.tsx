import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function ArticleRupes() {
  return (
    <>
      <section className="art-hero">
        <div className="rupes-hero-logo">
          <span className="rupes-wordmark">RUPES<sup style={{ fontSize: '0.35em', verticalAlign: 'super', fontStyle: 'normal' }}>®</sup></span>
        </div>
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">Partnership</div>
          <h1 className="art-h1">Todd Engineering<br />partners with RUPES</h1>
          <p className="art-meta">June 2026 &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      <div className="art-body rv">
        <p className="art-lead">We&apos;re delighted to announce a new partnership between Todd Engineering and RUPES. As part of our commitment to delivering complete finishing solutions, RUPES dust extraction and air purification technology will now be available as part of our ZEUS spraybooth preparation room packages.</p>
        <p className="art-p">This partnership combines Todd Engineering&apos;s expertise in spraybooths and finishing systems with RUPES&apos; industry-leading dust extraction technology — creating a smarter, cleaner, and more productive working environment from a single supplier.</p>

        <h2 className="art-h2">The result for your bodyshop.</h2>

        <div className="art-benefits">
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12l3 3 5-5"/></svg></div>
            <span className="art-benefit-text">Enhanced dust extraction during sanding and preparation activities</span>
          </div>
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg></div>
            <span className="art-benefit-text">Cleaner and safer working environments for your team</span>
          </div>
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></div>
            <span className="art-benefit-text">Improved product quality and finishing standards</span>
          </div>
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <span className="art-benefit-text">Reduced airborne contaminants and workshop contamination</span>
          </div>
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg></div>
            <span className="art-benefit-text">Increased operational efficiency and productivity</span>
          </div>
          <div className="art-benefit">
            <div className="art-benefit-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <span className="art-benefit-text">A complete preparation-to-paint solution from a single supplier</span>
          </div>
        </div>

        <div className="art-quote rv">
          <p className="art-quote-text">&ldquo;We&apos;re excited about what this partnership means for our customers. The ability to offer a complete, integrated solution — from preparation to finishing — is a significant step forward for the industry.&rdquo;</p>
          <p className="art-quote-attr">Todd Engineering — Management Team</p>
        </div>

        <div className="art-feature-panel rv">
          <span className="art-feature-panel-lbl">Featured Technology</span>
          <span className="art-feature-panel-h">RUPES NIVEUS — Advanced Air Purification</span>
          <span className="art-feature-panel-p">The RUPES NIVEUS range brings advanced air purification capability with ULPA U15 filtration, air quality monitoring, and high-efficiency removal of airborne contaminants — making it a strong complementary solution for preparation and finishing environments where clean air is critical to quality outcomes.</span>
          <div className="art-feature-pills">
            <span className="art-feature-pill">ULPA U15 Filtration</span>
            <span className="art-feature-pill">Air Quality Monitoring</span>
            <span className="art-feature-pill">High-Efficiency Extraction</span>
            <span className="art-feature-pill">ZEUS Prep Room Compatible</span>
            <span className="art-feature-pill">Plug &amp; Play Integration</span>
          </div>
        </div>

        <p className="art-p">We look forward to showcasing these combined solutions in the coming months. If you&apos;d like to learn more about integrating RUPES technology into your ZEUS preparation room package, speak to one of our team.</p>

        <div className="art-tags">
          <span className="art-tag">#ToddEngineering</span>
          <span className="art-tag">#RUPES</span>
          <span className="art-tag">#ZEUS</span>
          <span className="art-tag">#Spraybooths</span>
          <span className="art-tag">#DustExtraction</span>
          <span className="art-tag">#AirPurification</span>
          <span className="art-tag">#OperationalEfficiency</span>
          <span className="art-tag">#Manufacturing</span>
          <span className="art-tag">#Engineering</span>
          <span className="art-tag">#BodyshopTechnology</span>
          <span className="art-tag">#AutoRefinishing</span>
        </div>
      </div>

      <section className="art-related">
        <div className="art-related-inner rv">
          <span className="art-related-lbl">More from Todd Engineering</span>
          <div className="art-related-grid cols-3">
            <Link href="/news/zeus-xr-msrt-installation" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/news/msrt-hero.jpeg')" }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Project</span>
                <span className="art-rel-title">Zeus XR installation at MSRT</span>
                <span className="art-rel-date">June 2026</span>
              </div>
            </Link>
            <Link href="/news/todd-engineering-paintgo-partnership" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/robot-image.jpg')", backgroundPosition: 'center 40%' }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Partnership</span>
                <span className="art-rel-title">Todd Engineering partners with Paint Go</span>
                <span className="art-rel-date">March 2026</span>
              </div>
            </Link>
            <Link href="/news/electric-spraybooth-ai-robotics" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/isolated-booth.jpg')" }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Product Launch</span>
                <span className="art-rel-title">The launch of our electric spraybooth powered by A.I. robotics</span>
                <span className="art-rel-date">April 2026</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
