import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'UK Offshore Wind Farm — Todd Engineering',
  description: 'Todd Engineering delivered bespoke large-format finishing facilities for the UK\'s largest offshore wind farm — on time, to specification.',
}

export default function CaseStudy1Page() {
  return (
    <>
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-bg" style={{ backgroundImage: "url('/media/windfarm.png')" }} />
        <div className="cs-grad" />
        <div className="cs-content">
          <div className="cs-sector">Renewable Energy</div>
          <h1 className="cs-h1">UK Offshore Wind Farm</h1>
          <div className="cs-meta">
            <div className="cs-meta-item"><strong>Client</strong>Seah Wind</div>
            <div className="cs-meta-item"><strong>Location</strong>United Kingdom</div>
            <div className="cs-meta-item"><strong>Duration</strong>18 months</div>
            <div className="cs-meta-item"><strong>Scope</strong>Design, manufacture, installation</div>
          </div>
        </div>
      </section>

      {/* STATS + CHALLENGE / SOLUTION */}
      <section className="sec">
        <div className="w-1300">
          <div className="stats-row rv">
            <div className="cs-stat rv">
              <div className="cs-num">18</div>
              <div className="cs-lbl">Month programme</div>
            </div>
            <div className="cs-stat rv d1">
              <div className="cs-num">UK Largest</div>
              <div className="cs-lbl">Offshore wind farm</div>
            </div>
            <div className="cs-stat rv d2">
              <div className="cs-num">On Time</div>
              <div className="cs-lbl">Delivered to programme</div>
            </div>
            <div className="cs-stat rv d3">
              <div className="cs-num">Bespoke</div>
              <div className="cs-lbl">Engineering solution</div>
            </div>
          </div>

          <div className="cso-grid">
            <div className="cso-card rv">
              <div className="cso-lbl">The Challenge</div>
              <h3 className="cso-h3">What needed to be solved</h3>
              <p className="cso-text">Seah Wind required specialist surface finishing and coating facilities capable of handling the enormous scale and specific technical requirements of offshore wind turbine components. Standard spraybooth solutions were not adequate — bespoke engineering was required to meet the unique dimensional, environmental and operational specifications of this landmark project.</p>
            </div>
            <div className="cso-card rv d1">
              <div className="cso-lbl">The Solution</div>
              <h3 className="cso-h3">How Todd Engineering delivered</h3>
              <p className="cso-text">Todd Engineering designed, manufactured and installed a series of bespoke large-format finishing facilities specifically engineered for offshore wind turbine components. Working closely with the Seah Wind project team, our engineers developed custom airflow systems, heating configurations and access arrangements tailored to the component sizes, coating specifications and production throughput requirements of the project.</p>
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
            Todd Engineering delivered the complete installation on time and within programme — contributing directly to the successful commissioning of the UK&apos;s largest offshore wind farm. The facilities continue to operate at the specification designed, providing Seah Wind with the surface finishing capability required for ongoing production.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec sec-alt">
        <div className="w-1100">
          <div className="testi-wrap rv">
            <div className="testi-mark">&quot;</div>
            <p className="testi-q">Todd Engineering were <strong>crucial to the success</strong> of our 18-month implementation to deliver the UK&apos;s largest offshore wind farm. They played a key part in installation, project delivery and site management.</p>
            <div className="testi-attr">
              <div className="testi-line" />
              <div>
                <div className="testi-name">Director</div>
                <div className="testi-role">Seah Wind</div>
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
