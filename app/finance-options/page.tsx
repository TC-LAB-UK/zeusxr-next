import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Finance Options — Todd Engineering',
  description: 'Flexible finance options for your Todd Engineering spray booth installation. Spread the cost with competitive rates tailored to your business.',
}

export default function FinanceOptionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Flexible Investment</p>
          <h1>Finance Options</h1>
          <p>Spread the cost of your installation with finance packages tailored to your business.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="sec">
        <div className="w-800">
          <p className="rv" style={{ fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 300, lineHeight: 1.8, color: 'var(--t2)', textAlign: 'center' }}>
            Investing in a new spray booth or preparation facility is a major decision. Todd Engineering works with trusted finance partners to make that investment straightforward — with competitive rates, flexible terms and a process designed around your business, not a bank&rsquo;s.
          </p>
        </div>
      </section>

      {/* OPTIONS GRID */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="w-1300">
          <div className="fin-grid rv">

            <div className="fin-card">
              <div className="fin-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </div>
              <h3 className="fin-title">Hire Purchase</h3>
              <p className="fin-text">Own your equipment outright at the end of the agreement. Fixed monthly payments over an agreed term — typically 2 to 5 years — with the asset on your balance sheet from day one.</p>
              <ul className="fin-list">
                <li>Fixed monthly payments</li>
                <li>Full ownership at term end</li>
                <li>Asset appears on balance sheet</li>
                <li>Capital allowances may apply</li>
              </ul>
            </div>

            <div className="fin-card">
              <div className="fin-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="fin-title">Finance Lease</h3>
              <p className="fin-text">Use the equipment throughout the lease period with lower monthly payments than hire purchase. Ideal if you prefer to keep capital free and upgrade equipment at the end of each term.</p>
              <ul className="fin-list">
                <li>Lower monthly outgoings</li>
                <li>Full tax deduction on payments</li>
                <li>Option to extend or upgrade</li>
                <li>Off balance sheet (IFRS 16 dependent)</li>
              </ul>
            </div>

            <div className="fin-card">
              <div className="fin-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="fin-title">Operating Lease</h3>
              <p className="fin-text">A simple rental arrangement — pay to use the equipment without the responsibility of ownership. Maintenance can often be bundled in, giving you a single predictable monthly cost.</p>
              <ul className="fin-list">
                <li>Fully operational from day one</li>
                <li>Maintenance bundled in option</li>
                <li>Preserve working capital</li>
                <li>Easy end-of-term upgrade path</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY FINANCE */}
      <section className="sec" style={{ background: 'var(--s1)', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)' }}>
        <div className="w-1300">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow rv">Why Finance?</p>
            <h2 className="rv d1" style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, letterSpacing: '-.03em' }}>
              Protect your cash. Grow your capability.
            </h2>
          </div>
          <div className="fin-why-grid">
            {[
              { n: '01', title: 'Preserve working capital', body: 'Keep your cash in the business for day-to-day operations, staff, and opportunities — rather than tied up in equipment.' },
              { n: '02', title: 'Predictable monthly cost', body: 'Fixed payments make budgeting simple. No surprises, no rate fluctuation. Plan your cashflow with confidence.' },
              { n: '03', title: 'Tax-efficient structure', body: 'Depending on the agreement type, lease payments may be fully deductible against taxable profits. Speak to your accountant for advice specific to your situation.' },
              { n: '04', title: 'Upgrade at end of term', body: 'Technology moves fast. Finance gives you a natural upgrade point — so your facility stays current without a large capital outlay each time.' },
            ].map((item, i) => (
              <div key={i} className={`fin-why rv d${i}`}>
                <span className="fin-why-n">{item.n}</span>
                <h4 className="fin-why-title">{item.title}</h4>
                <p className="fin-why-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec">
        <div className="w-800" style={{ textAlign: 'center' }}>
          <p className="eyebrow rv">How It Works</p>
          <h2 className="rv d1" style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 800, letterSpacing: '-.03em', marginBottom: 48 }}>
            From quote to installation in four steps
          </h2>
          <div className="fin-steps">
            {[
              { step: '1', label: 'Get a quote', detail: 'Speak to our team about your project. We\'ll size the right system and provide a full installation quote.' },
              { step: '2', label: 'Choose your terms', detail: 'Select hire purchase, finance lease or operating lease. We\'ll introduce you to our finance partner to agree a rate and term.' },
              { step: '3', label: 'Application approved', detail: 'Our finance partner handles the credit process quickly — most decisions are returned within 24–48 hours.' },
              { step: '4', label: 'Installation begins', detail: 'Once paperwork is signed, we schedule your installation. Your new facility is operational, your capital is intact.' },
            ].map((s, i) => (
              <div key={i} className={`fin-step rv d${i}`}>
                <div className="fin-step-n">{s.step}</div>
                <div className="fin-step-label">{s.label}</div>
                <div className="fin-step-detail">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--s1)', borderTop: '1px solid var(--bdr)' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 className="rv" style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 800, letterSpacing: '-.03em', marginBottom: 16 }}>
            Ready to discuss your project?
          </h2>
          <p className="rv d1" style={{ fontSize: 15, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 40 }}>
            Talk to our team about your requirements and we&rsquo;ll put together a finance illustration alongside your installation quote.
          </p>
          <Link href="/contact" className="rv d2" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--green)', color: '#fff', padding: '14px 32px',
            borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none',
            letterSpacing: '.02em', textTransform: 'uppercase'
          }}>
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </Link>
          <p className="rv d3" style={{ fontSize: 12, color: 'var(--t3)', marginTop: 20, fontWeight: 300 }}>
            Finance is subject to status and eligibility. Terms and conditions apply. Todd Engineering Ltd acts as a credit broker, not a lender.
          </p>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
