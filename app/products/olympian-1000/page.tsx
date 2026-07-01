import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Olympian 1000 Series — Todd Engineering',
  description: 'The Olympian 1000 Series delivers high-end features at an accessible price. Advanced LED lighting, inverter variable speed drives and waterborne compatibility as standard.',
}

const data: ProductPageData = {
  slug: 'olympian-1000',
  title: 'Olympian 1000 Series',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Olympian 1000',
  sub: 'Exceptional value. Full specification. Built for start-ups and growing bodyshops.',
  heroBg: '/media/olympian-1000.jpg',
  description: 'The Olympian 1000 Series delivers high-end features — advanced LED lighting, inverter variable speed drives and waterborne compatibility — at an accessible price point. The ideal choice for growing bodyshops and start-ups.',
  pills: ['Entry Level', 'No Excavation Required', 'Waterborne Compatible', '14,000m³/hr', '+1800 Lux LED', 'Optional Hydracure™'],
  specRows: [
    { k: 'Application', v: 'Automotive spray finishing' },
    { k: 'Internal Dimensions', v: '6750mm × 3900mm × 2600mm (L×W×H)' },
    { k: 'External Dimensions', v: '7660mm × 4000mm × 3000mm (L×W×H)' },
    { k: 'High Top LWB (Internal)', v: '7900mm × 3900mm × 3300mm' },
    { k: 'High Top LWB (External)', v: '8810mm × 4000mm × 3700mm' },
    { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz) / 32A' },
    { k: 'Maximum Absorbed Power', v: '8kW' },
    { k: 'Gas Supply', v: 'Natural Gas or LPG' },
    { k: 'Gas Rated Power', v: "110kW / 300,000 BTU's/hr" },
    { k: 'Natural Gas Consumption', v: '9m³/hr' },
    { k: 'LPG Consumption', v: '5.5kg/hr' },
    { k: 'Airflow', v: '14,000m³/hr' },
    { k: 'Air Changes', v: '3.5 per minute' },
    { k: 'Extraction Type', v: 'Rear Extraction' },
    { k: 'Fan Type', v: 'Bifurcated Axial / 3kW' },
    { k: 'Noise Level', v: '70–75 dB cabin / 50% lower outbreak' },
    { k: 'Inverter VSDs', v: 'Yes — electronically balanced cabin pressure' },
    { k: 'LED Lighting', v: '5000K / 90CRI / +1800 lux' },
    { k: 'Pneumatic Supply', v: '5 bar' },
    { k: 'Construction', v: 'Double-skinned insulated panels — 30min fire rated' },
    { k: 'Paint Compatibility', v: 'Waterborne compatible' },
    { k: 'Optional', v: 'Hydracure™ Water-Based Curing System' },
  ],
  gallery: [
    '/media/olympian-1000/IMG_2011.jpg',
    '/media/olympian-1000/IMG_2012.jpg',
  ],
  icons: [
    { svg: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>, label: 'No Excavation Required' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Waterborne Compatible' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: '14,000m³/hr Airflow' },
    { svg: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, label: '+1800 Lux LED' },
  ],
}

export default function Olympian1000Page() {
  return <ProductPageTemplate data={data} />
}
