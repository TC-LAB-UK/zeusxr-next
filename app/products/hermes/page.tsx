import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hermes 3000 — Todd Engineering',
  description: 'The Hermes 3000 combines 22,000m³/hr downdraught airflow with rapid gas-fired heating and +1400 lux LED lighting. Fast cycle times for the busy independent bodyshop.',
}

const data: ProductPageData = {
  slug: 'hermes',
  title: 'Hermes 3000',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Hermes 3000',
  sub: 'Fast cycle times. Downdraught precision. Built for the independent bodyshop.',
  heroBg: '/media/hermes-hero.png',
  description: 'The Hermes 3000 combines 22,000m³/hr downdraught airflow with rapid gas-fired heating and +1400 lux LED lighting. Fast cycle times and reliable performance for the busy independent bodyshop.',
  pills: ['Downdraught Airflow', 'Gas-Fired Heating', '+1400 Lux LED', 'PLC Control', 'EU5 Filtration', 'Fast Cycle Times'],
  specRows: [
    { k: 'Application', v: 'Automotive spray finishing' },
    { k: 'Internal Dimensions', v: '6200mm × 3900mm × 2500mm (L×W×H)' },
    { k: 'Airflow', v: '22,000m³/hr' },
    { k: 'Air Changes', v: '5 per minute' },
    { k: 'Extraction Type', v: 'Downdraught' },
    { k: 'Heating', v: 'Gas-fired indirect — rapid heat-up' },
    { k: 'LED Lighting', v: '5000K / 90 CRI / +1400 lux' },
    { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based / 3.5" TFT Touchscreen' },
    { k: 'Construction', v: 'Double-skinned rockwool insulated panels — 30min fire rated' },
    { k: 'Pneumatic Supply', v: '5 bar' },
  ],
  gallery: [
    '/media/hermes/IMG_2532.jpg',
    '/media/hermes/IMG_2961.jpg',
    '/media/hermes/IMG_2962.jpg',
    '/media/hermes/IMG_2964.jpg',
  ],
  icons: [
    { svg: <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>, label: 'Fast Cycle Times' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Downdraught Airflow' },
    { svg: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>, label: 'Gas-Fired Heating' },
    { svg: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>, label: 'EU5 Filtration' },
  ],
}

export default function HermesPage() {
  return <ProductPageTemplate data={data} />
}
