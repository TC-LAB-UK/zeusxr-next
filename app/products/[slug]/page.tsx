'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { supabase, ORG_ID } from '@/lib/supabase'
import { useParams } from 'next/navigation'

const SUPABASE_LEADS = 'https://gmpqytfjcmgmrhqocdyk.supabase.co/rest/v1/leads'
const SUPABASE_KEY = 'sb_publishable_p5xmlGJewiHl-jaXU_QNxw_qUZqHijA'

// Product-specific static data (specs, gallery images, icon strips)
const PRODUCT_DATA: Record<string, {
  heroBg?: string
  galleryImages?: string[]
  specRows?: { k: string; v: string }[]
  icons?: { label: string }[]
}> = {
  'zeus-8000': {
    heroBg: '/media/zeus-8000.png',
    specRows: [
      { k: 'Application', v: 'Automotive spray finishing' },
      { k: 'Internal Dimensions', v: '6800mm × 3900mm × 2500mm (L×W×H)' },
      { k: 'External Dimensions', v: '7400mm × 4000mm × 3700mm (L×W×H)' },
      { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz) / 63A' },
      { k: 'Airflow', v: '25,000m³/hr' },
      { k: 'Air Changes', v: '5 per minute' },
      { k: 'Extraction Type', v: 'Downdraught / Rear Extract' },
      { k: 'Heating', v: 'Far Infrared (FIR) electric — zero fossil fuels' },
      { k: 'FIR Efficiency', v: '98.5% electrically efficient / 75,000hr rated' },
      { k: 'LED Lighting', v: '5000K / 90CRI / +1800 lux' },
      { k: 'Construction', v: 'Double-skinned rockwool insulated panels — 30min fire rated' },
      { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
      { k: 'Control', v: 'PLC-based / 3.5" TFT Touchscreen' },
    ],
    icons: [
      { label: 'All Electric FIR Curing' },
      { label: 'Zero Fossil Fuels' },
      { label: '25,000m³/hr Airflow' },
      { label: '+1800 Lux LED' },
    ],
  },
  'poseidon': {
    heroBg: '/media/poseidon.jpg',
    specRows: [
      { k: 'Application', v: 'Automotive spray finishing' },
      { k: 'Curing System', v: 'Hydra-cure™ rapid curing' },
      { k: 'Airflow', v: '25,000m³/hr' },
      { k: 'Extraction', v: 'Downdraught / Rear Extract' },
      { k: 'Control', v: 'Intelligent PLC touchscreen' },
      { k: 'LED Lighting', v: 'High-output 5000K' },
      { k: 'Construction', v: '50mm rockwool insulated panels' },
    ],
    icons: [
      { label: 'Hydra-cure™ Curing' },
      { label: 'Intelligent Control' },
      { label: 'High Specification' },
      { label: 'Made in Britain' },
    ],
  },
  'olympian-1000': {
    heroBg: '/media/olympian-1000.jpg',
    specRows: [
      { k: 'Application', v: 'Automotive spray finishing' },
      { k: 'Airflow', v: '25,000m³/hr' },
      { k: 'Extraction', v: 'Downdraught / Rear Extract' },
      { k: 'Heating', v: 'Gas fired indirect heat exchanger' },
      { k: 'LED Lighting', v: '5000K high output' },
      { k: 'Construction', v: '50mm insulated panels' },
      { k: 'Control', v: 'Digital touchscreen controller' },
    ],
    icons: [
      { label: 'Full Specification' },
      { label: 'Easy Installation' },
      { label: 'Excellent Value' },
      { label: 'Made in Britain' },
    ],
  },
  'spartan-2000': {
    heroBg: '/media/spartan.png',
    specRows: [
      { k: 'Airflow', v: '20,000m³/hr' },
      { k: 'Extraction', v: 'Rear extraction' },
      { k: 'Heating', v: 'Gas fired direct / indirect' },
      { k: 'Construction', v: 'Steel panel construction' },
      { k: 'Lighting', v: 'LED 5000K' },
    ],
    icons: [
      { label: '20,000m³/hr Airflow' },
      { label: 'Rear Extraction' },
      { label: 'Gas Fired' },
      { label: 'Made in Britain' },
    ],
  },
  'titan-cv': {
    heroBg: '/media/titan.jpg',
    specRows: [
      { k: 'Application', v: 'Commercial vehicle & industrial refinishing' },
      { k: 'Configuration', v: 'Fully customisable layout and dimensions' },
      { k: 'Extraction', v: 'Downdraught or crossflow options' },
      { k: 'Construction', v: 'Heavy duty steel frame' },
    ],
    icons: [
      { label: 'Custom Dimensions' },
      { label: 'CV & Industrial' },
      { label: 'Flexible Layout' },
      { label: 'Made in Britain' },
    ],
  },
}

const ICON_SVG = [
  <polyline key="0" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  <path key="1" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  <>
    <path key="2a" d="M9.59 4.59A2 2 0 1 1 11 8H2"/>
    <path key="2b" d="M10.59 19.41A2 2 0 1 0 12 16H2"/>
    <path key="2c" d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/>
  </>,
  <>
    <circle key="3a" cx="12" cy="12" r="5"/>
    <line key="3b" x1="12" y1="1" x2="12" y2="3"/>
    <line key="3c" x1="12" y1="21" x2="12" y2="23"/>
    <line key="3d" x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line key="3e" x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line key="3f" x1="1" y1="12" x2="3" y2="12"/>
    <line key="3g" x1="21" y1="12" x2="23" y2="12"/>
  </>,
]

function ProductPageClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [galIdx, setGalIdx] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    supabase.from('products').select('*').eq('slug', slug).eq('org_id', ORG_ID).single()
      .then(({ data }) => { setProduct(data); setLoading(false) })
  }, [slug])

  useEffect(() => {
    if (!product) return
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [product])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) { formRef.current?.reportValidity(); return }
    const fd = new FormData(formRef.current!)
    setSending(true)
    try {
      await fetch(SUPABASE_LEADS, {
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
          source: `product_${slug}`,
          message: fd.get('message') || null,
          status: 'new',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
    } catch (_) {}
    setSending(false)
    setSent(true)
  }

  function goTo(n: number) {
    const total = gallery.length
    const next = ((n % total) + total) % total
    setGalIdx(next)
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: next * trackRef.current.offsetWidth, behavior: 'smooth' })
    }
  }

  if (loading) return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '2px solid var(--bdr)', borderTopColor: 'var(--green)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )

  if (!product || product.status !== 'published') return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: 'var(--t1)' }}>Product not found</h1>
      <Link href="/products" className="btn btn-cta">View all products</Link>
    </div>
  )

  const extra = PRODUCT_DATA[slug] || {}
  const heroBg = extra.heroBg || product.cover_image_url || ''
  const gallery: string[] = product.gallery_images?.length
    ? product.gallery_images
    : extra.galleryImages?.length
      ? extra.galleryImages
      : [heroBg].filter(Boolean)

  const specRows = extra.specRows || []
  const icons = extra.icons || (product.key_features || []).slice(0, 4).map((f: string) => ({ label: f }))

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero-grad" />
        <div className="hero-content">
          <p className="hero-eyebrow">Todd Engineering — Spraybooth Systems</p>
          <h1 className="hero-h1">{product.name}</h1>
          <p className="hero-sub">{product.tagline}</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-cta btn-lg">Get a Quote</Link>
            <a href="#specs" className="btn btn-ghost btn-lg">View Specs</a>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="specs-sec" id="specs">
        <div className="specs-layout">
          <div className="specs-body rv">
            <span className="s-lbl">Technical Specifications</span>
            <h2 className="s-h2">Precision engineering.<br />Every detail.</h2>
            {product.description && (
              <p className="s-p" style={{ marginBottom: 24 }}>
                {typeof product.description === 'string'
                  ? product.description
                  : product.description?.content?.[0]?.content?.map((c: any) => c.text).join('') || ''}
              </p>
            )}
            {product.key_features?.length > 0 && (
              <div className="pills" style={{ marginBottom: 28 }}>
                {product.key_features.map((f: string, i: number) => (
                  <span key={i} className="pill">{f}</span>
                ))}
              </div>
            )}
            <Link href="/contact" className="btn btn-cta" style={{ marginBottom: 36, display: 'inline-flex' }}>
              Request a Quote
            </Link>
            {specRows.length > 0 && (
              <div className="spec-tbl">
                {specRows.map((r: { k: string; v: string }, i: number) => (
                  <div key={i} className="spec-row">
                    <div className="sk">{r.k}</div>
                    <div className="sv">{r.v}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="specs-render rv d1">
            <img src={heroBg} alt={`${product.name} — product render`} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="pg-gallery-sec">
          <div className="pg-gallery-track" ref={trackRef}>
            {gallery.map((src: string, i: number) => (
              <div key={i} className="pg-gallery-slide">
                <img src={src} alt={`${product.name} ${i + 1}`} draggable={false} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="pg-gallery-controls">
            <button className="pg-arrow" onClick={() => goTo(galIdx - 1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <div className="pg-dots">
              {gallery.slice(0, 20).map((_: string, i: number) => (
                <button key={i} className={`pg-dot${i === galIdx ? ' pg-active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <button className="pg-arrow" onClick={() => goTo(galIdx + 1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* ICON STRIP */}
      {icons.length > 0 && (
        <section className="pg-icons-sec rv">
          <div className="pg-icons-row">
            {icons.map((ic: { label: string }, i: number) => (
              <div key={i} className="pg-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  {ICON_SVG[i % ICON_SVG.length]}
                </svg>
                <span className="pg-icon-label">{ic.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT FORM */}
      <section className="contact-sec" id="contact">
        <div className="contact-inner">
          <div className="contact-body rv">
            <span className="s-lbl-light">Get in Touch</span>
            <h2 className="contact-h2">Interested in the<br />{product.name}?</h2>
            <p className="contact-sub">Talk to one of our engineers. We&rsquo;ll understand your operation, answer your questions and provide a quote tailored to your requirements.</p>
            <div className="contact-details">
              <div className="cd-item">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M2 4h16v12H2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <polyline points="2,4 10,11 18,4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:sales@toddengineering.co.uk">sales@toddengineering.co.uk</a>
              </div>
              <div className="cd-item">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M3 5a1 1 0 0 1 1-1h3l1.5 3.5-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2L16 13v3a1 1 0 0 1-1 1C7.268 17 3 12.732 3 7V5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:08450176465">0845 017 6465</a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap rv d1">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <svg viewBox="0 0 52 52" fill="none" style={{ width: 56, height: 56, margin: '0 auto 20px', display: 'block' }}>
                  <circle cx="26" cy="26" r="25" stroke="var(--green)" strokeWidth="1.5"/>
                  <polyline points="14,27 22,35 38,18" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Enquiry sent.</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.5)' }}>A member of the team will be in touch shortly.</p>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name <span className="req">*</span></label>
                    <input type="text" name="name" placeholder="John Smith" required />
                  </div>
                  <div className="cf-group">
                    <label>Company <span className="req">*</span></label>
                    <input type="text" name="company" placeholder="ABC Bodyshop" required />
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
                  <label>Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your current setup, throughput requirements, timescales…" />
                </div>
                <button type="submit" className="btn btn-cta btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                  {sending ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p style={{ fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,.3)', textAlign: 'center', marginTop: 12 }}>
                  By submitting you agree to be contacted by Todd Engineering. We&rsquo;ll never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProductPage() {
  const params = useParams()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug as string) || ''
  return <ProductPageClient slug={slug} />
}
