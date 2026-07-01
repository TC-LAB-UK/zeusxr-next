import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poseidon — Todd Engineering',
  description: "The Poseidon 4000 Series is Todd Engineering's premium spray booth, featuring Hydra-cure™ water-based curing as standard, a fully filtered downdraught floor and 35,000m³/hr airflow.",
}

const data: ProductPageData = {
  slug: 'poseidon',
  title: 'Poseidon',
  eyebrow: 'Todd Engineering — Spraybooth Systems',
  h1: 'Poseidon',
  sub: 'High-specification. Rapid curing. Engineered for the most demanding bodyshops.',
  heroBg: '/media/poseidon.jpg',
  description: "The Poseidon 4000 Series is Todd Engineering's premium spray booth, featuring Hydra-cure™ water-based curing as standard, a fully filtered downdraught floor and 35,000m³/hr airflow. Intelligent temperature control to ±1°C.",
  pills: ['Hydra-cure™ Standard', 'Downdraught', '35,000m³/hr', '±1°C Temperature Control', '+1800 Lux LED', 'Inverter VSDs'],
  specRows: [
    { k: 'Application', v: 'High-specification automotive spray finishing' },
    { k: 'Internal Dimensions', v: '6750mm × 3900mm × 2600mm (L×W×H)' },
    { k: 'External Dimensions', v: '7400mm × 4000mm × 3700mm (L×W×H)' },
    { k: 'High Top LWB (Internal)', v: '7900mm × 3900mm × 3300mm' },
    { k: 'High Top LWB (External)', v: '8600mm × 4000mm × 4000mm' },
    { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz) / 63A' },
    { k: 'Maximum Absorbed Power', v: '16kW' },
    { k: 'Gas Supply', v: 'Natural Gas or LPG' },
    { k: 'Gas Rated Power', v: "220kW / 750,000 BTU's/hr" },
    { k: 'Natural Gas Consumption', v: '14m³/hr' },
    { k: 'LPG Consumption', v: '6.5kg/hr' },
    { k: 'Airflow', v: '35,000m³/hr' },
    { k: 'Air Changes', v: '7 per minute' },
    { k: 'Extraction Type', v: 'Downdraught — fully filtered floor' },
    { k: 'Fan Type', v: 'Aerofoil Backwards Curved Centrifugal / 7.5kW' },
    { k: 'Curing System', v: 'Hydra-cure™ water-based curing (standard)' },
    { k: 'Noise Level', v: '70–75 dB cabin / 50% lower outbreak' },
    { k: 'Inverter VSDs', v: 'Yes — electronically balanced cabin pressure' },
    { k: 'LED Lighting', v: '5000K / 90CRI / +1800 lux' },
    { k: 'Pneumatic Supply', v: '5 bar' },
    { k: 'Construction', v: 'Double-skinned rockwool insulated panels' },
    { k: 'Filtration (Input)', v: 'EU5 full ceiling plenum — contaminants to 10 microns' },
    { k: 'Filtration (Extract)', v: 'Two-stage EU2 + EU3' },
    { k: 'Control', v: 'PLC-based / 3.5" TFT Touchscreen / ±1°C temperature accuracy' },
  ],
  gallery: [
    '/media/poseidon/IMG_2114.jpg',
    '/media/poseidon/IMG_3876.jpg',
  ],
  icons: [
    { svg: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, label: 'Hydra-cure™ Technology' },
    { svg: <><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></>, label: '±1°C Temperature Control' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: '35,000m³/hr Airflow' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: '+1800 Lux LED' },
  ],
}

export default function PoseidonPage() {
  return <ProductPageTemplate data={data} />
}
