'use client'

import { useEffect, useRef, useState } from 'react'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

export default function QuoteModal() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Get a Quote')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    function handleOpen(e: CustomEvent) {
      setTitle(e.detail || 'Get a Quote')
      setOpen(true)
      setSent(false)
      document.body.style.overflow = 'hidden'
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }

    // Listen for clicks on [data-quote] buttons
    function handleClick(e: MouseEvent) {
      const btn = (e.target as Element).closest('[data-quote]') as HTMLElement | null
      if (btn) {
        e.preventDefault()
        setTitle(btn.dataset.quote || 'Get a Quote')
        setOpen(true)
        setSent(false)
        document.body.style.overflow = 'hidden'
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  function close() {
    setOpen(false)
    document.body.style.overflow = ''
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) { formRef.current?.reportValidity(); return }
    setSubmitting(true)

    const d = new FormData(formRef.current!)
    const params = new URLSearchParams(window.location.search)
    const payload = {
      org_id: ORG_ID,
      name: d.get('name') as string,
      email: d.get('email') as string,
      company: d.get('company') || null,
      phone: d.get('phone') || null,
      source: 'website_form',
      message: d.get('message') || null,
      notes: d.get('type') ? 'Enquiry type: ' + d.get('type') : null,
      status: 'new',
      page_url: window.location.href,
      referrer: document.referrer || null,
      utm_source: params.get('utm_source') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_campaign: params.get('utm_campaign') || null,
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()

      await fetch('https://portal.tc-lab.co.uk/api/leads/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ record: payload }),
      }).catch(() => {})

      setSent(true)
    } catch {
      alert('Something went wrong. Please email us at info@toddengineering.co.uk')
    }
    setSubmitting(false)
  }

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) close() }}>
      <div className="modal-card">
        <button className="modal-close" onClick={close} aria-label="Close">&#x2715;</button>

        {sent ? (
          <div className="mf-success" style={{ display: 'block' }}>
            <svg viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
              <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Enquiry sent.</h3>
            <p>A member of our team will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-sub">Tell us about your project — we'll respond within one working day.</p>
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mf-row mf-row-gap">
                <div className="mf-group">
                  <label>Full Name <span className="mf-req">*</span></label>
                  <input type="text" name="name" placeholder="John Smith" required />
                </div>
                <div className="mf-group">
                  <label>Company <span className="mf-req">*</span></label>
                  <input type="text" name="company" placeholder="Company name" required />
                </div>
              </div>
              <div className="mf-row mf-row-gap" style={{ marginTop: 14 }}>
                <div className="mf-group">
                  <label>Email <span className="mf-req">*</span></label>
                  <input type="email" name="email" placeholder="you@company.com" required />
                </div>
                <div className="mf-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder="+44 7700 000000" />
                </div>
              </div>
              <div className="mf-group" style={{ marginTop: 14 }}>
                <label>Enquiry Type</label>
                <select name="type">
                  <option value="">Select a product or service...</option>
                  <option>Zeus XR — Robotic Spray System</option>
                  <option>Zeus 8000 Series</option>
                  <option>Olympian 1000 Series</option>
                  <option>Poseidon</option>
                  <option>Bespoke / Design & Build</option>
                  <option>Servicing & Maintenance</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="mf-group">
                <label>Tell us more</label>
                <textarea name="message" placeholder="Describe your requirements, site and timescales..."></textarea>
              </div>
              <button type="submit" className="mf-submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Enquiry'}
              </button>
              <p className="mf-legal">We'll respond within one working day. Your details won't be shared.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
