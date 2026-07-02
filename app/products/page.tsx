'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const products = [
  {
    href: '/zeus-xr',
    img: '/media/zeus-xr-card.jpg',
    category: 'spray-booths',
    subcategory: 'electric',
    cat: 'Spray Booths',
    name: 'Zeus XR',
    desc: 'AI-assisted robotics, electrification and precision airflow — unified in one coordinated system.',
    cta: 'Learn More',
    badge: 'new' as const,
    badgeLabel: 'New',
  },
  {
    href: '/products/zeus-8000',
    img: '/media/zeus-8000.png',
    category: 'spray-booths',
    subcategory: 'electric',
    cat: 'Spray Booths',
    name: 'Zeus 8000 Series',
    desc: "The UK's #1 all-electric spray booth. Far infrared curing. Zero fossil fuels.",
    cta: 'Learn More',
    badge: 'featured' as const,
    badgeLabel: 'Electric',
  },
  {
    href: '/products/poseidon',
    img: '/media/poseidon.jpg',
    category: 'spray-booths',
    subcategory: 'gas',
    cat: 'Spray Booths',
    name: 'Poseidon',
    desc: 'High-specification. Rapid curing via Hydra-cure™. Intelligent control system. Engineered for demanding bodyshops.',
    cta: 'Learn More',
  },
  {
    href: '/products/olympian-1000',
    img: '/media/olympian-1000.jpg',
    category: 'spray-booths',
    subcategory: 'gas',
    cat: 'Spray Booths',
    name: 'Olympian 1000 Series',
    desc: 'Exceptional value. Full specification. Low cost, easy installation. Built for start-ups and growing bodyshops.',
    cta: 'Learn More',
  },
  {
    href: '/products/spartan-2000',
    img: '/media/spartan.png',
    category: 'spray-booths',
    subcategory: 'gas',
    cat: 'Spray Booths',
    name: 'Spartan 2000 Series',
    desc: 'Premium rear extraction at an accessible price. 20,000m³/hr airflow. The workhorse of any bodyshop.',
    cta: 'Enquire',
  },
  {
    href: '/products/titan-cv',
    img: '/media/titan.jpg',
    category: 'spray-booths',
    subcategory: 'gas',
    cat: 'Spray Booths',
    name: 'Titan CV Series',
    desc: 'Fully customisable layout and dimensions. Engineered for large commercial vehicles and industrial refinishing.',
    cta: 'Enquire',
  },
  {
    href: '/products/nemesis-facility',
    img: '/media/products/smart-mixing/2.png',
    category: 'spray-booths',
    subcategory: 'gas',
    cat: 'Spray Booths',
    name: 'Nemesis Facility',
    desc: 'Integrated spray booth, Hades prep bays and track-and-skate system. End-to-end repair workflow in one solution.',
    cta: 'Enquire',
  },
  {
    href: '/products/paint-mixing-room',
    img: '/media/products/smart-mixing/3.png',
    category: 'paint-mixing',
    cat: 'Paint Mixing',
    name: 'Paint Mixing Room',
    desc: '50mm double-skinned insulated panels, 1,750+ lux LED colour matching, extraction at bench and floor level. 30-min fire rated.',
    cta: 'Enquire',
  },
  {
    href: '/products/hades-prep-bay',
    img: '/media/products/nemesis/hero.png',
    category: 'preparation',
    cat: 'Preparation',
    name: 'Hades Prep Bay',
    desc: 'Curtained preparation area with LED lighting, rear or side extraction and balanced cabin pressure. Ideal for priming and panel repairs.',
    cta: 'Enquire',
  },
  {
    href: '/products/worky-dust-extraction',
    img: '/media/products/apollo-wheelcabin/3.jpg',
    category: 'preparation',
    cat: 'Preparation',
    name: 'WORKY Dust Extraction',
    desc: 'In collaboration with WORKY Italy. Captures and filters sanding dust, fumes and particulates for a clean, safe workshop environment.',
    cta: 'Enquire',
  },
  {
    href: '/products/apollo-wheelcabin',
    img: '/media/products/worky/2.png',
    category: 'smart-repairs',
    cat: 'Smart Repairs',
    name: 'Apollo WheelCabin',
    desc: 'Fully equipped workstation for cosmetic wheel repair and maintenance. Fully filtered rear wall. Heated and unheated versions available.',
    cta: 'Enquire',
  },
  {
    href: '/products/nemesis-smart-repair',
    img: '/media/products/smart-mixing/2.png',
    category: 'smart-repairs',
    cat: 'Smart Repairs',
    name: 'Nemesis Smart Repair',
    desc: 'Integrated gas or electric booth with Hades prep bays on a track system. Designed to maximise throughput and minimise turnaround time.',
    cta: 'Enquire',
  },
  {
    href: '/products/zeus-electric-upgrade',
    img: '/media/products/apollo-wheelcabin/2.jpg',
    category: 'accessories',
    cat: 'Accessories',
    name: 'Zeus Electric Upgrade',
    desc: 'Retrofit your existing spray booth with full electric operation. Far infrared curing technology. Zero fossil fuels. No new build required.',
    cta: 'Enquire',
    badge: 'featured' as const,
    badgeLabel: 'Retrofit',
  },
  {
    href: '/products/wall-protection-system',
    img: '/media/products/worky/hero.png',
    category: 'accessories',
    cat: 'Accessories',
    name: 'Wall Protection System',
    desc: 'Purpose-designed spraybooth wall protection. Reduces cleaning time, prevents overspray build-up and extends booth service life.',
    cta: 'Enquire',
  },
  {
    href: '/products/pg-90e',
    img: '/media/pg-90e/PG-90E[00_00_46][20240704-090557].png',
    category: 'robotics',
    cat: 'Robotics',
    name: 'PG-90E',
    desc: 'Automated robotic spray system. Precision application, repeatable results and reduced material waste across high-volume finishing operations.',
    cta: 'Enquire',
    badge: 'new' as const,
    badgeLabel: 'Robotic',
  },
]

type Filter = 'all' | 'spray-booths' | 'electric-booths' | 'gas-booths' | 'paint-mixing' | 'preparation' | 'smart-repairs' | 'accessories' | 'robotics'

function matchFilter(p: typeof products[0], f: Filter) {
  if (f === 'all') return true
  if (f === 'electric-booths') return p.subcategory === 'electric'
  if (f === 'gas-booths') return p.subcategory === 'gas'
  return p.category === f
}

const counts: Record<Filter, number> = {
  all: products.length,
  'spray-booths': products.filter(p => p.category === 'spray-booths').length,
  'electric-booths': products.filter(p => p.subcategory === 'electric').length,
  'gas-booths': products.filter(p => p.subcategory === 'gas').length,
  'paint-mixing': products.filter(p => p.category === 'paint-mixing').length,
  'preparation': products.filter(p => p.category === 'preparation').length,
  'smart-repairs': products.filter(p => p.category === 'smart-repairs').length,
  'accessories': products.filter(p => p.category === 'accessories').length,
  'robotics': products.filter(p => p.category === 'robotics').length,
}

export default function ProductsPage() {
  const [active, setActive] = useState<Filter>('all')

  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.06 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const visible = products.filter(p => matchFilter(p, active))

  function Btn({ f, label, sub }: { f: Filter; label: string; sub?: boolean }) {
    return (
      <button
        className={`filter-btn${sub ? ' filter-sub' : ''}${active === f ? ' active' : ''}`}
        onClick={() => setActive(f)}
      >
        {label}
        <span className="filter-count">{counts[f]}</span>
      </button>
    )
  }

  function MobilePill({ f, label, sub }: { f: Filter; label: string; sub?: boolean }) {
    return (
      <button
        className={`mobile-pill${sub ? ' mobile-pill-sub' : ''}${active === f ? ' active' : ''}`}
        onClick={() => setActive(f)}
      >
        {label}
      </button>
    )
  }

  return (
    <>
      <header className="page-header">
        <div className="page-header-inner">
          <div>
            <p className="page-eyebrow">Todd Engineering</p>
            <h1 className="page-h1">Product Catalogue</h1>
            <p className="page-meta">{products.length} products across 6 categories</p>
          </div>
          <Link href="/contact" className="btn btn-cta">Talk to an Engineer</Link>
        </div>
      </header>

      {/* Mobile pills */}
      <div className="mobile-filters">
        <MobilePill f="all" label="All Products" />
        <MobilePill f="spray-booths" label="Spray Booths" />
        <MobilePill f="electric-booths" label="⚡ Electric" sub />
        <MobilePill f="gas-booths" label="🔥 Gas" sub />
        <MobilePill f="paint-mixing" label="Paint Mixing" />
        <MobilePill f="preparation" label="Preparation" />
        <MobilePill f="smart-repairs" label="Smart Repairs" />
        <MobilePill f="accessories" label="Accessories" />
        <MobilePill f="robotics" label="Robotics" />
      </div>

      <div className="cat-layout">
        {/* Sidebar */}
        <aside className="cat-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label">Filter by</div>
            <Btn f="all" label="All Products" />
          </div>
          <div className="sidebar-div" />
          <div className="sidebar-section">
            <div className="sidebar-label">Category</div>
            <Btn f="spray-booths" label="Spray Booths" />
            <Btn f="electric-booths" label="Electric" sub />
            <Btn f="gas-booths" label="Gas" sub />
            <Btn f="paint-mixing" label="Paint Mixing" />
            <Btn f="preparation" label="Preparation" />
            <Btn f="smart-repairs" label="Smart Repairs" />
            <Btn f="accessories" label="Accessories" />
            <Btn f="robotics" label="Robotics" />
          </div>
          <div className="sidebar-div" />
          <div className="sidebar-cta">
            <div className="sidebar-cta-h">Need advice?</div>
            <p className="sidebar-cta-p">Our engineers will match the right system to your operation.</p>
            <Link href="/contact" className="sidebar-cta-btn">Talk to us →</Link>
          </div>
        </aside>

        {/* Product grid */}
        <div className="prod-grid">
          {visible.length === 0 && (
            <div className="no-results">
              <h3>No products in this category yet</h3>
              <p>Speak to our team about bespoke solutions.</p>
            </div>
          )}
          {visible.map((p, i) => (
            <Link key={p.href} href={p.href} className={`prod-card rv${i > 0 ? ` d${i % 3}` : ''}`}>
              <div className="prod-img-wrap">
                <img src={p.img} alt={p.name} loading={i < 6 ? 'eager' : 'lazy'} />
              </div>
              <div className="prod-card-body">
                <div className="prod-cat-pill">{p.cat}</div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-desc">{p.desc}</div>
                <div className="prod-card-footer">
                  <span className="prod-cta">
                    {p.cta}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {p.badge === 'new' && (
                    <span className="prod-badge-new">{p.badgeLabel}</span>
                  )}
                  {p.badge === 'featured' && (
                    <span className="prod-badge-featured">{p.badgeLabel}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
