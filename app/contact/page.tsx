import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Todd Engineering to discuss Zeus XR installations, servicing support, or bespoke spray booth projects.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Contact Us</p>
          <h1>Talk to Our Team</h1>
          <p>Whether you're planning a new Zeus XR installation, need servicing support, or want to discuss a bespoke project — we're ready to help.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="form-wrap">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>Fill in the form and one of our engineers will be in touch within one working day.</p>

            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value"><a href="mailto:info@toddengineering.co.uk">info@toddengineering.co.uk</a></span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">0845 017 6465</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address</span>
              <span className="info-value">Gregory Works, Armitage Road,<br />Staffordshire, WS15 1PW</span>
            </div>

            <div className="divider"></div>

            <div className="trust-items">
              <div className="trust-item"><span className="trust-dot"></span>30+ years engineering experience</div>
              <div className="trust-item"><span className="trust-dot"></span>Installations across UK & Europe</div>
              <div className="trust-item"><span className="trust-dot"></span>Full service & aftercare support</div>
              <div className="trust-item"><span className="trust-dot"></span>Bespoke projects welcome</div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
