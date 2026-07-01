import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Mixing Station — Todd Engineering',
  description: 'The Smart Mixing Station is a self-contained, plug & play paint mixing and colour matching unit with integrated solvent-rated extraction and ATEX-rated electrics.',
}

const data: ProductPageData = {
  slug: 'smart-mixing',
  title: 'Smart Mixing Station',
  eyebrow: 'Todd Engineering — Mixing Systems',
  h1: 'Smart Mixing Station',
  sub: 'Self-contained. ATEX-rated. Plug & play colour matching.',
  heroBg: 'https://www.toddengineering.co.uk/media/lvnhnwgd/img_3515.png',
  description: 'The Smart Mixing Station is a self-contained, plug & play paint mixing and colour matching unit. Integrated solvent-rated extraction, ATEX-rated explosion-proof electrics and 5000K colour-match LED — compact enough to fit any workshop.',
  pills: ['Self-Contained', 'Built-In Extraction', 'ATEX-Rated', 'Plug & Play', 'Colour-Match Lighting', 'Compact Design'],
  specRows: [
    { k: 'Application', v: 'Paint mixing and colour matching' },
    { k: 'Format', v: 'Self-contained freestanding unit' },
    { k: 'Extraction', v: 'Integrated solvent-rated fan and filter' },
    { k: 'Electrical', v: 'ATEX-rated explosion-proof components' },
    { k: 'Compliance', v: 'COSHH / DSEAR compliant' },
    { k: 'Lighting', v: '5000K colour-matched LED' },
    { k: 'Installation', v: 'Plug & play — minimal site works' },
    { k: 'Footprint', v: 'Compact — fits any workshop' },
  ],
  gallery: [],
  icons: [],
}

export default function SmartMixingPage() {
  return <ProductPageTemplate data={data} />
}
