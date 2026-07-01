import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Careers — Todd Engineering',
  description: 'Join a team of British engineers who take pride in building world-class spraybooth systems. We are growing and always looking for talented people.',
}

const PERKS = [
  {
    title: 'Grow With Us',
    desc: 'Many of our engineers started as apprentices and have grown with the company. We invest in the people who invest in us.',
    svg: <><circle cx="16" cy="10" r="5"/><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10"/></>,
  },
  {
    title: 'Real Engineering Work',
    desc: 'You will work on genuinely challenging engineering problems — from bespoke international installations to cutting-edge AI robotic systems.',
    svg: <><path d="M16 4l11 4.5V17c0 6.5-4.5 12.5-11 14-6.5-1.5-11-7.5-11-14V8.5L16 4z"/><polyline points="11 16 15 20 21 13"/></>,
  },
  {
    title: 'Competitive Package',
    desc: 'Competitive salary, company pension, 28 days holiday and a supportive team environment.',
    svg: <><rect x="4" y="7" width="24" height="18" rx="2"/><line x1="4" y1="13" x2="28" y2="13"/><line x1="9" y1="19" x2="14" y2="19"/></>,
  },
  {
    title: 'Meaningful Impact',
    desc: 'Your work contributes to the decarbonisation of UK industry through cleaner, more efficient finishing technology.',
    svg: <><path d="M6 22l4-4 4 4 10-10"/><path d="M4 16h24M16 4v4M16 24v4"/></>,
  },
]

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '160px 40px 100px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: "url('/media/zeus-xr-32.jpg') center/cover no-repeat", filter: 'brightness(.2)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 2 }} className="rv">
          <span className="s-lbl" style={{ color: 'rgba(255,255,255,.35)' }}>Todd Engineering</span>
          <h1 className="s-h2" style={{ fontSize: 'clamp(36px,5vw,68px)', color: '#fff', marginBottom: 16 }}>
            Build something<br />that lasts.
          </h1>
          <p className="s-p mw-600" style={{ color: 'rgba(255,255,255,.5)', marginBottom: 36 }}>
            Join a team of British engineers who take pride in building world-class spraybooth systems. We are growing and we are always looking for talented people.
          </p>
          <a href="#roles" className="btn btn-cta btn-lg">View Open Roles</a>
        </div>
      </section>

      {/* PERKS */}
      <section className="sec sec-alt">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Why Todd Engineering</span>
            <h2 className="s-h2">What it is like to work here.</h2>
          </div>
          <div className="perks-grid">
            {PERKS.map((p, i) => (
              <div key={i} className={`perk-card rv d${i}`}>
                <div className="perk-icon">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {p.svg}
                  </svg>
                </div>
                <h3 className="perk-title">{p.title}</h3>
                <p className="perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="sec">
        <div className="w-1300">
          <div className="about-strip rv">
            <div className="about-strip-body">
              <span className="s-lbl">Location</span>
              <h2 className="s-h2">Based in the heart of Britain.</h2>
              <p className="s-p">Based at Gregory Works in Rugeley, Staffordshire — with nationwide site-based opportunities across the UK. Our facility is home to our design team, fabrication and manufacturing operations, and the testing environment for the Zeus XR.</p>
            </div>
            <div className="about-strip-img rv d1">
              <img src="/media/made-in-britain.jpg" alt="Todd Engineering — Made in Britain" />
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="sec sec-alt" id="roles">
        <div className="w-1300">
          <div className="tc rv">
            <span className="s-lbl">Opportunities</span>
            <h2 className="s-h2">Current vacancies.</h2>
          </div>
          <div className="roles-empty rv" style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontSize: 15, color: 'var(--t2)', marginBottom: 8 }}>No vacancies listed at the moment.</p>
            <p style={{ fontSize: 14, color: 'var(--t3)' }}>We regularly recruit engineers, project managers and commercial roles. Send a speculative application and we will keep your details on file.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec-dark">
        <div className="w-1300">
          <div className="tc rv" style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="s-lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Interested in joining Todd Engineering?</span>
            <h2 className="s-h2" style={{ color: '#fff', marginBottom: 16 }}>Send us a speculative application.</h2>
            <p className="s-p" style={{ color: 'rgba(255,255,255,.5)', marginBottom: 36 }}>
              Tell us about yourself, what you do and what you are looking for. We will get back to you.
            </p>
            <a href="mailto:careers@toddengineering.co.uk" className="btn btn-cta btn-lg">
              careers@toddengineering.co.uk
            </a>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
