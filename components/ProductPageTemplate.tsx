'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const SUPABASE_LEADS = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

export interface ProductPageData {
  slug: string
  title: string
  metaDesc?: string
  eyebrow: string
  h1: string
  sub: string
  heroBg: string
  description: string
  pills: string[]
  specRows: { k: string; v: string }[]
  gallery: string[]
  icons: { svg: React.ReactNode; label: string }[]
}

export default function ProductPageTemplate({ data }: { data: ProductPageData }) {
  const [galIdx, setGalIdx] = useState(0)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.06 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function goTo(n: number) {
    const total = data.gallery.length
    const next = ((n % total) + total) % total
    setGalIdx(next)
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: next * trackRef.current.offsetWidth, behavior: 'smooth' })
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) { formRef.current?.reportValidity(); return }
    const fd = new FormData(formRef.current!)
    setSending(true)
    try {
      await fetch(SUPABASE_LEADS, {
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
          source: `product_${data.slug}`,
          message: fd.get('message') || null,
          status: 'new',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
    } catch (_) {}
    setSending(false)
    setSent(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${data.heroBg})` }} />
        <div className="hero-grad" />
        <div className="hero-content">
          <p className="hero-eyebrow">{data.eyebrow}</p>
          <h1 className="hero-h1">{data.h1}</h1>
          <p className="hero-sub">{data.sub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-cta btn-lg">Get a Quote</a>
            <a href="#specs" className="btn btn-ghost btn-lg">View Specs</a>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="specs-sec" id="specs">
        <div className="specs-layout rv">
          <div className="specs-body">
            <span className="s-lbl">Technical Specifications</span>
            <h2 className="s-h2">Precision engineering.<br />Every detail.</h2>
            <p className="s-p">{data.description}</p>
            {data.pills.length > 0 && (
              <div className="pills" style={{ marginBottom: 28 }}>
                {data.pills.map((p, i) => <span key={i} className="pill">{p}</span>)}
              </div>
            )}
            <a href="#contact" className="btn btn-cta" style={{ marginBottom: 36, display: 'inline-flex' }}>Request a Quote</a>
            {data.specRows.length > 0 && (
              <div className="spec-tbl">
                {data.specRows.map((r, i) => (
                  <div key={i} className="spec-row">
                    <div className="sk">{r.k}</div>
                    <div className="sv">{r.v}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="specs-render rv d1">
            <img src={data.heroBg} alt={`${data.h1} — product render`} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {data.gallery.length > 0 && (
        <section className="pg-gallery-sec">
          <div className="pg-gallery-track" ref={trackRef}>
            {data.gallery.map((src, i) => (
              <div key={i} className="pg-gallery-slide">
                <img src={src} alt={`${data.h1} ${i + 1}`} draggable={false} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="pg-gallery-controls">
            <button className="pg-arrow" onClick={() => goTo(galIdx - 1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="pg-dots">
              {data.gallery.slice(0, 20).map((_, i) => (
                <button key={i} className={`pg-dot${i === galIdx ? ' pg-active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <button className="pg-arrow" onClick={() => goTo(galIdx + 1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </section>
      )}

      {/* ICON STRIP */}
      {data.icons.length > 0 && (
        <section className="pg-icons-sec rv">
          <div className="pg-icons-row">
            {data.icons.map((ic, i) => (
              <div key={i} className="pg-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  {ic.svg}
                </svg>
                <span className="pg-icon-label">{ic.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="contact-sec" id="contact">
        <div className="contact-inner">
          <div className="contact-body rv">
            <span className="s-lbl-light">Get in Touch</span>
            <h2 className="contact-h2">Interested in the<br />{data.h1}?</h2>
            <p className="contact-sub">Talk to one of our engineers. We&rsquo;ll understand your operation, answer your questions and provide a quote tailored to your requirements.</p>
            <div className="contact-details">
              <div className="cd-item">
                <svg viewBox="0 0 20 20" fill="none"><path d="M2 4h16v12H2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><polyline points="2,4 10,11 18,4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a>
              </div>
              <div className="cd-item">
                <svg viewBox="0 0 20 20" fill="none"><path d="M3 5a1 1 0 0 1 1-1h3l1.5 3.5-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2L16 13v3a1 1 0 0 1-1 1C7.268 17 3 12.732 3 7V5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <a href="tel:08450176465">0845 017 6465</a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap rv d1">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <svg viewBox="0 0 52 52" fill="none" style={{ width: 56, height: 56, margin: '0 auto 20px', display: 'block' }}>
                  <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
                  <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Enquiry sent.</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.5)' }}>A member of the team will be in touch shortly.</p>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name <span style={{ color: 'var(--green)' }}>*</span></label>
                    <input type="text" name="name" placeholder="John Smith" required />
                  </div>
                  <div className="cf-group">
                    <label>Company <span style={{ color: 'var(--green)' }}>*</span></label>
                    <input type="text" name="company" placeholder="ABC Bodyshop" required />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Email <span style={{ color: 'var(--green)' }}>*</span></label>
                    <input type="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="cf-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="+44 7700 000000" />
                  </div>
                </div>
                <div className="cf-group">
                  <label>Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your current setup, throughput requirements, timescales…" />
                </div>
                <button type="submit" className="btn btn-cta btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                  {sending ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p style={{ fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,.3)', textAlign: 'center', marginTop: 12 }}>
                  By submitting you agree to be contacted by Todd Engineering.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
