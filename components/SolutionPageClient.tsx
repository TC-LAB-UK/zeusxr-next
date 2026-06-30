'use client'

import { useEffect, useRef, useState } from 'react'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

export interface ProcStep {
  n: string
  title: string
  desc: string
  svg: React.ReactNode
}

export interface SolutionPageProps {
  eyebrow: string
  h1: string
  tagline: string
  heroBg: string
  overviewTitle: string
  overviewBody: string
  introImg: string
  introImgAlt: string
  processSteps: ProcStep[]
  included: string[]
  whyCards: { title: string; desc: string }[]
  formTitle: string
  formSrc: string
}

export default function SolutionPageClient(p: SolutionPageProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) { formRef.current?.reportValidity(); return }
    const fd = new FormData(formRef.current!)
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
          source: p.formSrc,
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
      <section className="sol-hero">
        <div className="sol-bg" style={{ backgroundImage: `url(${p.heroBg})` }} />
        <div className="sol-grad" />
        <div className="sol-content">
          <p className="sol-eyebrow">{p.eyebrow}</p>
          <h1 className="sol-h1">{p.h1}</h1>
          <p className="sol-tagline">{p.tagline}</p>
          <div className="sol-ctas">
            <a href="#contact" className="btn btn-cta btn-lg">Get in Touch</a>
            <a href="#process" className="btn btn-ghost btn-lg">How It Works</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-sec">
        <div className="intro-grid">
          <div className="rv">
            <span className="s-lbl">Overview</span>
            <h2 className="s-h2">{p.overviewTitle}</h2>
            <p className="s-p">{p.overviewBody}</p>
            <div className="pills" style={{ marginTop: 24 }}>
              <span className="pill">Nationwide Coverage</span>
              <span className="pill">British Engineers</span>
              <span className="pill">30+ Years Experience</span>
            </div>
          </div>
          <div className="intro-img rv d1">
            <img src={p.introImg} alt={p.introImgAlt} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" id="process">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">The Process</span>
            <h2 className="s-h2">How it works.</h2>
            <p className="s-p mw-600">A clear, structured approach that keeps your project on track from first conversation to final handover.</p>
          </div>
          <div className="process-grid">
            {p.processSteps.map((s, i) => (
              <div key={s.n} className={`proc-card rv${i > 0 ? ` d${i}` : ''}`}>
                <div className="proc-num">{s.n}</div>
                <div className="proc-icon"><svg viewBox="0 0 32 32">{s.svg}</svg></div>
                <h3 className="proc-title">{s.title}</h3>
                <p className="proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="sec sec-dark">
        <div className="w-1100">
          <div className="tc rv">
            <span className="s-lbl">What&apos;s Included</span>
            <h2 className="s-h2">Everything you need.</h2>
          </div>
          <div className="inc-grid">
            <ul className="inc-list">
              {p.included.map((item, i) => (
                <li key={item} className={`inc-item rv${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}>
                  <span className="inc-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="inc-note rv">
              <h3>All work carried out by Todd Engineering engineers.</h3>
              <p>Every installation, project and service is delivered directly by our own team. You get the same engineers who designed and built your system — faster response times, better accountability and genuine expertise on every job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Why Todd Engineering</span>
            <h2 className="s-h2">The right choice.</h2>
          </div>
          <div className="why-grid">
            {p.whyCards.map((c, i) => (
              <div key={c.title} className={`why-card rv${i > 0 ? ` d${i}` : ''}`}>
                <h3 className="why-title">{c.title}</h3>
                <p className="why-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="cform-sec" id="contact">
        <div className="cform-inner">
          <div className="rv">
            <span className="s-lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Get In Touch</span>
            <h2 className="cform-h2">{p.formTitle}</h2>
            <p className="cform-sub">Talk to one of our engineers. We will understand your requirements and provide a detailed proposal.</p>
            <div className="cform-contact">
              <div className="cc-item">
                <svg viewBox="0 0 20 20" fill="none"><path d="M2 4h16v12H2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><polyline points="2,4 10,11 18,4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a>
              </div>
              <div className="cc-item">
                <svg viewBox="0 0 20 20" fill="none"><path d="M3 5a1 1 0 0 1 1-1h3l1.5 3.5-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2L16 13v3a1 1 0 0 1-1 1C7.268 17 3 12.732 3 7V5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <a href="tel:08450176465">0845 017 6465</a>
              </div>
            </div>
          </div>
          <div className="cform-wrap rv d1">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <svg viewBox="0 0 52 52" fill="none" style={{ width: 56, height: 56, margin: '0 auto 20px', display: 'block' }}>
                  <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
                  <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>Enquiry sent.</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--t2)' }}>A member of our team will be in touch shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name <span className="req">*</span></label>
                    <input type="text" name="name" placeholder="John Smith" required />
                  </div>
                  <div className="cf-group">
                    <label>Company <span className="req">*</span></label>
                    <input type="text" name="company" placeholder="Company name" required />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Email <span className="req">*</span></label>
                    <input type="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="cf-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="+44 7700 000000" />
                  </div>
                </div>
                <div className="cf-group">
                  <label>Tell us about your requirements <span className="req">*</span></label>
                  <textarea name="message" rows={4} placeholder="Describe your project, requirements and timescales..." required />
                </div>
                <button type="submit" className="btn btn-cta btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} disabled={sending}>
                  {sending ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p className="form-legal">By submitting you agree to be contacted by Todd Engineering. We will never share your details.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
