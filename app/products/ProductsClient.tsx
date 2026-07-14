'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Product = {
  id: string
  name: string
  slug: string
  tagline: string | null
  cover_image_url: string | null
  category: string | null
}

function toKey(cat: string | null): string {
  if (!cat) return ''
  return cat.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

const STANDALONE: Record<string, string> = {
  'zeus-xr': '/zeus-xr',
}

function hrefFor(slug: string) {
  return STANDALONE[slug] ?? `/products/${slug}`
}

const CATEGORY_ORDER = [
  'Spray Booths',
  'Preparation Rooms',
  'Paint Mixing',
  'Smart Repairs',
  'Commercial Vehicles',
  'Accessories',
  'Robotics',
]

export default function ProductsClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState('all')

  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.06 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [active])

  const dbCategories = [...new Set(products.map(p => p.category).filter(Boolean))] as string[]
  const orderedCategories = [
    ...CATEGORY_ORDER.filter(c => dbCategories.includes(c)),
    ...dbCategories.filter(c => !CATEGORY_ORDER.includes(c)),
  ]

  const visible = active === 'all'
    ? products
    : products.filter(p => toKey(p.category) === active)

  function count(cat: string) {
    return products.filter(p => toKey(p.category) === cat).length
  }

  function Btn({ filterKey, label, sub }: { filterKey: string; label: string; sub?: boolean }) {
    const isActive = active === filterKey
    return (
      <button
        className={`filter-btn${sub ? ' filter-sub' : ''}${isActive ? ' active' : ''}`}
        onClick={() => setActive(filterKey)}
      >
        {label}
        <span className="filter-count">
          {filterKey === 'all' ? products.length : count(filterKey)}
        </span>
      </button>
    )
  }

  function MobilePill({ filterKey, label }: { filterKey: string; label: string }) {
    return (
      <button
        className={`mobile-pill${active === filterKey ? ' active' : ''}`}
        onClick={() => setActive(filterKey)}
      >
        {label}
      </button>
    )
  }

  return (
    <>
      <div className="mobile-filters">
        <MobilePill filterKey="all" label="All Products" />
        {orderedCategories.map(cat => (
          <MobilePill key={cat} filterKey={toKey(cat)} label={cat} />
        ))}
      </div>

      <div className="cat-layout">
        <aside className="cat-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label">Filter by</div>
            <Btn filterKey="all" label="All Products" />
          </div>
          {orderedCategories.length > 0 && (
            <>
              <div className="sidebar-div" />
              <div className="sidebar-section">
                <div className="sidebar-label">Category</div>
                {orderedCategories.map(cat => (
                  <Btn key={cat} filterKey={toKey(cat)} label={cat} />
                ))}
              </div>
            </>
          )}
          <div className="sidebar-div" />
          <div className="sidebar-cta">
            <div className="sidebar-cta-h">Need advice?</div>
            <p className="sidebar-cta-p">Our engineers will match the right system to your operation.</p>
            <Link href="/contact" className="sidebar-cta-btn">Talk to us →</Link>
          </div>
        </aside>

        <div className="prod-grid">
          {visible.length === 0 && (
            <div className="no-results">
              <h3>No products in this category yet</h3>
              <p>Speak to our team about bespoke solutions.</p>
            </div>
          )}
          {visible.map((p, i) => (
            <Link key={p.id} href={hrefFor(p.slug)} className={`prod-card rv${i > 0 ? ` d${i % 3}` : ''}`}>
              <div className="prod-img-wrap">
                {p.cover_image_url
                  ? <img src={p.cover_image_url} alt={p.name} loading={i < 6 ? 'eager' : 'lazy'} />
                  : <div style={{ background: '#f0f0f0', width: '100%', height: '100%' }} />
                }
              </div>
              <div className="prod-card-body">
                {p.category && <div className="prod-cat-pill">{p.category}</div>}
                <div className="prod-name">{p.name}</div>
                {p.tagline && <div className="prod-desc">{p.tagline}</div>}
                <div className="prod-card-footer">
                  <span className="prod-cta">
                    Learn More
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
