import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nemesis Smart Repair — Todd Engineering',
  description: 'The Nemesis Smart Repair cabin delivers a professional, dust-free environment for SMART repairs — stone chips, scuffs and localised panel refinishing.',
}

const data: ProductPageData = {
  slug: 'nemesis-smart-repair',
  title: 'Nemesis Smart Repair',
  eyebrow: 'Todd Engineering — SMART Repair Systems',
  h1: 'Nemesis Smart Repair',
  sub: 'Professional SMART repair environment. Stone chips. Scuffs. Localised refinishing.',
  heroBg: 'https://www.toddengineering.co.uk/media/nklg4vs4/img_2349.png',
  description: 'The Nemesis Smart Repair cabin delivers a professional, dust-free environment for SMART repairs — stone chips, scuffs and localised panel refinishing. Fixed or mobile options to suit dealer, fleet or bodyshop use.',
  pills: ['SMART Repair', 'Stone Chip Repair', 'Panel Localised Refinish', 'Dust-Free Environment', 'Portable Options', 'Integrated Lighting'],
  specRows: [
    { k: 'Application', v: 'SMART repairs — stone chips, scuffs, localised finishing' },
    { k: 'Airflow', v: 'Filtered extraction — dust-free environment' },
    { k: 'Lighting', v: 'High-CRI LED — colour-accurate assessment' },
    { k: 'Filtration', v: 'Integrated particle filtration' },
    { k: 'Format', v: 'Fixed cabin or mobile options' },
    { k: 'Footprint', v: 'Compact — dealer, fleet or bodyshop' },
    { k: 'Installation', v: 'Minimal site works' },
  ],
  gallery: [],
  icons: [],
}

export default function NemesisSmartRepairPage() {
  return <ProductPageTemplate data={data} />
}
