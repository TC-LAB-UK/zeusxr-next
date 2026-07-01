'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

export default function ArticleCarSOS() {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <section className="art-hero">
        <div className="art-hero-bg" style={{ backgroundImage: "url('/media/news/car-sos-thumb.jpeg')", backgroundPosition: 'center 30%' }} />
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">Media</div>
          <h1 className="art-h1">Car S.O.S approve<br />of the Zeus XR</h1>
          <p className="art-meta">May 2026 &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      <div className="art-body rv">
        <p className="art-lead">The team behind Channel 4&apos;s Car S.O.S visited Todd Engineering to experience the Zeus XR first-hand. What followed was a behind-the-scenes look at the most advanced spray finishing system ever built in Britain.</p>
        <p className="art-p">Car S.O.S has spent years restoring vehicles in traditional bodyshops. So when the crew arrived at our Staffordshire facility and watched the Zeus XR execute a full spray cycle — autonomously, precisely and without compromise — the reaction was immediate.</p>
        <p className="art-p">The visit took the team through the full Zeus XR workflow: from vehicle loading and AI scan, through robotic spray execution and electric curing, to the finished result. No manual intervention. No inconsistency. Just repeatable, professional-grade output.</p>
        <div className="art-quote rv">
          <p className="art-quote-text">&ldquo;We&apos;ve seen a lot of bodyshops. We&apos;ve never seen anything like this. The quality coming out of that booth — it&apos;s another level.&rdquo;</p>
          <p className="art-quote-attr">Car S.O.S Crew — Channel 4</p>
        </div>
        <p className="art-p">The visit included time with our engineering team, who walked through the technology behind the PG90-E robot arm, the AI vision system and the all-electric booth platform. The conversation went well beyond what any of us expected.</p>
        <p className="art-p"><strong>We&apos;re proud to have the Car S.O.S team&apos;s endorsement.</strong> They know what great bodywork looks like — and they recognise what the Zeus XR means for the future of the industry.</p>
      </div>

      <div className="art-img-full rv">
        <div className="art-img-grid">
          <img src="/media/news/car-sos-bts-1.jpeg" alt="Car S.O.S BTS at Todd Engineering" />
          <img src="/media/news/car-sos-bts-2.jpeg" alt="Car S.O.S BTS at Todd Engineering" />
          <img src="/media/news/car-sos-bts-3.jpeg" alt="Car S.O.S BTS at Todd Engineering" />
          <img src="/media/zeus-xr-8.jpg" alt="Zeus XR booth interior" />
        </div>
        <p className="art-img-caption">Behind the scenes — Car S.O.S at Todd Engineering, Staffordshire.</p>
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
              <div className="art-video-overlay" style={{ backgroundImage: "url('/media/zeus-xr-8.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }}>
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
