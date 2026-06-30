'use client'

import { useEffect, useRef, useState } from 'react'

const SUPABASE_URL = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'
const ORG_ID = '8129f148-b92e-4fb4-a458-b0c941d6b42f'

const team = [
  { name: 'Lee Todd', role: 'Managing Director', photo: '/media/lee-todd.png', pos: 'center 20%' },
  { name: 'Adam Turner', role: 'Sales Manager', photo: 'https://www.toddengineering.co.uk/media/cmpbguho/todds_-79.png', pos: 'center' },
  { name: 'Jenny Lee', role: 'Sales Coordinator', photo: '/media/jenny-headshot.jpg', pos: 'center top' },
  { name: 'Dave Ayling', role: 'Purchasing Manager', photo: 'https://www.toddengineering.co.uk/media/kwhpgnx2/todds_-76.png', pos: 'center' },
  { name: 'Jason Nicholas', role: 'Factory Manager', photo: 'https://www.toddengineering.co.uk/media/lxhfdusf/todds_-65.png', pos: 'center' },
  { name: 'Sarah Griffin', role: 'Receptionist', photo: 'https://www.toddengineering.co.uk/media/gtmggoo1/todds_-42.png', pos: 'center' },
  { name: 'Babatunde Ayoade', role: 'Health & Safety Manager', photo: '/media/tunde-headshot.jpg', pos: 'center top' },
  { name: 'Bonnie & Bell', role: 'Honorary Board Members', photo: 'https://www.toddengineering.co.uk/media/vsinkwca/todds_-13.png', pos: 'center' },
]

const bentoPhotos = [
  'https://www.toddengineering.co.uk/media/cqlb4mkd/cci28062018_0004.jpg',
  'https://www.toddengineering.co.uk/media/cftf5hja/cci28062018_0001.jpg',
  'https://www.toddengineering.co.uk/media/ixnmjehl/cci28062018_0002.jpg',
  'https://www.toddengineering.co.uk/media/sf3nmusj/cci28062018_0003.jpg',
  'https://www.toddengineering.co.uk/media/ncig4hc4/cci28062018_0006.jpg',
  'https://www.toddengineering.co.uk/media/adjc1nbj/cci28062018_0008.jpg',
  'https://www.toddengineering.co.uk/media/0hlpmjde/cci28062018.jpg',
  'https://www.toddengineering.co.uk/media/3gdbf5tr/cci28062018_0005.jpg',
  'https://www.toddengineering.co.uk/media/yqijidba/5235431c-d7b3-43f4-b163-fea192b3c118.jpg',
  'https://www.toddengineering.co.uk/media/lhgbdbvi/cci28062018_0009.jpg',
]

const timeline = [
  { year: '1993', title: 'Founded in Staffordshire', desc: 'The Todd family establishes Todd Engineering in the heart of Staffordshire with a clear vision — to manufacture the best spraybooth systems in Britain.', side: 'right' },
  { year: 'Late 1990s', title: 'National expansion begins', desc: 'Todd Engineering grows rapidly across the UK, building a reputation for quality installations and responsive aftercare that sets the business apart.', side: 'left' },
  { year: '2005', title: 'Aerospace & defence entry', desc: 'Todd Engineering completes its first specialist aerospace finishing facility, opening the door to high-specification sectors beyond automotive refinishing.', side: 'right' },
  { year: '2010', title: '1,000th spraybooth installed', desc: "A landmark milestone — confirming Todd Engineering's position as one of the UK's most experienced and trusted spraybooth manufacturers and installers.", side: 'left' },
  { year: '2018', title: 'First international export', desc: 'Todd Engineering delivers its first major international project — a bespoke aerospace finishing facility in Bahrain, demonstrating global capability.', side: 'right' },
  { year: '2020', title: 'All-electric platform launched', desc: 'Todd Engineering introduces the Zeus electric spraybooth series — eliminating gas dependency and setting a new benchmark for sustainable finishing technology.', side: 'left' },
  { year: '2024', title: 'Manufacturer of the Year', desc: 'Todd Engineering is recognised as Spray Booth Manufacturer of the Year — a milestone that validates over three decades of engineering commitment.', side: 'right' },
  { year: '2026', title: 'Zeus XR — the next chapter', desc: "The launch of Zeus XR — the world's first AI-guided robotic spray system — marks a defining moment. The most advanced booth Todd Engineering has ever built.", side: 'left' },
]

export default function CompanyPage() {
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
          source: 'about_company',
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
      <section className="about-hero">
        <div className="about-hero-bg" style={{ backgroundImage: 'url(/media/heritage-todd.jpg)' }} />
        <div className="about-hero-grad" />
        <div className="about-hero-content">
          <p className="about-hero-eyebrow">Todd Engineering — Est. 1993</p>
          <h1 style={{ fontSize: 'clamp(48px,7vw,96px)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1, color: '#fff', marginBottom: 16 }}>Our Story</h1>
          <p style={{ fontSize: 'clamp(15px,1.5vw,19px)', fontWeight: 300, color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>Over 30 years of engineering excellence, innovation and a commitment to the industries we serve.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="story-grid rv">
            <div>
              <span className="s-lbl">The Foundation</span>
              <h2 className="s-h2">Built in Staffordshire.<br />Trusted across the UK.</h2>
              <p className="s-p">Todd Engineering was founded in the early nineties in the heart of Staffordshire. The Todd family built the company on a simple vision: to manufacture the best spraybooth systems in Britain, backed by engineering excellence and genuine customer service.</p>
              <p className="s-p" style={{ marginTop: 16 }}>Over three decades, that vision has been realised. We have grown from a family business into a nationally recognised manufacturer and installer, while retaining the values and personal accountability that define how we work.</p>
              <p className="s-p" style={{ marginTop: 16 }}>Today, Todd Engineering is guided by a blend of founders&rsquo; wisdom and dynamic leadership — combining deep industry knowledge with fresh thinking on technology, sustainability and customer experience.</p>
              <div className="pills story-pills" style={{ marginTop: 24 }}>
                <span className="pill">Est. 1993</span>
                <span className="pill">Staffordshire, UK</span>
                <span className="pill">Made in Britain</span>
                <span className="pill">Family Founded</span>
              </div>
            </div>
            <div className="story-img">
              <img src="/media/zeus-xr-32.jpg" alt="Todd Engineering facility" style={{ objectPosition: 'center 30%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sec" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="stats-strip rv">
          <div className="stat-cell">
            <div className="stat-num">30<span>+</span></div>
            <div className="stat-title">Years of Engineering Excellence</div>
            <div className="stat-note">Designing and building premium spraybooth systems since 1993.</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">10k<span>+</span></div>
            <div className="stat-title">Spraybooths Installed</div>
            <div className="stat-note">Installed across automotive, aerospace and industrial sectors.</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">100<span>+</span></div>
            <div className="stat-title">Bespoke Installations</div>
            <div className="stat-note">Large-scale, turnkey projects delivered globally.</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">25<span>+</span></div>
            <div className="stat-title">Engineers Nationwide</div>
            <div className="stat-note">Installation, servicing and support teams across the UK.</div>
          </div>
        </div>
      </section>

      {/* HERITAGE BENTO */}
      <section className="heritage-sec">
        <div className="heritage-hdr rv">
          <span className="s-lbl">Est. 1993</span>
          <h2 className="s-h2">30 years in the making.</h2>
        </div>
        <div className="heritage-bento">
          {bentoPhotos.map((src, i) => (
            <div key={src} className={`bento-item${i === 0 || i === 6 ? ' bento-tall' : ''} rv${i > 0 ? ` d${i % 4}` : ''}`}>
              <img src={src} alt="Todd Engineering archive" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="heritage-foot">Archive photography — Todd Engineering, Staffordshire</div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-sec">
        <div className="timeline-inner">
          <div className="timeline-hdr rv">
            <span className="s-lbl">Our History</span>
            <h2 className="s-h2">30 years in the making.</h2>
            <p className="s-p mw-560" style={{ margin: '16px auto 0' }}>From a single factory in Staffordshire to the UK&rsquo;s most advanced spraybooth manufacturer.</p>
          </div>
          <div className="tl-track">
            {timeline.map((item, i) => (
              <div key={item.year} className={`tl-item ${item.side} rv${i > 0 ? ' d1' : ''}`}>
                {item.side === 'right' ? (
                  <>
                    <div className="tl-left">
                      <div className="tl-year">{item.year}</div>
                      <div className="tl-title">{item.title}</div>
                      <div className="tl-desc">{item.desc}</div>
                    </div>
                    <div className="tl-empty"><div className="tl-dot" /></div>
                    <div className="tl-right" />
                  </>
                ) : (
                  <>
                    <div className="tl-left" />
                    <div className="tl-empty"><div className="tl-dot" /></div>
                    <div className="tl-right">
                      <div className="tl-year">{item.year}</div>
                      <div className="tl-title">{item.title}</div>
                      <div className="tl-desc">{item.desc}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="sec">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Our Values</span>
            <h2 className="s-h2">What we stand for.</h2>
          </div>
          <div className="vals-grid">
            <div className="val-card rv">
              <div className="val-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
              <h3 className="val-title">Engineering Excellence</h3>
              <p className="val-desc">We hold ourselves to the highest engineering standards on every project, regardless of scale. Quality is not negotiable.</p>
            </div>
            <div className="val-card rv d1">
              <div className="val-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h3 className="val-title">Made in Britain</h3>
              <p className="val-desc">Every system is designed, manufactured and installed by our own British engineers. We are accountable for every detail.</p>
            </div>
            <div className="val-card rv d2">
              <div className="val-icon"><svg viewBox="0 0 24 24"><path d="M2 22c1.25-1.25 2.5-2.5 3.36-3.36C7.29 20.67 9.64 22 12 22c5.5 0 10-4.5 10-10 0-3.5-2-7-5-9M22 2C17 2 12 5 9 9.5c-1.5 2.5-2 5-2 7.5M22 2L2 22"/></svg></div>
              <h3 className="val-title">Sustainable Innovation</h3>
              <p className="val-desc">We develop solutions that reduce environmental impact — from all-electric systems to AI-optimised spray paths that cut waste at every pass.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Our Team</span>
            <h2 className="s-h2">The people behind the engineering.</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={m.name} className={`team-card rv${i > 0 ? ` d${i % 4}` : ''}`}>
                <div className="team-photo" style={{ backgroundImage: `url(${m.photo})`, backgroundPosition: m.pos }} />
                <div className="team-body">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Sectors</span>
            <h2 className="s-h2">A few industries we serve.</h2>
          </div>
          <div className="sectors-grid">
            <div className="sector-card rv">
              <div className="sector-ico">
                <svg viewBox="0 0 24 24"><path d="M5 17H3a2 2 0 0 1-2-2v-3l2.5-6H20.5L23 12v3a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17" r="2.5"/><circle cx="16.5" cy="17" r="2.5"/><path d="M5.5 11h13"/></svg>
              </div>
              <div className="sector-nm">Automotive</div>
              <p className="sector-dc">Bodyshops, refinishing centres and OEM facilities across the UK and internationally.</p>
            </div>
            <div className="sector-card rv d1">
              <div className="sector-ico">
                <svg viewBox="0 0 24 24"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <div className="sector-nm">Aerospace</div>
              <p className="sector-dc">Aircraft component finishing facilities designed to aerospace specification, including international export projects.</p>
            </div>
            <div className="sector-card rv d2">
              <div className="sector-ico">
                <svg viewBox="0 0 24 24"><path d="M3 22V11l5-5v5l5-5v5l5-8v14"/><path d="M3 22h18"/><rect x="9" y="15" width="6" height="7"/></svg>
              </div>
              <div className="sector-nm">Industrial</div>
              <p className="sector-dc">Large-format finishing facilities for industrial components, commercial vehicles and specialist processes.</p>
            </div>
            <div className="sector-card rv d3">
              <div className="sector-ico">
                <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div className="sector-nm">Renewable Energy</div>
              <p className="sector-dc">Specialist coating facilities for wind, solar and other renewable energy component manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="cform-sec" id="contact">
        <div className="cform-inner">
          <div className="rv">
            <span className="s-lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Get In Touch</span>
            <h2 className="cform-h2">Talk to our team.</h2>
            <p className="cform-sub">Whether you are planning a new installation, exploring a bespoke project or simply want to learn more about Todd Engineering — we are ready to help.</p>
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
