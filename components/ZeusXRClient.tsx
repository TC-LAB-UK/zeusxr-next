'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

/* ── Hotspot data ── */
const hotspots = [
  {
    id: 1, left: '30%', top: '64%', label: 'Control Panel',
    cardImg: '/media/zeus-xr-control-panel.jpg',
    cardTitle: 'Operator Control Panel',
    cardDesc: 'Single-touch interface. Emergency stop, start, and linear track controls — designed for minimal operator input.',
  },
  {
    id: 2, left: '24%', top: '20%', label: 'AI Scanner',
    cardImg: '/media/robot-scanner.jpg',
    cardTitle: 'AI Vehicle Scanner',
    cardDesc: 'Maps vehicle geometry in seconds. Cross-references 4,000+ preloaded profiles to generate precise spray paths automatically.',
  },
  {
    id: 3, left: '70%', top: '50%', label: 'Spray System',
    cardImg: '/media/zeus-xr-spray-system.jpg',
    cardTitle: 'Precision Spray System',
    cardDesc: 'Compatible with SATA, IWATA and 3M guns. Waterborne, solvent and 2K polyurethane. AI-optimised atomisation on every pass.',
  },
  {
    id: 4, left: '21%', top: '85%', label: 'Linear Track',
    cardImg: '/media/zeus-xr-linear-track.jpg',
    cardTitle: 'Linear Track System',
    cardDesc: 'Optimised robot movement range across the full length of the booth. Engineered for maximum coverage and ease of maintenance.',
  },
]

/* ── Feature carousel data ── */
const carouselCards = [
  { bg: '/media/zeus-xr-8.jpg', bgPos: 'center 40%', lbl: 'The Complete System', title: 'Booth. Robot. AI.\nOne Platform.' },
  { bg: '/media/robot-scanner.jpg', bgPos: 'center', lbl: 'AI Vehicle Recognition', title: '4,000+ Models\nPreloaded' },
  { bg: '/media/zeus-xr-28.jpg', bgPos: 'center', lbl: 'Finish Consistency', title: '100% Consistent.\nEvery Vehicle.' },
  { bg: '/media/edit-robot-bg.jpg', bgPos: 'center 40%', lbl: 'PG90-E', title: '7 Axis\nRobotic Arm' },
  { bg: '/media/zeus-xr-32.jpg', bgPos: 'center 30%', lbl: 'Heritage', title: 'Designed &\nBuilt in Britain' },
  { bg: '/media/zeus-xr-main.jpg', bgPos: 'center 45%', lbl: 'Finish Quality', title: 'OEM-level results.\nEvery job.' },
  { bg: '/media/zeus-xr-25.jpg', bgPos: 'center 35%', lbl: 'Engineered for Performance', title: 'Consistent Results.\nEvery Surface.' },
]

/* ── Demo modal form ── */
function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    const fd = new FormData(formRef.current)
    setSending(true)
    try {
      await fetch(SUPABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          org_id: ORG_ID,
          name: fd.get('name'),
          email: fd.get('email'),
          company: fd.get('company') || null,
          phone: fd.get('phone') || null,
          message: fd.get('message') || null,
          source: 'zeus_xr_demo',
          status: 'new',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
    } catch (_) {}
    setSending(false)
    setSent(true)
  }

  useEffect(() => {
    if (!open) { setTimeout(() => { setSent(false) }, 350) }
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {sent ? (
          <div className="mf-success" style={{ display: 'block' }}>
            <svg viewBox="0 0 52 52" fill="none" style={{ width: 52, height: 52, margin: '0 auto 18px', display: 'block' }}>
              <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
              <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>Request sent.</h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--t2)' }}>A member of our team will be in touch shortly to arrange your demo.</p>
            <button className="btn btn-ghost-ui" onClick={onClose} style={{ marginTop: 20 }}>Close</button>
          </div>
        ) : (
          <>
            <div className="s-lbl" style={{ color: 'var(--green)', marginBottom: 10 }}>Todd Engineering</div>
            <div className="modal-title">Book a Live Demo</div>
            <div className="modal-sub">See Zeus XR in action. One of our team will be in touch to arrange a time that works for you.</div>
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mf-row">
                <div className="mf-group">
                  <label htmlFor="demo-name">Full Name <span className="mf-req">*</span></label>
                  <input id="demo-name" name="name" type="text" placeholder="John Smith" required />
                </div>
                <div className="mf-group">
                  <label htmlFor="demo-company">Company <span className="mf-req">*</span></label>
                  <input id="demo-company" name="company" type="text" placeholder="ABC Bodyshop" required />
                </div>
              </div>
              <div className="mf-row">
                <div className="mf-group">
                  <label htmlFor="demo-email">Email <span className="mf-req">*</span></label>
                  <input id="demo-email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="mf-group">
                  <label htmlFor="demo-phone">Phone</label>
                  <input id="demo-phone" name="phone" type="tel" placeholder="+44 7700 000000" />
                </div>
              </div>
              <div className="mf-group">
                <label htmlFor="demo-msg">Anything you&apos;d like us to know?</label>
                <textarea id="demo-msg" name="message" rows={3} placeholder="e.g. current setup, spray bays, timescales…" />
              </div>
              <button type="submit" className="mf-submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send Request'}
              </button>
              <p className="mf-legal">By submitting you agree to be contacted by Todd Engineering. We&apos;ll never share your details.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function ZeusXRClient() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [baPos, setBaPos] = useState(50)
  const baDragging = useRef(false)
  const baRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* ── BA slider ── */
  function baCalc(clientX: number) {
    if (!baRef.current) return
    const rect = baRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setBaPos(pct)
  }
  useEffect(() => {
    const up = () => { baDragging.current = false }
    const move = (e: MouseEvent | TouchEvent) => {
      if (!baDragging.current) return
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      baCalc(x)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [])

  /* ── Carousel ── */
  function scrollCarousel(dir: 'prev' | 'next') {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.fcar-card') as HTMLElement
    const w = card ? card.offsetWidth + 10 : 350
    trackRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
  }

  /* ── YouTube embed ── */
  const [vid1Playing, setVid1Playing] = useState(false)
  const [vid2Playing, setVid2Playing] = useState(false)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-vid">
          <video autoPlay muted loop playsInline poster="/media/zeus-xr-8.jpg">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-grad"></div>
        <div className="hero-center">
          <img src="/brand/zeus-xr-logo-white.png" alt="Zeus XR" className="hero-logo" style={{ width: 'min(320px,52vw)', marginBottom: 28, filter: 'drop-shadow(0 2px 24px rgba(0,0,0,.5))' }} />
          <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Zeus XR — Robotic Spray Finishing System by Todd Engineering</h1>
          <h2 style={{ fontSize: 'clamp(24px,2.6vw,38px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.1, color: '#fff', marginTop: -20, marginBottom: 36 }}>Advanced Spray Finishing Technology</h2>
          <div className="hero-ctas">
            <button className="btn btn-cta btn-lg" onClick={() => setModalOpen(true)}>Book a Live Demo</button>
            <a href="#product" className="btn btn-ghost btn-lg">Explore</a>
          </div>
        </div>
        <div className="hero-bar"></div>
      </section>

      {/* TESLA PRODUCT SECTION */}
      <section className="tesla-sec" id="product">
        <div className="tesla-product">
          <div className="hotspot-explorer">
            <img src="/media/isolated-booth.jpg" alt="Zeus XR robotic spray booth" className="tesla-img" />

            {hotspots.map(hs => (
              <button
                key={hs.id}
                className={`hs-dot${activeHotspot === hs.id ? ' active' : ''}`}
                style={{ left: hs.left, top: hs.top }}
                data-hs={hs.id}
                aria-label={hs.label}
                onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
              >
                <span className="hs-ring"></span>
                <span className="hs-dot-label">{hs.label}</span>
              </button>
            ))}

            {hotspots.map(hs => (
              <div key={hs.id} id={`hs-card-${hs.id}`} className={`hs-card${activeHotspot === hs.id ? ' open' : ''}`}>
                <button className="hs-close" onClick={() => setActiveHotspot(null)}>✕</button>
                <div className="hs-card-img"><img src={hs.cardImg} alt={hs.label} /></div>
                <div className="hs-card-body">
                  <div className="hs-card-label">Component Detail</div>
                  <div className="hs-card-title">{hs.cardTitle}</div>
                  <div className="hs-card-desc">{hs.cardDesc}</div>
                </div>
              </div>
            ))}

            {activeHotspot && (
              <div className="hs-backdrop on" onClick={() => setActiveHotspot(null)} />
            )}
          </div>
        </div>
        <div className="tesla-meta">
          <img src="/brand/zeus-xr-logo-colour.png" alt="Zeus XR" style={{ height: 'clamp(48px,6vw,80px)', width: 'auto', objectFit: 'contain' }} />
          <div className="tesla-specs">
            <div className="ts-spec">
              <div className="ts-val">30% <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', fontSize: 11, color: '#fff', verticalAlign: 'middle' }}>↑</span></div>
              <div className="ts-lbl">Increased Throughput</div>
            </div>
            <div className="ts-spec">
              <div className="ts-val">50% <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', fontSize: 11, color: '#fff', verticalAlign: 'middle' }}>↓</span></div>
              <div className="ts-lbl">Less Rework</div>
            </div>
            <div className="ts-spec">
              <div className="ts-val">35% <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', fontSize: 11, color: '#fff', verticalAlign: 'middle' }}>↓</span></div>
              <div className="ts-lbl">Paint Usage Reduction</div>
            </div>
          </div>
          <img src="/brand/paintgo-lockup.png" alt="Todd Engineering | PaintGo" style={{ height: 'clamp(48px,6vw,80px)', width: 'auto', objectFit: 'contain' }} />
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-inner rv">
          <p className="overline">Zeus XR by Todd Engineering</p>
          <h2>The Future of Spray Finishing is Automated.</h2>
          <p>Zeus XR combines advanced spraybooth technology, industrial robotics and AI-driven control into a single coordinated platform — bringing manufacturer-grade automation to modern bodyshops.</p>
        </div>
      </section>

      {/* FEATURES CAROUSEL */}
      <section className="fcar-sec">
        <div className="fcar-header">
          <div>
            <div className="s-lbl">Features</div>
            <h2 className="s-h2">Built to perform at every level.</h2>
          </div>
          <div className="fcar-controls">
            <button className="fcar-arrow" onClick={() => scrollCarousel('prev')} aria-label="Previous">
              <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
            <button className="fcar-arrow" onClick={() => scrollCarousel('next')} aria-label="Next">
              <svg viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
            </button>
          </div>
        </div>
        <div className="fcar-wrap">
          <div className="fcar-track" ref={trackRef}>
            {carouselCards.map((c, i) => (
              <div key={i} className="fcar-card">
                <div className="fcar-bg" style={{ backgroundImage: `url(${c.bg})`, backgroundPosition: c.bgPos }} />
                <div className="fcar-body">
                  <div className="fcar-lbl">{c.lbl}</div>
                  <div className="fcar-title">{c.title.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ZEUS XR — 6 feat cards */}
      <section className="sec sec-alt" id="features">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Why Zeus XR</div>
            <h2 className="s-h2 mw-560">Six reasons operations choose automation.</h2>
          </div>
          <div className="feat-grid">
            {[
              { title: 'Consistent Finish Quality', desc: 'Eliminates variation between operators, shifts and working practices. Every vehicle finished identically.', svg: <><circle cx="20" cy="20" r="16"/><polyline points="13 20 18 25 27 15"/></> },
              { title: 'Increased Throughput', desc: 'Up to 1,560 vehicles per year. 24-hour availability keeps production moving around the clock.', svg: <><rect x="6" y="26" width="7" height="9" rx="1"/><rect x="16.5" y="18" width="7" height="17" rx="1"/><rect x="27" y="10" width="7" height="25" rx="1"/></> },
              { title: 'Reduced Labour Dependency', desc: 'Automation reduces reliance on specialist spray technicians — saving approximately £70,000 per year.', svg: <><circle cx="20" cy="13" r="6"/><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12"/></> },
              { title: 'Improved Material Efficiency', desc: 'AI-optimised spray paths reduce paint consumption by up to 25%, cutting waste and costs significantly.', svg: <polygon points="20 5 24 16 36 16 27 23.5 30.5 35 20 28 9.5 35 13 23.5 4 16 16 16"/> },
              { title: 'Safer Working Environment', desc: 'Reduced operator exposure to solvents and airborne contaminants. Supports COSHH compliance.', svg: <><path d="M20 5L6 11v10c0 8.5 6.5 16.5 14 18 7.5-1.5 14-9.5 14-18V11L20 5z"/><polyline points="14 20 18.5 24.5 26 17"/></> },
              { title: 'Operational Control', desc: 'Measurable, repeatable outcomes. Real-time visibility of every spray cycle and system activity.', svg: <><circle cx="20" cy="20" r="4"/><circle cx="20" cy="20" r="9"/><circle cx="20" cy="20" r="15"/></> },
            ].map((f, i) => (
              <div key={f.title} className={`feat-card rv${i > 0 ? ` d${i % 3}` : ''}`}>
                <div className="feat-icon"><svg viewBox="0 0 40 40">{f.svg}</svg></div>
                <h3 className="feat-title">{f.title}</h3>
                <p className="feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="ba-section">
        <div className="ba-hd">
          <div className="s-lbl">The Result</div>
          <h2 className="s-h2">Precision. Accuracy. Quality.</h2>
          <p className="s-p mw-540" style={{ margin: '16px auto 0' }}>Drag to compare the results from a recent accident and repair job — delivered by Zeus XR with zero variation between passes.</p>
        </div>
        <div
          className="ba-slider"
          ref={baRef}
          onMouseDown={e => { baDragging.current = true; baCalc(e.clientX) }}
          onTouchStart={e => { baDragging.current = true; baCalc(e.touches[0].clientX) }}
        >
          <div className="ba-before">
            <img src="/media/undercoat.jpg" alt="Before — accident repair" draggable={false} />
            <span className="ba-label ba-label-before">Before</span>
          </div>
          <div className="ba-after" style={{ clipPath: `inset(0 ${100 - baPos}% 0 0)` }}>
            <img src="/media/prepped.jpg" alt="After — prepped and finished by Zeus XR" draggable={false} />
            <span className="ba-label ba-label-after">After</span>
          </div>
          <div className="ba-handle" style={{ left: `${baPos}%` }}>
            <div className="ba-handle-line"></div>
            <div className="ba-handle-btn">
              <svg viewBox="0 0 24 24"><polyline points="9,6 3,12 9,18"/><polyline points="15,6 21,12 15,18"/></svg>
            </div>
            <div className="ba-handle-line"></div>
          </div>
        </div>
      </section>

      {/* ROBOT CINEMA */}
      <div className="cinema rv">
        <div className="cin-img" style={{ position: 'relative' }}>
          <img src="/media/robot-image.jpg" alt="PG90-E robotic arm by PaintGo" />
        </div>
        <div className="cin-body">
          <div className="s-lbl">Meet the Robot</div>
          <h2 className="s-h2">The most advanced spray robot in UK bodyshops.</h2>
          <p className="s-p">PG90-E — created by PaintGo. Installed and distributed exclusively in the United Kingdom by Todd Engineering. Seven axes of industrial precision, purpose-built for automotive spray finishing.</p>
          <div className="pills">
            {['7-axis movement','Linear track','SATA compatible','IWATA compatible','3M compatible','Waterborne & 2K'].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* HEATING & AIRFLOW CINEMA */}
      <div className="cinema rv">
        <div className="cin-body">
          <div className="s-lbl">Patent-Pending Technology</div>
          <h2 className="s-h2">Advanced heating and airflow system.</h2>
          <p className="s-p">The Zeus XR booth is built around a proprietary heating and airflow architecture developed exclusively by Todd Engineering. Precision-controlled airflow eliminates dead zones across the entire spray envelope, while the all-electric heating system delivers consistent, stable temperatures that activated paint chemistry demands.</p>
          <p className="s-p" style={{ marginBottom: 0 }}>The result is a controlled environment that doesn&rsquo;t just support the robot — it&rsquo;s optimised for it. Every cubic metre of air, every degree of heat, working in coordination with the spray cycle.</p>
          <div className="pills" style={{ marginTop: 32 }}>
            {['Patent-pending design','All-electric heating','Zero dead zones','Precision airflow control','Optimised for robotics'].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
        <div className="cin-img">
          <img src="/media/heating-panel.jpg" alt="Zeus XR advanced heating and airflow system" />
        </div>
      </div>

      {/* SAFETY */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">A Safer Spray Environment</div>
            <h2 className="s-h2 mw-560">Less exposure. Lower risk.<br />Smarter compliance.</h2>
          </div>
          <div className="quad-grid">
            {[
              { title: 'Reduced Operator Exposure', desc: 'Minimise direct contact with solvents, airborne contaminants and the hazards of the spray environment.', svg: <><circle cx="18" cy="10" r="5"/><path d="M7 30c0-6 5-10 11-10s11 4 11 10"/><line x1="26" y1="10" x2="32" y2="10"/><line x1="29" y1="7" x2="29" y2="13"/></> },
              { title: 'Improved Working Conditions', desc: 'Less time spent inside the spray environment. Operators work in cleaner, safer conditions throughout.', svg: <><path d="M8 28V14l10-8 10 8v14"/><path d="M14 28v-8h8v8"/></> },
              { title: 'Simplified Compliance', desc: 'Supports COSHH control measures and reduces the burden of ongoing monitoring requirements.', svg: <><rect x="7" y="5" width="22" height="26" rx="2"/><line x1="12" y1="12" x2="24" y2="12"/><line x1="12" y1="17" x2="24" y2="17"/><circle cx="22" cy="23" r="4"/><polyline points="20 23 22 25 25 21"/></> },
              { title: 'Lower Long-Term Risk', desc: 'Helps reduce occupational health exposure and associated liabilities — protecting operators and the business.', svg: <><path d="M18 4L5 10v9c0 8 5.5 15.5 13 17 7.5-1.5 13-9 13-17v-9L18 4z"/><polyline points="13 18 17 22 23 15"/></> },
            ].map((c, i) => (
              <div key={c.title} className={`quad-card rv${i > 0 ? ` d${i}` : ''}`}>
                <div className="qc-icon"><svg viewBox="0 0 36 36">{c.svg}</svg></div>
                <h3 className="qc-title">{c.title}</h3>
                <p className="qc-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO BREAKOUT */}
      <div className="vb rv">
        <div className="vb-media">
          <video autoPlay muted loop playsInline poster="/media/zeus-xr-25.jpg">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="vb-body">
          <div className="s-lbl">Engineered for Performance</div>
          <h2 className="s-h2">Consistent results across every surface.</h2>
          <p className="s-p">Full vehicle and panel spraying. Precision blending. Consistent results across curves, edges and complex modern vehicle geometries — eliminating variation between operators and shifts.</p>
          <div className="pills">
            {['Full vehicle spraying','Panel spraying','Precision blending','Complex surfaces'].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BUILT FOR EXCELLENCE */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Built for Excellence</div>
            <h2 className="s-h2 mw-560">Every detail considered.</h2>
          </div>
          <div className="quad-grid">
            {[
              { title: 'Fully Integrated System', desc: 'One seamless operation. Booth, robot and AI control coordinated as a single platform.', svg: <><rect x="4" y="4" width="28" height="28" rx="3"/><line x1="4" y1="14" x2="32" y2="14"/><line x1="14" y1="14" x2="14" y2="32"/></> },
              { title: 'Optimised Track Design', desc: 'More usable space. Improved robot movement range. Easier maintenance access throughout.', svg: <><line x1="6" y1="18" x2="30" y2="18"/><circle cx="12" cy="18" r="3"/><circle cx="24" cy="18" r="3"/><path d="M12 15V9M24 15V9M12 21v6M24 21v6"/></> },
              { title: 'Expanded Booth Design', desc: 'Greater flexibility for vehicles of all sizes. Built for the full range of automotive refinishing.', svg: <><rect x="4" y="8" width="28" height="22" rx="2"/><line x1="4" y1="16" x2="32" y2="16"/></> },
              { title: 'Electric-Powered Operation', desc: 'Reduced emissions and improved energy efficiency without compromising performance.', svg: <><circle cx="18" cy="18" r="6"/><path d="M18 4v4M18 28v4M4 18h4M28 18h4M8.34 8.34l2.83 2.83M24.83 24.83l2.83 2.83M8.34 27.66l2.83-2.83M24.83 11.17l2.83-2.83"/></> },
            ].map((c, i) => (
              <div key={c.title} className={`quad-card rv${i > 0 ? ` d${i}` : ''}`}>
                <div className="qc-icon"><svg viewBox="0 0 36 36">{c.svg}</svg></div>
                <h3 className="qc-title">{c.title}</h3>
                <p className="qc-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZEUS XR EXPLAINED — video */}
      <section className="exp-vid-sec">
        <div className="exp-vid-inner rv">
          <div className="exp-vid-header">
            <div className="s-lbl">Zeus XR Explained</div>
            <h2 className="s-h2">Our vision for the future.</h2>
            <p>A short film on what Zeus XR means for the industry — and what it could mean for your operation.</p>
          </div>
          {!vid1Playing ? (
            <div
              className="exp-vid-wrap"
              style={{ backgroundImage: 'url(/media/isolated-booth.jpg)' }}
              onClick={() => setVid1Playing(true)}
            >
              <div className="exp-vid-overlay">
                <button className="exp-play-btn" aria-label="Play video">
                  <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="29" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
                    <polygon points="24,18 44,30 24,42" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="exp-vid-wrap">
              <iframe
                src="https://www.youtube.com/embed/s5-tmqBcUF8?autoplay=1"
                allow="autoplay; fullscreen"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                title="Zeus XR Explained"
              />
            </div>
          )}
        </div>
      </section>

      {/* IMPACT */}
      <section className="sec sec-alt" id="performance">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Operational Impact &amp; Payback</div>
            <h2 className="s-h2 mw-560">Measurable gains. From day one.</h2>
          </div>
          <div className="imp-row rv">
            <div className="imp-cell">
              <div className="imp-num">−£95k</div>
              <div className="imp-title">Annual cost reduction</div>
              <div className="imp-note">Labour reduction (£70k) and paint savings (£25k) combined.</div>
            </div>
            <div className="imp-cell">
              <div className="imp-num">+30%</div>
              <div className="imp-title">Increase in output</div>
              <div className="imp-note">Up to 130 additional vehicles per month on conservative utilisation.</div>
            </div>
            <div className="imp-cell">
              <div className="imp-num">£1M+</div>
              <div className="imp-title">Revenue potential</div>
              <div className="imp-note">Per annum, based on average order values of £8k.</div>
            </div>
          </div>
          <p style={{ fontSize: 11, color: 'var(--t3)', textAlign: 'center', marginTop: 20 }}>*Estimates based on typical operating assumptions. Verify against your individual operation.</p>
        </div>
      </section>

      {/* THE EXPERIENCE — 6 steps */}
      <section className="sec" id="experience">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">The Zeus XR Experience</div>
            <h2 className="s-h2">Six steps. Operator-guided. Robot-executed.</h2>
            <p className="s-p mw-560">Your team stays in control. Zeus XR handles the precision — delivering consistent, repeatable results at every stage.</p>
          </div>
          <div className="steps-grid">
            {[
              { n: '01', title: 'Prepare & Load', desc: 'Vehicle is prepped and loaded into the booth — ready for the automated cycle to begin.', svg: <><path d="M3 19c0-3 1.5-5 3.5-6l2-1h11l2 1c2 1 3.5 3 3.5 6"/><rect x="6" y="10" width="16" height="3" rx="1"/><circle cx="8" cy="21" r="2"/><circle cx="20" cy="21" r="2"/></> },
              { n: '02', title: 'Scan & Map', desc: 'Scanner reads vehicle geometry and profiles every panel.', svg: <><rect x="4" y="4" width="20" height="20" rx="3"/><circle cx="14" cy="14" r="5"/><line x1="14" y1="4" x2="14" y2="9"/><line x1="14" y1="19" x2="14" y2="24"/><line x1="4" y1="14" x2="9" y2="14"/><line x1="19" y1="14" x2="24" y2="14"/></> },
              { n: '03', title: 'Select Programme', desc: 'Operator selects via touchscreen. One tap to begin.', svg: <><rect x="4" y="3" width="20" height="22" rx="2"/><line x1="8" y1="9" x2="20" y2="9"/><line x1="8" y1="13" x2="20" y2="13"/><circle cx="19" cy="19" r="4"/><polyline points="17 19 19 21 22 17"/></> },
              { n: '04', title: 'Robotic Spray', desc: 'The PG90-E robot arm executes the full spray cycle with precision and consistency.', svg: <><circle cx="14" cy="6" r="3"/><path d="M14 9v8M10 13l4 4 4-4"/><path d="M6 20c2-2.5 4.5-3.5 8-3.5s6 1 8 3.5"/><circle cx="6" cy="23" r="2.5"/><circle cx="22" cy="23" r="2.5"/></> },
              { n: '05', title: 'Dry Activated', desc: 'Integrated booth management controls the drying cycle.', svg: <><path d="M14 3C9 3 5 7 5 12c0 3.5 1.8 6.6 4.5 8.5M14 3c5 0 9 4 9 9 0 3.5-1.8 6.6-4.5 8.5"/><polyline points="10 12 14 16 20 9"/></> },
              { n: '06', title: 'Unload Vehicle', desc: 'Vehicle exits. Finished. The cycle repeats — perfectly.', svg: <><path d="M3 19c0-3 1.5-5 3.5-6l2-1h11l2 1c2 1 3.5 3 3.5 6"/><rect x="6" y="10" width="16" height="3" rx="1"/><circle cx="8" cy="21" r="2"/><circle cx="20" cy="21" r="2"/><polyline points="11 4 14 7 19 2"/></> },
            ].map((s, i) => (
              <div key={s.n} className={`step-card rv${i > 0 ? ` d${i % 5}` : ''}`}>
                <p className="step-n">{s.n}</p>
                <div className="step-ic"><svg viewBox="0 0 28 28">{s.svg}</svg></div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE VIDEO */}
      <section className="exp-vid-sec">
        <div className="exp-vid-inner rv">
          <div className="exp-vid-header">
            <div className="s-lbl">See It In Action</div>
            <h2 className="s-h2">The Zeus XR Experience</h2>
          </div>
          {!vid2Playing ? (
            <div
              className="exp-vid-wrap"
              style={{ backgroundImage: 'url(/media/zeus-xr-video-thumb.jpg)' }}
              onClick={() => setVid2Playing(true)}
            >
              <div className="exp-vid-overlay">
                <button className="exp-play-btn" aria-label="Play video">
                  <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="29" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
                    <polygon points="24,18 44,30 24,42" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="exp-vid-wrap">
              <iframe
                src="https://www.youtube.com/embed/da2caTaIaeA?autoplay=1"
                allow="autoplay; fullscreen"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                title="Zeus XR Experience"
              />
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Manual vs Automated</div>
            <h2 className="s-h2 mw-560">The numbers speak for themselves.</h2>
          </div>
          <div className="comp-wrap rv">
            <div className="comp-head">
              <div style={{ color: 'var(--t3)' }}>Metric</div>
              <div className="ch-zeus">Zeus XR</div>
              <div className="ch-man">Manual</div>
            </div>
            {[
              ['Finish Consistency', 'Up to 100%', '~80%'],
              ['Operational Availability', '24 hrs / day', '8 hrs / day'],
              ['Annual Throughput', '~1,560 vehicles', '~1,200 vehicles'],
              ['Labour Cost', 'Significantly reduced', '~£45,000 / yr'],
              ['Paint Consumption', 'Up to 25% reduction', 'Baseline'],
            ].map(([lbl, zeus, man]) => (
              <div key={lbl} className="comp-row">
                <div className="cr-lbl">{lbl}</div>
                <div className="cr-zeus">{zeus}</div>
                <div className="cr-man">{man}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="sec-alt" id="specs" style={{ borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)' }}>
        <div className="w-1300" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="specs-new-layout rv">
            <div>
              <div className="s-lbl" style={{ marginBottom: 14 }}>Technical Specifications</div>
              <h2 className="s-h2" style={{ fontSize: 'clamp(24px,2.6vw,38px)', marginBottom: 16 }}>Precision engineering.<br />Every detail.</h2>
              <p className="s-p" style={{ marginBottom: 28, fontSize: 14 }}>Designed for continuous operation. Full installation, commissioning, training and ongoing support from Todd Engineering.</p>
              <button className="btn btn-cta" style={{ marginBottom: 40 }} onClick={() => setModalOpen(true)}>Book a Demo</button>
              <div className="spec-tbl">
                {[
                  ['Application', 'Automotive spray finishing'],
                  ['Booth Size', 'Starting approx. 4m × 7m'],
                  ['System Type', 'Robotic spray with linear track'],
                  ['Robot', '7-axis industrial arm — PG90-E by PaintGo'],
                  ['Spray Systems', 'SATA, IWATA, 3M compatible'],
                  ['Paint Compatibility', 'Waterborne, solvent, 2K polyurethane'],
                  ['Control', 'AI path planning + touchscreen interface'],
                  ['Connectivity', 'Wireless integration'],
                  ['Cycle Time', 'Approx. 2 hours per vehicle'],
                  ['Vehicle Models', '4,000+ preloaded profiles'],
                  ['Support', 'Full installation, commissioning & training'],
                ].map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <div className="sk">{k}</div>
                    <div className="sv">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="specs-new-img">
              <img src="/media/isolated-booth.jpg" alt="Zeus XR system" />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="partners rv">
        <div className="partners-inner">
          <span className="p-lbl">Powered by</span>
          <div className="p-sep"></div>
          <img src="/brand/logo.png" alt="Todd Engineering" className="p-logo" />
          <img src="/brand/paintgo-lockup.png" alt="PaintGo" className="p-logo" />
          <img src="/brand/anest-iwata.png" alt="Anest Iwata" className="p-logo" />
        </div>
      </div>

      {/* INVESTMENT OPTIONS */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv">
            <div className="s-lbl">Investment Options</div>
            <h2 className="s-h2">A route that works for your operation.</h2>
          </div>
          <div className="invest-grid">
            {[
              { title: 'Direct Purchase', desc: 'Full system ownership with long-term operational benefit. Own the asset outright and maximise return over the system\'s lifetime.', svg: <><rect x="4" y="9" width="24" height="17" rx="2"/><path d="M10 9V7a6 6 0 0 1 12 0v2"/><line x1="16" y1="15" x2="16" y2="20"/></> },
              { title: 'Finance Options', desc: 'Flexible payment structures to support cash flow and investment planning. Benefit from day one while spreading the investment.', svg: <><rect x="4" y="7" width="24" height="18" rx="2"/><line x1="4" y1="13" x2="28" y2="13"/><line x1="9" y1="19" x2="14" y2="19"/></> },
              { title: 'Part Exchange', desc: 'Upgrade your existing equipment as part of your transition to Zeus XR. Todd Engineering will assess your current booth.', svg: <><polyline points="6 14 16 5 26 14"/><path d="M9 14v13h5v-7h4v7h5V14"/></> },
            ].map((c, i) => (
              <div key={c.title} className={`invest-card rv${i > 0 ? ` d${i}` : ''}`}>
                <div className="inv-icon"><svg viewBox="0 0 32 32">{c.svg}</svg></div>
                <h3 className="inv-title">{c.title}</h3>
                <p className="inv-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec" id="demo" style={{ height: '100svh' }}>
        <div className="cta-bg" style={{ backgroundImage: 'url(/media/cta-bg.jpg)' }}></div>
        <div className="cta-grad"></div>
        <div className="cta-content rv">
          <h2 className="cta-h2">See Zeus XR In Action</h2>
          <div className="cta-btns">
            <button className="btn btn-cta btn-lg" onClick={() => setModalOpen(true)}>Book a Live Demo</button>
            <a href="mailto:sales@toddengineering.co.uk?subject=Zeus XR Enquiry" className="btn btn-ghost btn-lg">Make an Enquiry</a>
          </div>
        </div>
      </section>

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
