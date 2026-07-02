'use client'

import { useState } from 'react'
import Link from 'next/link'

const industries = [
  {
    label: 'Automotive',
    heading: 'The industry\nwe were built for.\n30 years deep.',
    desc: 'From single-bay refinishing centres to high-volume production lines, Todd Engineering has been the trusted name in automotive spraybooth technology for three decades. Standard prep bays to AI-assisted finishing suites — we build it to last.',
    stats: [{ v: '10k+', l: 'Booths Installed' }, { v: '30+', l: 'Years Experience' }],
    cta: { href: '/projects', label: 'View Projects' },
    img: '/media/projects/autolux/hero.jpg',
    imgAlt: 'Automotive spraybooth finishing',
  },
  {
    label: 'Aerospace',
    heading: 'The finish has\nto be perfect.\nEvery time.',
    desc: 'Aerospace finishing demands a different standard. From wide-body components to precision defence parts, the tolerances are tighter and the stakes are higher. Trusted by Tier 1 suppliers and defence contractors for over 20 years.',
    stats: [{ v: '20+', l: 'Years in Aerospace' }, { v: 'Tier 1', l: 'OEM & Defence Ready' }],
    cta: { href: '/contact', label: 'Talk to Our Team' },
    img: '/media/aerospace.png',
    imgAlt: 'Aerospace spraybooth — Todd Engineering',
  },
  {
    label: 'Industrial',
    heading: 'Heavy duty.\nHigh precision.\nZero compromise.',
    desc: 'Industrial finishing comes in all shapes and scales. We build the environments to match — component coating lines to full-scale structural finishing facilities. Bespoke engineered to your process, footprint and throughput targets.',
    stats: [{ v: '100+', l: 'Bespoke Installs' }, { v: 'UK', l: 'Designed & Built' }],
    cta: { href: '/products', label: 'See Our Products' },
    img: '/media/greener-future.jpg',
    imgAlt: 'Industrial spray finishing',
  },
  {
    label: 'Renewable Energy',
    heading: 'Built for the\nconditions that\nmatter most.',
    desc: 'Wind turbine components, offshore structural parts and renewable energy infrastructure require specialist coating environments. We engineer systems capable of handling the scale, materials and precision the renewables sector demands.',
    stats: [{ v: 'UK', l: '& International' }, { v: 'Full', l: 'Turnkey Delivery' }],
    cta: { href: '/projects', label: 'View Projects' },
    img: '/media/windfarm.png',
    imgAlt: 'Wind farm spraybooth installation',
  },
  {
    label: 'Export',
    heading: 'British engineering.\nInstalled\nworldwide.',
    desc: 'Todd Engineering systems operate across the Middle East, Europe and beyond. We manage the full project lifecycle — design, manufacture, international installation and commissioning — ensuring the same standard of finish wherever in the world you need it.',
    stats: [{ v: '25+', l: 'Countries Served' }, { v: 'Global', l: 'Turnkey Projects' }],
    cta: { href: '/projects', label: 'View Projects' },
    img: '/media/projects/hills-helicopters/hero.jpg',
    imgAlt: 'British engineered — exported worldwide',
  },
]

export default function IndustriesSection() {
  const [active, setActive] = useState(0)
  const ind = industries[active]

  return (
    <section className="ind-sec">
      <div className="ind-tabs-wrap">
        <div className="ind-tabs">
          {industries.map((item, i) => (
            <button
              key={item.label}
              className={`ind-tab${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ind-panel active">
        <div className="ind-copy">
          <div className="ind-lbl">{ind.label}</div>
          <h2 className="ind-h" style={{ whiteSpace: 'pre-line' }}>{ind.heading}</h2>
          <p className="ind-p">{ind.desc}</p>
          <div className="ind-stats-row">
            <div>
              <div className="ind-stat-v">{ind.stats[0].v}</div>
              <div className="ind-stat-l">{ind.stats[0].l}</div>
            </div>
            <div className="ind-stat-divider"></div>
            <div>
              <div className="ind-stat-v">{ind.stats[1].v}</div>
              <div className="ind-stat-l">{ind.stats[1].l}</div>
            </div>
          </div>
          <Link href={ind.cta.href} className="btn btn-cta">{ind.cta.label}</Link>
        </div>
        <div className="ind-img">
          <img src={ind.img} alt={ind.imgAlt} />
        </div>
      </div>
    </section>
  )
}
