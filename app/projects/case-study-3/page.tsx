import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Amalgam — Todd Engineering',
  description: 'A full turnkey spray finishing facility for Amalgam — one of the UK\'s most respected specialist vehicle builders.',
}

export default function CaseStudy3Page() {
  return (
    <>
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-bg" style={{ backgroundImage: "url('/media/amalgam.jpg')" }} />
        <div className="cs-grad" />
        <div className="cs-content">
          <div className="cs-sector">Automotive</div>
          <h1 className="cs-h1">Amalgam</h1>
          <div className="cs-meta">
            <div className="cs-meta-item"><strong>Client</strong>Amalgam</div>
            <div className="cs-meta-item"><strong>Location</strong>United Kingdom</div>
            <div className="cs-meta-item"><strong>Duration</strong>8 weeks</div>
            <div className="cs-meta-item"><strong>Scope</strong>Full turnkey — design, install, commission</div>
          </div>
        </div>
      </section>

      {/* STATS + CHALLENGE / SOLUTION */}
      <section className="sec">
        <div className="w-1300">
          <div className="stats-row rv">
            <div className="cs-stat rv">
              <div className="cs-num">Turnkey</div>
              <div className="cs-lbl">Design to commissioning</div>
            </div>
            <div className="cs-stat rv d1">
              <div className="cs-num">Premium</div>
              <div className="cs-lbl">Automotive specification</div>
            </div>
            <div className="cs-stat rv d2">
              <div className="cs-num">8 weeks</div>
              <div className="cs-lbl">Full installation</div>
            </div>
            <div className="cs-stat rv d3">
              <div className="cs-num">Zero</div>
              <div className="cs-lbl">Production downtime</div>
            </div>
          </div>

          <div className="cso-grid">
            <div className="cso-card rv">
              <div className="cso-lbl">The Challenge</div>
              <h3 className="cso-h3">What needed to be solved</h3>
              <p className="cso-text">Amalgam, one of the UK&apos;s most respected specialist vehicle builders, required a premium spray finishing facility that could meet the exceptionally high standards of their bespoke automotive work. The facility needed to be tailored to their specific workflow, site constraints and finish quality requirements.</p>
            </div>
            <div className="cso-card rv d1">
              <div className="cso-lbl">The Solution</div>
              <h3 className="cso-h3">How Todd Engineering delivered</h3>
              <p className="cso-text">Todd Engineering delivered a full turnkey spray finishing facility — from initial site survey and concept design through to installation, commissioning and operator training. Working closely with the Amalgam team, we configured the booth specification, airflow design and lighting to meet the exacting standards required for their high-value automotive work.</p>
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
            Amalgam&apos;s new spray finishing facility delivers the finish quality their bespoke work demands, with a controlled environment and optimised airflow that consistently produces results to the standards their clients expect. The turnkey delivery meant minimal disruption to their production schedule.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec sec-alt">
        <div className="w-1100">
          <div className="testi-wrap rv">
            <div className="testi-mark">&quot;</div>
            <p className="testi-q">The quality of the installation and the <strong>finish results from day one</strong> have exceeded our expectations. Todd Engineering understood exactly what our work demands.</p>
            <div className="testi-attr">
              <div className="testi-line" />
              <div>
                <div className="testi-name">Operations Director</div>
                <div className="testi-role">Amalgam</div>
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
