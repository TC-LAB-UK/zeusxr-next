'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

export default function ArticleMSRT() {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <section className="art-hero">
        <div className="art-hero-bg" style={{ backgroundImage: "url('/media/news/msrt-hero.jpeg')" }} />
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">Project</div>
          <h1 className="art-h1">Zeus XR installation<br />at MSRT</h1>
          <p className="art-meta">June 2026 &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      <div className="art-body rv">
        <p className="art-lead">MSRT — one of the UK&apos;s most respected refinishing operations — has become the latest facility to commission a full Zeus XR system. The installation marks a significant step in the adoption of AI-guided robotic spraying within professional bodyshop environments.</p>
        <p className="art-p">The project involved a complete turnkey installation: site preparation, booth integration, robot commissioning and operator training. Our engineering team worked closely with the MSRT team throughout — ensuring the system was calibrated precisely to their workflow before going live.</p>
        <p className="art-p">The Zeus XR at MSRT operates as a fully integrated finishing system. The PG90-E robot arm executes spray programmes guided by real-time AI vision data, while the electric booth environment maintains optimal temperature and airflow throughout every cycle.</p>
        <div className="art-quote rv">
          <p className="art-quote-text">&ldquo;The Zeus XR has fundamentally changed how we operate. The consistency we&apos;re now achieving on every vehicle — that&apos;s not something you can replicate with manual spraying.&rdquo;</p>
          <p className="art-quote-attr">MSRT — Refinishing Operations</p>
        </div>
        <p className="art-p">Since commissioning, the MSRT team has reported measurable improvements in throughput, finish quality and paint efficiency. The system&apos;s ability to repeat the same spray path — precisely, every time — has removed the variability that&apos;s inherent in manual application.</p>
        <p className="art-p"><strong>This installation represents exactly what Zeus XR is designed for:</strong> a serious operation that demands serious performance. We&apos;re proud to be part of MSRT&apos;s next chapter.</p>
      </div>

      <div className="art-img-full rv">
        <img src="/media/news/msrt-2.jpg" alt="Zeus XR spraybooth installed at MSRT" />
        <p className="art-img-caption">Zeus XR installed at the MSRT facility, Staffordshire.</p>
      </div>

      <div className="art-img-full rv" style={{ paddingBottom: 0 }}>
        <div className="art-img-grid">
          <img src="/media/news/msrt-grid-1.jpeg" alt="PaintGo robot and Ford Ranger inside Zeus XR booth" />
          <img src="/media/news/msrt-grid-2.jpeg" alt="Zeus XR booth interior with Ford Ranger" />
          <img src="/media/news/msrt-grid-3.jpeg" alt="PaintGo robot arm at MSRT" />
          <img src="/media/news/msrt-grid-4.jpeg" alt="Zeus XR robot spray system close-up" />
        </div>
        <p className="art-img-caption">The PaintGo PG90-E robotic system operating inside the Zeus XR at MSRT.</p>
      </div>

      <section className="art-video-sec">
        <div className="art-video-inner rv">
          <div className="art-video-hdr">
            <span className="art-video-lbl">See It In Action</span>
            <span className="art-video-title">The Zeus XR Experience</span>
          </div>
          <div className="art-video-wrap" onClick={() => setPlaying(true)}>
            {playing ? (
              <iframe className="art-video-iframe" src="https://www.youtube.com/embed/da2caTaIaeA?autoplay=1&rel=0&modestbranding=1" allow="autoplay; fullscreen" allowFullScreen />
            ) : (
              <div className="art-video-overlay" style={{ backgroundImage: "url('/media/zeus-xr-25.jpg')", backgroundSize: 'cover' }}>
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
            <Link href="/news/car-sos-zeus-xr" className="art-rel-card">
              <div className="art-rel-thumb" style={{ backgroundImage: "url('/media/news/car-sos-thumb.jpeg')" }} />
              <div className="art-rel-body">
                <span className="art-rel-cat">Media</span>
                <span className="art-rel-title">Car S.O.S approve of the Zeus XR</span>
                <span className="art-rel-date">May 2026</span>
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
