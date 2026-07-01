import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titan CV Series — Todd Engineering',
  description: 'The Titan CV Series is engineered for commercial vehicle spray finishing — trucks, vans, buses and specialist vehicles. Bespoke dimensions, 40,000m³/hr+ airflow and full-width doors.',
}

const data: ProductPageData = {
  slug: 'titan-cv',
  title: 'Titan CV Series',
  eyebrow: 'Todd Engineering — Commercial Vehicle Systems',
  h1: 'Titan CV Series',
  sub: 'Built for commercial vehicles. Trucks, vans, buses — finished to automotive standard.',
  heroBg: '/media/titan.jpg',
  description: 'The Titan CV Series is engineered for commercial vehicle spray finishing — trucks, vans, buses and specialist vehicles. Bespoke dimensions, 40,000m³/hr+ airflow and full-width doors as standard.',
  pills: ['Commercial Vehicle', 'Downdraught Airflow', 'Gas-Fired Heating', '+1400 Lux LED', 'PLC Control', 'High-Volume Throughput'],
  specRows: [
    { k: 'Application', v: 'Commercial vehicle spray finishing' },
    { k: 'Internal Dimensions', v: 'Up to 14,000mm × 4500mm × 4200mm (L×W×H)' },
    { k: 'Airflow', v: '40,000m³/hr+' },
    { k: 'Air Changes', v: '4–5 per minute' },
    { k: 'Extraction Type', v: 'Downdraught — floor-level extract' },
    { k: 'Heating', v: 'Gas-fired indirect — high-capacity' },
    { k: 'LED Lighting', v: '5000K / 90 CRI / +1400 lux' },
    { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based / 5" TFT Touchscreen' },
    { k: 'Construction', v: 'Heavy-gauge double-skinned insulated panels — 30min fire rated' },
    { k: 'Door Type', v: 'Full-width sliding or bi-fold' },
  ],
  gallery: [
    '/media/titan-cv/1beb1f63-ba25-4e80-b4ae-46481815709f.jpg',
    '/media/titan-cv/4f0f0043-9142-400f-ad57-6d456310e842.JPG',
    '/media/titan-cv/78528a8c-7e41-411b-935f-adc9e8e71158.jpg',
    '/media/titan-cv/9744e5a6-b877-49af-bb06-8395293f86e1.jpg',
    '/media/titan-cv/IMG_5494.jpg',
  ],
  icons: [
    { svg: <path d="M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M18.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>, label: 'Commercial Vehicle' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Downdraught Airflow' },
    { svg: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>, label: 'Gas-Fired Heating' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: 'High-Volume Throughput' },
  ],
}

export default function TitanCVPage() {
  return <ProductPageTemplate data={data} />
}
