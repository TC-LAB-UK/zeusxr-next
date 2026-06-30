import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import ZeusXRVideo from '@/components/ZeusXRVideo'

export const metadata: Metadata = {
  title: 'Zeus XR — Robotic Spray Finishing System',
  description: 'Zeus XR is a fully integrated robotic spray finishing system. AI-driven control, OEM precision, 24/7 operation. By Todd Engineering.',
}

const features = [
  { icon: '⚡', title: 'AI-Assisted Control', desc: 'Intelligent spray path optimisation adapts in real-time to deliver perfect finish quality, every cycle.' },
  { icon: '🎯', title: 'OEM-Grade Precision', desc: 'Sub-millimetre repeatability ensures consistent coating thickness across every panel, every time.' },
  { icon: '🕐', title: '24/7 Operation', desc: 'Fully automated workflow enables round-the-clock production with minimal human intervention.' },
  { icon: '🌱', title: 'Reduced Waste', desc: 'Smart material management cuts paint consumption by up to 30% versus conventional spray booths.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Live dashboards and reporting give you complete visibility over cycle times, quality and throughput.' },
  { icon: '🔧', title: 'British Made', desc: 'Designed, manufactured and installed by our in-house team in Staffordshire. Supported for life.' },
]

const specs = [
  { label: 'Cycle Time', value: 'From 12 min' },
  { label: 'Spray Accuracy', value: '±0.5mm' },
  { label: 'Paint Saving', value: 'Up to 30%' },
  { label: 'Uptime', value: '99.2%' },
  { label: 'Operating Hours', value: '24/7' },
  { label: 'Lead Time', value: '12–16 wks' },
]

export default function ZeusXRPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-vid">
          <video autoPlay muted loop playsInline poster="/media/zeus-xr-hero.jpg">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-grad"></div>
        <div className="hero-center">
          <p className="hero-eyebrow">Todd Engineering</p>
          <h1 className="hero-h1">Zeus XR</h1>
          <p className="hero-sub-text">AI-Assisted Robotic Spray System</p>
          <div className="hero-ctas">
            <button className="btn btn-cta btn-lg" data-quote="Zeus XR Enquiry">Get a Quote</button>
            <a href="#overview" className="btn btn-ghost btn-lg">Learn More</a>
          </div>
        </div>
        <div className="hero-bar">
          <div style={{ display: 'flex', gap: 32 }}>
            {[['12 min', 'Cycle time'], ['±0.5mm', 'Spray accuracy'], ['30%', 'Paint saving']].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontSize: 'clamp(20px,2vw,28px)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginTop: 4 }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div className="hero-award">Spray Booth Manufacturer of the Year 2024</div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sec sec-alt" id="overview">
        <div className="w-1100">
          <div className="about-strip">
            <div className="about-body">
              <p className="s-lbl rv">What is Zeus XR?</p>
              <h2 className="s-h2 rv d1">The world&rsquo;s most advanced automated spray finishing system.</h2>
              <p className="s-p rv d2">Zeus XR combines AI-driven robotic control with Todd Engineering&rsquo;s 30 years of spraybooth expertise. The result is a system that delivers OEM-grade finish quality at production scale — consistently, efficiently, and with minimal operator input.</p>
              <p className="s-p rv d3" style={{ marginTop: 16 }}>Whether you&rsquo;re finishing automotive bodies, aerospace components or industrial equipment, Zeus XR delivers unmatched throughput, repeatability and ROI.</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <button className="btn btn-cta" data-quote="Zeus XR Enquiry">Get a Quote</button>
                <Link href="/contact" className="btn btn-ghost-ui">Talk to an Engineer</Link>
              </div>
            </div>
            <div className="about-img rv d2">
              <img src="/media/zeus-xr-overview.jpg" alt="Zeus XR Robotic System" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sec">
        <div className="w-1300">
          <div className="stats-strip">
            {specs.map((s, i) => (
              <div key={s.label} className={`stat-cell rv d${i}`}>
                <div className="stat-num">{s.value}</div>
                <div className="stat-title">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc mw-600">
            <p className="s-lbl rv">Capabilities</p>
            <h2 className="s-h2 rv d1">Everything you need.<br />Nothing you don&rsquo;t.</h2>
          </div>
          <div className="res-grid" style={{ marginTop: 56 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`res-card rv d${i % 3}`}>
                <div className="res-icon">
                  <span style={{ fontSize: 28 }}>{f.icon}</span>
                </div>
                <div className="res-label">Feature</div>
                <div className="res-title">{f.title}</div>
                <p className="res-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec">
        <div className="w-1300">
          <div className="tc mw-600" style={{ marginBottom: 48 }}>
            <p className="s-lbl rv">In action</p>
            <h2 className="s-h2 rv d1">See Zeus XR<br />perform.</h2>
          </div>
          <ZeusXRVideo />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-bg" style={{ backgroundImage: 'url(/media/zeus-xr-hero.jpg)' }}></div>
        <div className="cta-grad"></div>
        <div className="cta-content rv">
          <p className="cta-eyebrow">Ready to transform your operation?</p>
          <h2 className="cta-h2">Request a Zeus XR<br />demonstration.</h2>
          <div className="cta-btns">
            <button className="btn btn-cta btn-lg" data-quote="Zeus XR Demo Request">Request a Demo</button>
            <Link href="/contact" className="btn btn-ghost btn-lg">Talk to an Engineer</Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
