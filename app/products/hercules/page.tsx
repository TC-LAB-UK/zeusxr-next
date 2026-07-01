import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hercules 6000 Series — Todd Engineering',
  description: 'The Hercules 6000 Series delivers 20,000m³/hr downdraught airflow with gas-fired heating, EU5 filtration and +1400 lux LED lighting. Built for high-throughput bodyshops.',
}

const data: ProductPageData = {
  slug: 'hercules',
  title: 'Hercules 6000 Series',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Hercules 6000 Series',
  sub: 'High-throughput downdraught finishing. 20,000m³/hr. Built for volume.',
  heroBg: '/media/hercules-hero.jpg',
  description: 'The Hercules 6000 Series delivers 20,000m³/hr downdraught airflow with gas-fired heating, EU5 filtration and +1400 lux LED lighting. Built for high-throughput bodyshops that demand reliability and speed.',
  pills: ['Downdraught Airflow', 'Gas-Fired Heating', '+1400 Lux LED', 'PLC Control', 'EEC Extraction', 'EU5 Filtration'],
  specRows: [
    { k: 'Application', v: 'Automotive spray finishing' },
    { k: 'Internal Dimensions', v: '6000mm × 3900mm × 2500mm (L×W×H)' },
    { k: 'Airflow', v: '20,000m³/hr' },
    { k: 'Air Changes', v: '4–5 per minute' },
    { k: 'Extraction Type', v: 'Downdraught' },
    { k: 'Heating', v: 'Gas-fired indirect — fast heat-up' },
    { k: 'LED Lighting', v: '5000K / 90 CRI / +1400 lux' },
    { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based touchscreen' },
    { k: 'Construction', v: 'Double-skinned rockwool insulated panels — 30min fire rated' },
    { k: 'Pneumatic Supply', v: '5 bar' },
  ],
  gallery: [
    '/media/hercules/23B48EA1-2A56-4ADF-9812-C43789EAE019 1.jpg',
    '/media/hercules/58ADD2C7-0892-44AB-9184-EE1846138CF5.jpg',
    '/media/hercules/8530FB3D-C22E-4BCF-8470-75FA3A6A8082.jpg',
    '/media/hercules/8FF57F70-3472-4B87-9919-80DF9A9CEFEB.jpg',
    '/media/hercules/B45F6560-1213-4693-8FED-2BDC09F1F792.jpg',
    '/media/hercules/DF18B576-023D-4A17-83ED-34F33187CD39.jpg',
    '/media/hercules/EE497F95-A3D3-42FC-953D-B64F7ECEFE60.jpg',
    '/media/hercules/IMG_4847.jpg',
  ],
  icons: [
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Downdraught Airflow' },
    { svg: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>, label: 'Gas-Fired Heating' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: '+1400 Lux LED' },
    { svg: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>, label: 'EU5 Filtration' },
  ],
}

export default function HerculesPage() {
  return <ProductPageTemplate data={data} />
}
