'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

export default function ArticleElectricSpraybooth() {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <section className="art-hero">
        <div className="art-hero-bg" style={{ backgroundImage: "url('/media/isolated-booth.jpg')" }} />
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">Product Launch</div>
          <h1 className="art-h1">The launch of our electric<br />spraybooth powered by<br />A.I. robotics</h1>
          <p className="art-meta">April 2026 &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      <div className="art-body rv">
        <p className="art-lead">After years of development, Todd Engineering is proud to introduce the Zeus XR — a fully integrated, AI-guided robotic spray finishing system that represents the most significant advance in spraybooth technology in a generation.</p>
        <p className="art-p">The Zeus XR is not an upgrade. It is a new category of machine. Built around an all-electric platform, a 7-axis PG90-E robot arm and a real-time AI vision system, it delivers spray finishing that is faster, cleaner and more consistent than anything that&apos;s come before it.</p>
        <p className="art-p">The development programme has been running in parallel with our core business for several years — driven by a clear belief that the industry was ready for something genuinely different. Not incremental. Not theoretical. A working system, proven in operation, that operators can run from day one.</p>
        <div className="art-quote rv">
          <p className="art-quote-text">&ldquo;We&apos;ve been building spraybooths for over 30 years. The Zeus XR is the product we always knew was possible — and the one the industry has been waiting for.&rdquo;</p>
          <p className="art-quote-attr">Todd Engineering — Founding Team</p>
        </div>
        <p className="art-p">The Zeus XR is available now for order. Each system is designed, manufactured and installed by our own engineering team in Staffordshire — with full commissioning, training and ongoing support included as standard.</p>
        <p className="art-p"><strong>This is the beginning of a new chapter for Todd Engineering</strong> — and for the businesses that choose to operate at the forefront of the industry.</p>
      </div>

      <div className="art-img-full rv">
        <img src="/media/zeus-xr-32.jpg" alt="Zeus XR — Made in Britain" />
        <p className="art-img-caption">Zeus XR — designed, manufactured and installed in Britain by Todd Engineering.</p>
      </div>

      <section className="art-video-sec">
        <div className="art-video-inner rv">
          <div className="art-video-hdr">
            <span className="art-video-lbl">Watch</span>
            <span className="art-video-title">Zeus XR — Explained</span>
          </div>
          <div className="art-video-wrap" onClick={() => setPlaying(true)}>
            {playing ? (
              <iframe className="art-video-iframe" src="https://www.youtube.com/embed/da2caTaIaeA?autoplay=1&rel=0&modestbranding=1" allow="autoplay; fullscreen" allowFullScreen />
            ) : (
              <div className="art-video-overlay" style={{ backgroundImage: "url('/media/isolated-booth.jpg')", backgroundSize: 'cover' }}>
                <button className="art-play-btn" aria-label="Play video">
                  <svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><polygon points="24,18 44,30 24,42" fill="white"/></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="art-related">
        <div className="art-related-inner rv">
          <span className="art-related-lbl">More from Todd Engineering</span>
          <div className="art-related-grid">
            <Link href="/news/zeus-xr-msrt-installation" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/news/msrt-hero.jpeg')" }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Project</span>
                <span className="art-rel-title">Zeus XR installation at MSRT</span>
                <span className="art-rel-date">June 2026</span>
              </div>
            </Link>
            <Link href="/news/car-sos-zeus-xr" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/news/car-sos-thumb.jpeg')" }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Media</span>
                <span className="art-rel-title">Car S.O.S approve of the Zeus XR</span>
                <span className="art-rel-date">May 2026</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
