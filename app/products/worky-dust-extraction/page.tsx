import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WORKY Dust Extraction — Todd Engineering',
  description: 'WORKY is a mobile at-source dust extraction system for bodyshops and workshops. HEPA-class filtration, multi-tool compatible and plug & play ready.',
}

const data: ProductPageData = {
  slug: 'worky-dust-extraction',
  title: 'WORKY Dust Extraction',
  eyebrow: 'Todd Engineering — Workshop Equipment',
  h1: 'WORKY Dust Extraction',
  sub: 'At-source. Mobile. HEPA filtration. Plug & play.',
  heroBg: '/media/products/apollo-wheelcabin/3.jpg',
  description: 'WORKY is a mobile at-source dust extraction system for bodyshops and workshops. HEPA-class filtration captures particles at source, compatible with all standard sanding tools and ready to use straight out of the box.',
  pills: ['At-Source Extraction', 'Mobile Design', 'Multi-Tool Compatible', 'HEPA Filtration', 'Low Noise', 'Plug & Play'],
  specRows: [
    { k: 'Application', v: 'Bodyshop / workshop dust extraction' },
    { k: 'Operation', v: 'Mobile — at-source capture' },
    { k: 'Filtration', v: 'Multi-stage with HEPA-class final filter' },
    { k: 'Compatibility', v: 'All standard bodyshop sanding tools' },
    { k: 'Noise Level', v: 'Low-noise motor for workshop comfort' },
    { k: 'Capacity', v: 'Large waste container — extended runs' },
    { k: 'Installation', v: 'Plug & play — no site works required' },
  ],
  gallery: [],
  icons: [],
}

export default function WorkyPage() {
  return <ProductPageTemplate data={data} />
}
