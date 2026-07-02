import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apollo WheelCabin — Todd Engineering',
  description: 'The Apollo WheelCabin is a specialist spray finishing cabin for alloy wheels — filtered downdraught airflow, high-CRI LED lighting and a compact footprint.',
}

const data: ProductPageData = {
  slug: 'apollo-wheelcabin',
  title: 'Apollo WheelCabin',
  eyebrow: 'Todd Engineering — Specialist Finishing',
  h1: 'Apollo WheelCabin',
  sub: 'Alloy wheel refinishing. Particle-free environment. Professional results every time.',
  heroBg: '/media/products/worky/2.png',
  description: 'The Apollo WheelCabin is a specialist spray finishing cabin for alloy wheels — filtered downdraught airflow, high-CRI LED lighting and a compact footprint that fits a standard workshop bay.',
  pills: ['Alloy Wheel Specialist', 'Filtered Airflow', 'Integrated Lighting', 'Compact Cabin', 'Safe Working Environment', 'Professional Results'],
  specRows: [
    { k: 'Application', v: 'Alloy wheel spray finishing and refinishing' },
    { k: 'Airflow', v: 'Filtered downdraught — particle-free environment' },
    { k: 'Lighting', v: 'High-CRI LED — precise colour assessment' },
    { k: 'Filtration', v: 'EU5 input / EU3 extract' },
    { k: 'Footprint', v: 'Compact — fits standard workshop bays' },
    { k: 'Door', v: 'Easy-access for wheel loading' },
    { k: 'Extraction', v: 'Integrated low-level extraction' },
    { k: 'Installation', v: 'Minimal site works — rapid deployment' },
  ],
  gallery: [],
  icons: [],
}

export default function ApolloWheelCabinPage() {
  return <ProductPageTemplate data={data} />
}
