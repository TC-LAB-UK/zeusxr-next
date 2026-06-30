'use client'

import { useRef, useState, useEffect } from 'react'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

export default function ContactPage() {
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
          name: `${fd.get('fname')} ${fd.get('lname')}`.trim(),
          email: fd.get('email'),
          phone: fd.get('phone') || null,
          message: fd.get('message') ? `Interest: ${fd.get('interest')}\n\n${fd.get('message')}` : `Interest: ${fd.get('interest')}`,
          source: 'contact_page',
          status: 'new',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
    } catch (_) {}
    setSending(false)
    setSent(true)
  }

  return (
    <div className="contact-wrap">
      {/* LEFT — Dark info panel */}
      <div className="contact-left">
        <div>
          <p className="contact-lbl">Get in Touch</p>
          <h1 className="contact-h1">Let&rsquo;s talk about<br />your next<br />spraybooth.</h1>
        </div>
        <div>
          <div className="contact-detail rv">
            <p className="contact-detail-lbl">Address</p>
            <p className="contact-detail-val">Gregory Works<br />Armitage Road<br />Staffordshire, WS15 1PW</p>
          </div>
          <div className="contact-detail rv d1">
            <p className="contact-detail-lbl">Telephone</p>
            <p className="contact-detail-val"><a href="tel:08450176465">0845 017 6465</a></p>
          </div>
          <div className="contact-detail rv d2">
            <p className="contact-detail-lbl">Email</p>
            <p className="contact-detail-val"><a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a></p>
          </div>
          <div className="contact-detail rv d3">
            <p className="contact-detail-lbl">Hours</p>
            <p className="contact-detail-val">Mon – Fri, 8:30am – 5:00pm</p>
          </div>
        </div>
      </div>

      {/* RIGHT — Form panel */}
      <div className="contact-right">
        {sent ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <svg viewBox="0 0 52 52" fill="none" style={{ width: 56, height: 56, margin: '0 auto 20px', display: 'block' }}>
              <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
              <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>Enquiry sent.</h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--t2)', marginBottom: 24 }}>A member of our team will be in touch shortly.</p>
          </div>
        ) : (
          <form ref={formRef} className="rv" onSubmit={handleSubmit} noValidate>
            <div className="cf-row">
              <div className="cf-group">
                <label className="form-label">First Name</label>
                <input type="text" name="fname" className="form-input" placeholder="James" required />
              </div>
              <div className="cf-group">
                <label className="form-label">Last Name</label>
                <input type="text" name="lname" className="form-input" placeholder="Mitchell" required />
              </div>
            </div>
            <div className="cf-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" placeholder="james@yourcompany.co.uk" required />
            </div>
            <div className="cf-group">
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" className="form-input" placeholder="+44 7700 900000" />
            </div>
            <div className="cf-group">
              <label className="form-label">I&rsquo;m interested in</label>
              <select name="interest" className="form-input" style={{ appearance: 'none', backgroundImage: 'none' }}>
                <option value="">Select a product or service…</option>
                <option>Zeus XR — AI Robotic Spraybooth</option>
                <option>Zeus 8000</option>
                <option>Olympian 1000</option>
                <option>Poseidon</option>
                <option>Installation &amp; Project Management</option>
                <option>Design &amp; Build</option>
                <option>Maintenance &amp; Servicing</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="cf-group">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-input" style={{ resize: 'vertical', minHeight: 120 }} placeholder="Tell us a little about your project or requirements…"></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Enquiry'}
            </button>
            <p className="contact-note">We typically respond within one business day.</p>
          </form>
        )}
      </div>
    </div>
  )
}
