'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

export default function ArticlePaintGo() {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <section className="art-hero">
        <div className="art-hero-bg" style={{ backgroundImage: "url('/media/robot-image.jpg')", backgroundPosition: 'center 40%' }} />
        <div className="art-hero-grad" />
        <div className="art-hero-content">
          <div className="art-cat">Partnership</div>
          <h1 className="art-h1">Todd Engineering: exclusive<br />UK distributor of PaintGo<br />robotic technology</h1>
          <p className="art-meta">March 2026 &nbsp;·&nbsp; Todd Engineering</p>
        </div>
      </section>

      <div className="art-body rv">
        <p className="art-lead">Todd Engineering is proud to announce that we are the exclusive UK distributor of PaintGo&apos;s AI-assisted robotic spray technology — the same system that powers the robot at the heart of our Zeus XR spraybooth.</p>
        <p className="art-p">PaintGo is a pioneering robotics company specialising in AI-driven spray finishing systems for the automotive refinishing industry. Their flagship robot, the <strong>PG90-E</strong>, is a seven-axis industrial spray robot purpose-built for bodyshop environments — compatible with SATA, IWATA and 3M systems, supporting waterborne and 2K materials, and designed to deliver a consistent, high-quality finish on every single panel.</p>
        <p className="art-p">Todd Engineering has secured the exclusive rights to install, distribute and support PaintGo&apos;s technology across the United Kingdom. This means that if you want access to PaintGo&apos;s robot and AI platform in the UK, there is only one route in: <strong>Todd Engineering</strong>.</p>
        <div className="art-quote rv">
          <p className="art-quote-text">&ldquo;PaintGo&apos;s robot is the most advanced spray finishing system we&apos;ve seen — and integrating it exclusively into the Zeus XR is what makes the booth genuinely unlike anything else on the market. We&apos;re not reselling a product. We&apos;re delivering a complete, engineered system.&rdquo;</p>
          <p className="art-quote-attr">Todd Engineering — Management Team</p>
        </div>
        <p className="art-p">The PaintGo robot is not an optional add-on — it is built into the Zeus XR as a fully integrated, co-engineered system. The booth, the robot, the AI software and the commissioning process are all designed to work together from day one. Every Zeus XR is specified, installed and commissioned by Todd Engineering&apos;s own team, directly from our Staffordshire facility.</p>
        <p className="art-p">This exclusive arrangement positions the Zeus XR as the only spraybooth in the UK market with access to PaintGo&apos;s robotics platform — giving Todd Engineering customers a significant technological advantage over any competitor system currently available.</p>
        <p className="art-p"><strong>To enquire about the Zeus XR and the PaintGo robotic system, contact Todd Engineering directly.</strong> Our team will manage every stage from site survey and system specification through to installation, training and ongoing support.</p>
      </div>

      <div className="art-img-full rv">
        <img src="/media/isolated-booth.jpg" alt="Zeus XR — integrating PaintGo's AI robotic technology exclusively in the UK" />
        <p className="art-img-caption">The Zeus XR spraybooth — the only route to PaintGo&apos;s robotic AI technology in the UK.</p>
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
              <div className="art-video-overlay" style={{ backgroundImage: "url('/media/robot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}>
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
          <div className="art-related-grid cols-3">
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
