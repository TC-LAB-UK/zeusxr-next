import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spartan 2000 Series — Todd Engineering',
  description: 'The Spartan 2000 Series brings professional-grade downdraught spray finishing to smaller bodyshops and fast-fit operations.',
}

const data: ProductPageData = {
  slug: 'spartan-2000',
  title: 'Spartan 2000 Series',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Spartan 2000 Series',
  sub: 'Professional spray finishing. Compact footprint. No compromise.',
  heroBg: '/media/spartan.png',
  description: 'The Spartan 2000 Series brings professional-grade downdraught spray finishing to smaller bodyshops and fast-fit operations. Reliable performance, low running costs and a compact footprint that fits where others cannot.',
  pills: ['Downdraught Airflow', 'Gas-Fired Heating', 'LED Lighting', 'PLC Control', 'EU5 Filtration', 'Compact Footprint'],
  specRows: [
    { k: 'Application', v: 'Automotive spray finishing' },
    { k: 'Internal Dimensions', v: '5800mm × 3600mm × 2400mm (L×W×H)' },
    { k: 'Airflow', v: '16,000m³/hr' },
    { k: 'Air Changes', v: '4 per minute' },
    { k: 'Extraction Type', v: 'Downdraught' },
    { k: 'Heating', v: 'Gas-fired indirect' },
    { k: 'LED Lighting', v: '5000K / 90 CRI / +1200 lux' },
    { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based touchscreen' },
    { k: 'Construction', v: 'Double-skinned insulated panels — 30min fire rated' },
    { k: 'Pneumatic Supply', v: '5 bar' },
  ],
  gallery: [
    '/media/spartan-2000/5cfc345c-a89f-4e3b-b616-eaf82224c1da.jpg',
    '/media/spartan-2000/97443f4b-eee1-4523-aa88-709c92d579c6.jpg',
    '/media/spartan-2000/IMG_1393.jpg',
    '/media/spartan-2000/IMG_1394.jpg',
  ],
  icons: [
    { svg: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, label: 'Compact Footprint' },
    { svg: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>, label: 'Gas-Fired Heating' },
    { svg: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>, label: 'EU5 Filtration' },
    { svg: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></>, label: 'PLC Control' },
  ],
}

export default function Spartan2000Page() {
  return <ProductPageTemplate data={data} />
}
