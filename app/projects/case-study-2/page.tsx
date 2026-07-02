import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Dubai Aerospace Facility — Todd Engineering',
  description: 'A high-specification aerospace finishing facility designed, manufactured and commissioned in Bahrain — delivered to the exacting standards of the aerospace sector.',
}

export default function CaseStudy2Page() {
  return (
    <>
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-bg" style={{ backgroundImage: "url('/media/aerospace.png')" }} />
        <div className="cs-grad" />
        <div className="cs-content">
          <div className="cs-sector">Aerospace</div>
          <h1 className="cs-h1">Dubai Aerospace Facility</h1>
          <div className="cs-meta">
            <div className="cs-meta-item"><strong>Client</strong>Confidential Client</div>
            <div className="cs-meta-item"><strong>Location</strong>Bahrain</div>
            <div className="cs-meta-item"><strong>Duration</strong>12 months</div>
            <div className="cs-meta-item"><strong>Scope</strong>International export — full design and build</div>
          </div>
        </div>
      </section>

      {/* STATS + CHALLENGE / SOLUTION */}
      <section className="sec">
        <div className="w-1300">
          <div className="stats-row rv">
            <div className="cs-stat rv">
              <div className="cs-num">International</div>
              <div className="cs-lbl">Export project</div>
            </div>
            <div className="cs-stat rv d1">
              <div className="cs-num">Aerospace</div>
              <div className="cs-lbl">Specification</div>
            </div>
            <div className="cs-stat rv d2">
              <div className="cs-num">12 months</div>
              <div className="cs-lbl">End to end delivery</div>
            </div>
            <div className="cs-stat rv d3">
              <div className="cs-num">UK-Built</div>
              <div className="cs-lbl">Exported and installed</div>
            </div>
          </div>

          <div className="cso-grid">
            <div className="cso-card rv">
              <div className="cso-lbl">The Challenge</div>
              <h3 className="cso-h3">What needed to be solved</h3>
              <p className="cso-text">An international aerospace client required a high-specification aircraft component finishing facility in Bahrain. The project demanded adherence to strict aerospace coating standards, compliance with international export and installation regulations, and the logistical complexity of delivering and commissioning a bespoke facility overseas.</p>
            </div>
            <div className="cso-card rv d1">
              <div className="cso-lbl">The Solution</div>
              <h3 className="cso-h3">How Todd Engineering delivered</h3>
              <p className="cso-text">Todd Engineering designed and manufactured a bespoke aerospace finishing facility at our Staffordshire facility before coordinating the export, overseas logistics and on-site installation by our own engineers. The project was delivered to full aerospace specification with all required documentation, commissioning records and operator training completed in-country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Outcome</span>
            <h2 className="s-h2">The result.</h2>
          </div>
          <p className="s-p rv" style={{ maxWidth: 860, margin: '24px auto 0', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.8, textAlign: 'center' }}>
            A high-specification aerospace finishing facility successfully designed, manufactured and commissioned in Bahrain — delivered to the exacting standards required by the aerospace sector. A demonstration of Todd Engineering&apos;s capability to execute complex international projects with the same rigour applied to our UK installations.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec sec-alt">
        <div className="w-1100">
          <div className="testi-wrap rv">
            <div className="testi-mark">&quot;</div>
            <p className="testi-q">Todd Engineering demonstrated <strong>exceptional capability and professionalism</strong> throughout the entire project. The finished facility meets every requirement of our aerospace specification.</p>
            <div className="testi-attr">
              <div className="testi-line" />
              <div>
                <div className="testi-name">Project Director</div>
                <div className="testi-role">Aerospace Client</div>
              </div>
              <div className="testi-line" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      <ScrollReveal />
    </>
  )
}
