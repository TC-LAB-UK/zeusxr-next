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
    slug: 'sandal-bmw',
    title: 'Sandal BMW — Poseidon Dual Installation',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/o5bdbnbj/img_3891.png',
  },
  {
    slug: 'smallest-cog',
    title: 'The Smallest COG — Richard Hammond\'s Workshop',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/3emjgs10/eob_2047eob.jpg',
  },
  {
    slug: 'hills-helicopters',
    title: 'Hills Helicopters — HX50 Facility',
    sector: 'Aerospace',
    img: 'https://www.toddengineering.co.uk/media/tqqcixtw/img_4588.jpg',
  },
  {
    slug: 'sail-gp',
    title: 'Sail GP — Zeus All-Electric Booth',
    sector: 'Marine',
    img: 'https://www.toddengineering.co.uk/media/dxkgo214/photo-2024-08-01-07-25-52.jpg',
  },
  {
    slug: 'wfel',
    title: 'WFEL — Boxer Armoured Vehicle Facility',
    sector: 'Defence',
    img: 'https://www.toddengineering.co.uk/media/djnnhlug/4d93414f-fc17-4b6c-bbf6-383936422a79.jpg',
  },
  {
    slug: 'gemini-taunton',
    title: 'Gemini Taunton — Turnkey Installation',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/djua12au/b6bb37d0-f229-4e66-bc42-e1a00e4585ef.jpg',
  },
  {
    slug: 'al-haddad-motors',
    title: 'Al Haddad Motors — Mercedes-Benz Bahrain',
    sector: 'Export',
    img: 'https://www.toddengineering.co.uk/media/wufdmpr5/out.jpg',
  },
  {
    slug: 'angus-mackinnon',
    title: 'Angus MacKinnon — Carbon-Neutral Bodyshop',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/iznnq2t3/img_4667.png',
  },
  {
    slug: 'rhodes',
    title: 'Rhodes — Carbon-Neutral Facility',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/0bgj5ymj/1729781701010.jpeg',
  },
  {
    slug: 'rmd-kwikform',
    title: 'RMD Kwikform — Titan CV Installation',
    sector: 'Industrial',
    img: 'https://www.toddengineering.co.uk/media/fpkhzkzl/49efedba-b3f9-4d7d-9496-0f4008c5ef61.jpg',
  },
  {
    slug: 'hgv-solutions',
    title: 'HGV Solutions — Zeus Commercial Booth',
    sector: 'Industrial',
    img: 'https://www.toddengineering.co.uk/media/vlwgsbjn/de3f3394-bf58-43d7-b0ab-1112b14c2570.png',
  },
  {
    slug: 'autolux',
    title: 'Autolux Body & Paint — Sustainable Upgrade',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/0p1e0lvn/462264937_122122202240454025_4076624584352154895_n.jpg',
  },
  {
    slug: 'jet-glow',
    title: 'Jet Glow — Integrated Solution',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/agslr5np/photo-2024-08-02-12-48-05-6.jpg',
  },
  {
    slug: 'mg-accident-repair',
    title: 'MG Accident Repair Centre',
    sector: 'Automotive',
    img: 'https://www.toddengineering.co.uk/media/a0khul2b/dsc07408.png',
  },
  {
    slug: 'k-and-s',
    title: 'K&S — Bespoke Zeus Spraybooth Installation',
    sector: 'Automotive',
    img: '/media/zeus-xr-21.jpg',
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
