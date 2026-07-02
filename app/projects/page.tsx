import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Projects — Todd Engineering',
  description: 'Explore Todd Engineering case studies — spraybooth installations across automotive, aerospace, renewable energy and defence sectors.',
}

const PROJECTS = [
  {
    slug: 'uk-offshore-wind-farm',
    title: 'Seah Wind — UK\'s Largest Offshore Wind Farm',
    sector: 'Renewable Energy',
    img: '/media/windfarm.png',
  },
  {
    slug: 'bahrain-aerospace-facility',
    title: 'Bahrain Aerospace Facility',
    sector: 'Aerospace',
    img: '/media/aerospace.png',
  },
  {
    slug: 'k-and-s',
    title: 'K&S — Bespoke Zeus Spraybooth Installation',
    sector: 'Automotive',
    img: '/media/projects/k-and-s/23.jpg',
  },
  {
    slug: 'smallest-cog',
    title: 'The Smallest COG — Richard Hammond\'s Workshop',
    sector: 'Automotive',
    img: '/media/projects/smallest-cog/hero.jpg',
  },
  {
    slug: 'hills-helicopters',
    title: 'Hills Helicopters — HX50 Facility',
    sector: 'Aerospace',
    img: '/media/projects/hills-helicopters/hero.jpg',
  },
  {
    slug: 'sail-gp',
    title: 'Sail GP — Zeus All-Electric Booth',
    sector: 'Marine',
    img: '/media/projects/sail-gp/hero.jpg',
  },
  {
    slug: 'wfel',
    title: 'WFEL — Boxer Armoured Vehicle Facility',
    sector: 'Defence',
    img: '/media/projects/wfel/hero.jpg',
  },
  {
    slug: 'gemini-taunton',
    title: 'Gemini Taunton — Turnkey Installation',
    sector: 'Automotive',
    img: '/media/projects/gemini-taunton/hero.jpg',
  },
  {
    slug: 'al-haddad-motors',
    title: 'Al Haddad Motors — Mercedes-Benz Bahrain',
    sector: 'Export',
    img: '/media/projects/al-haddad-motors/hero.jpg',
  },
  {
    slug: 'angus-mackinnon',
    title: 'Angus MacKinnon — Carbon-Neutral Bodyshop',
    sector: 'Automotive',
    img: '/media/projects/angus-mackinnon/hero.png',
  },
  {
    slug: 'rhodes',
    title: 'Rhodes — Carbon-Neutral Facility',
    sector: 'Automotive',
    img: '/media/projects/rhodes/hero.jpg',
  },
  {
    slug: 'rmd-kwikform',
    title: 'RMD Kwikform — Titan CV Installation',
    sector: 'Industrial',
    img: '/media/projects/rmd-kwikform/hero.jpg',
  },
  {
    slug: 'hgv-solutions',
    title: 'HGV Solutions — Zeus Commercial Booth',
    sector: 'Industrial',
    img: '/media/projects/hgv-solutions/hero.png',
  },
  {
    slug: 'autolux',
    title: 'Autolux Body & Paint — Sustainable Upgrade',
    sector: 'Automotive',
    img: '/media/projects/autolux/hero.jpg',
  },
  {
    slug: 'jet-glow',
    title: 'Jet Glow — Integrated Solution',
    sector: 'Automotive',
    img: '/media/projects/jet-glow/hero.jpg',
  },
  {
    slug: 'mg-accident-repair',
    title: 'MG Accident Repair Centre',
    sector: 'Automotive',
    img: '/media/projects/mg-accident-repair/hero.png',
  },
  {
    slug: 'sandal-bmw',
    title: 'Sandal BMW — Poseidon Dual Installation',
    sector: 'Automotive',
    img: '/media/projects/sandal-bmw/hero.png',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Case Studies</p>
          <h1>Our Projects</h1>
          <p>From wind energy to aerospace, motorsport to volume automotive — work that defines our capability.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w-1300">
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={`proj-card rv d${i % 3}`}>
                <div
                  className="proj-bg"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div className="proj-overlay">
                  <p className="proj-sector">{p.sector}</p>
                  <h2 className="proj-title">{p.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  )
}
