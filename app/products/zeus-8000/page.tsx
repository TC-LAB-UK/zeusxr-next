import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zeus 8000 Series — Todd Engineering',
  description: 'The Zeus 8000 Series is engineered to revolutionise automotive refinishing with far infrared (FIR) curing technology and fully electric operation. Reduce curing times, eliminate fossil fuel dependency and future-proof your bodyshop.',
}

const data: ProductPageData = {
  slug: 'zeus-8000',
  title: 'Zeus 8000 Series',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Zeus 8000 Series',
  sub: "The UK's #1 All Electric Spray Booth. Far infrared curing. Zero fossil fuels.",
  heroBg: '/media/zeus-8000.png',
  description: 'The Zeus 8000 Series is engineered to revolutionise automotive refinishing with far infrared (FIR) curing technology and fully electric operation. Reduce curing times, eliminate fossil fuel dependency and future-proof your bodyshop.',
  pills: ['All Electric', 'FIR Curing', 'Zero Fossil Fuels', '25,000m³/hr', '+1800 Lux LED', 'Inverter VSDs'],
  specRows: [
    { k: 'Application', v: 'Automotive spray finishing' },
    { k: 'Internal Dimensions', v: '6800mm × 3900mm × 2500mm (L×W×H)' },
    { k: 'External Dimensions', v: '7400mm × 4000mm × 3700mm (L×W×H)' },
    { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz) / 63A' },
    { k: 'Airflow', v: '25,000m³/hr' },
    { k: 'Air Changes', v: '5 per minute' },
    { k: 'Extraction Type', v: 'Downdraught / Rear Extract' },
    { k: 'Fan Type', v: 'Direct-drive bifurcated axial / 4kW' },
    { k: 'Heating', v: 'Far Infrared (FIR) electric — zero fossil fuels' },
    { k: 'FIR Efficiency', v: '98.5% electrically efficient / 75,000hr rated' },
    { k: 'Noise Level', v: '70–75 dB cabin / 50% lower outbreak' },
    { k: 'Inverter VSDs', v: 'Yes — electronically balanced cabin pressure' },
    { k: 'LED Lighting', v: '5000K / 90CRI / +1800 lux' },
    { k: 'Pneumatic Supply', v: '5 bar' },
    { k: 'Construction', v: 'Double-skinned rockwool insulated panels — 30min fire rated' },
    { k: 'Filtration (Input)', v: 'EU5 — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based / 3.5" TFT Touchscreen' },
  ],
  gallery: [
    '/media/zeus-8000/69d49392-9ccc-44ca-8955-87d0c14c94ac.jpg',
    '/media/zeus-8000/IMG_0053.jpg',
    '/media/zeus-8000/IMG_0185.jpg',
    '/media/zeus-8000/IMG_1194.jpg',
    '/media/zeus-8000/IMG_1196.jpg',
    '/media/zeus-8000/IMG_1290.jpg',
    '/media/zeus-8000/IMG_1292.jpg',
    '/media/zeus-8000/IMG_2552.jpg',
    '/media/zeus-8000/IMG_2950.jpg',
    '/media/zeus-8000/IMG_3519.jpg',
    '/media/zeus-8000/IMG_3521.jpg',
    '/media/zeus-8000/IMG_3970.jpg',
    '/media/zeus-8000/IMG_3979.jpg',
    '/media/zeus-8000/IMG_7405.jpg',
    '/media/zeus-8000/ec682fb7-d08c-431c-aaa5-3771c5e5747d.jpg',
    '/media/zeus-8000/f75bb6b1-e0bf-43e0-b01e-ee5f8d1c83c5.JPG',
  ],
  icons: [
    { svg: <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>, label: 'All Electric FIR Curing' },
    { svg: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>, label: 'Zero Fossil Fuels' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: '25,000m³/hr Airflow' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>, label: '+1800 Lux LED' },
  ],
}

export default function Zeus8000Page() {
  return <ProductPageTemplate data={data} />
}
