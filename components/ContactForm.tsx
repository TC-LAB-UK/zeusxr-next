'use client'

import { useRef, useState } from 'react'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current!
    setStatus('sending')

    const d = new FormData(form)
    const payload = {
      org_id: ORG_ID,
      name: `${d.get('first_name')} ${d.get('last_name')}`.trim(),
      email: d.get('email') as string,
      company: d.get('company') || null,
      phone: d.get('phone') || null,
      source: 'contact_form',
      notes: [
        d.get('enquiry_type') ? 'Enquiry: ' + d.get('enquiry_type') : '',
        d.get('message') || '',
      ].filter(Boolean).join('\n'),
      status: 'new',
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

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} className="cf-form" onSubmit={handleSubmit}>
      <div className="cf-field-row">
        <div className="cf-field">
          <label htmlFor="first_name">First name</label>
          <input type="text" id="first_name" name="first_name" placeholder="Jane" required />
        </div>
        <div className="cf-field">
          <label htmlFor="last_name">Last name</label>
          <input type="text" id="last_name" name="last_name" placeholder="Smith" required />
        </div>
      </div>
      <div className="cf-field">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="jane@company.com" required />
      </div>
      <div className="cf-field">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" placeholder="Smith Bodyshop Ltd" />
      </div>
      <div className="cf-field">
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" placeholder="+44 7700 900000" />
      </div>
      <div className="cf-field">
        <label htmlFor="enquiry_type">Enquiry type</label>
        <select id="enquiry_type" name="enquiry_type" required>
          <option value="" disabled>Select an option</option>
          <option value="new_installation">New Zeus XR installation</option>
          <option value="demo">Request a demo</option>
          <option value="servicing">Servicing & maintenance</option>
          <option value="bespoke">Bespoke project</option>
          <option value="pricing">Pricing enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="cf-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your project or question…"></textarea>
      </div>

      {status === 'success' && (
        <div className="cf-status success">Thanks — we'll be in touch within one working day.</div>
      )}
      {status === 'error' && (
        <div className="cf-status error">Something went wrong. Please email us at info@toddengineering.co.uk</div>
      )}

      <button type="submit" className="cf-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
