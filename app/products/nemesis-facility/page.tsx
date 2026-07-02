import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nemesis Facility — Todd Engineering',
  description: 'The Nemesis Facility is a complete multi-zone automotive refinishing solution — main spray booth, prep bay and mixing room delivered as a single turn-key project.',
}

const data: ProductPageData = {
  slug: 'nemesis-facility',
  title: 'Nemesis Facility',
  eyebrow: 'Todd Engineering — Complete Facility Solutions',
  h1: 'Nemesis Facility',
  sub: 'Complete multi-zone refinishing. One supplier. Turn-key delivery.',
  heroBg: '/media/products/smart-mixing/2.png',
  description: 'The Nemesis Facility is a complete multi-zone automotive refinishing solution — main spray booth, prep bay and mixing room delivered as a single turn-key project. Fully bespoke to your site and throughput requirements.',
  pills: ['Multi-Zone Facility', 'Main Spray Booth', 'Prep Bay Included', 'Mixing Room Included', 'Bespoke Design', 'Turn-Key Delivery'],
  specRows: [
    { k: 'Application', v: 'Multi-zone automotive refinishing' },
    { k: 'Configuration', v: 'Main booth + prep bay + mixing room' },
    { k: 'Design', v: 'Fully bespoke to site — any size' },
    { k: 'Spray Booth Airflow', v: 'Up to 25,000m³/hr' },
    { k: 'Heating', v: 'Gas-fired or electric — project dependent' },
    { k: 'LED Lighting', v: '5000K / 90 CRI / +1400 lux across all zones' },
    { k: 'Filtration', v: 'EU5 input / Two-stage extract — all zones' },
    { k: 'Control', v: 'Integrated PLC management system' },
    { k: 'Construction', v: 'Double-skinned insulated panels — 30min fire rated' },
    { k: 'Planning & Compliance', v: 'Todd Engineering manage full planning process' },
    { k: 'Delivery', v: 'Complete turn-key installation and commissioning' },
  ],
  gallery: [
    '/media/nemesis-facility/5E7C5362-DD45-4C7B-927F-0F0DD36C3C21.jpg',
    '/media/nemesis-facility/6F2B7C4A-EC2E-4C3D-9404-0C8FA8F2049D.jpg',
    '/media/nemesis-facility/F4346C5A-7790-4A53-98E7-73AC26B29222.jpg',
    '/media/nemesis-facility/IMG_0734.jpg',
    '/media/nemesis-facility/IMG_0737.jpg',
    '/media/nemesis-facility/IMG_0749.jpg',
    '/media/nemesis-facility/IMG_0750.jpg',
    '/media/nemesis-facility/IMG_3646.jpg',
    '/media/nemesis-facility/IMG_3647.jpg',
    '/media/nemesis-facility/IMG_3648.jpg',
    '/media/nemesis-facility/IMG_3650.jpg',
    '/media/nemesis-facility/IMG_3653.jpg',
    '/media/nemesis-facility/IMG_3656.jpg',
    '/media/nemesis-facility/IMG_3657.jpg',
    '/media/nemesis-facility/IMG_3664.jpg',
    '/media/nemesis-facility/IMG_3665.jpg',
  ],
  icons: [
    { svg: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>, label: 'Multi-Zone Facility' },
    { svg: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, label: 'Spray Booth + Prep Bay' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Mixing Room Included' },
    { svg: <><polyline points="20 7 9 18 4 13"/></>, label: 'Turn-Key Delivery' },
  ],
}

export default function NemesisFacilityPage() {
  return <ProductPageTemplate data={data} />
}
