import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wall Protection System — Todd Engineering',
  description: 'Chemical and solvent-resistant composite wall and floor protection panels for spray booth interiors. Reduces paint build-up, extends booth life.',
}

const data: ProductPageData = {
  slug: 'wall-protection-system',
  title: 'Wall Protection System',
  eyebrow: 'Todd Engineering — Booth Accessories',
  h1: 'Wall Protection System',
  sub: 'Chemical-resistant. Easy-clean. Extends your booth\'s working life.',
  heroBg: '/media/zeus-xr-26.jpg',
  description: 'Chemical and solvent-resistant composite panels protect the interior walls and floor of any spray booth. Dramatically reduces paint build-up removal time and extends the overall operational life of the booth.',
  pills: ['Chemical-Resistant', 'Paint Build-Up Protection', 'Easy Clean', 'Durable Lining', 'Bespoke Fit', 'Extended Booth Life'],
  specRows: [
    { k: 'Application', v: 'Spray booth interior wall and floor protection' },
    { k: 'Material', v: 'Chemical and solvent-resistant composite panels' },
    { k: 'Fit', v: 'Bespoke cut to any booth interior' },
    { k: 'Cleaning', v: 'Dramatically reduces paint build-up removal time' },
    { k: 'Lifespan', v: 'Extends overall booth operational life' },
    { k: 'Finish', v: 'Smooth — does not interfere with airflow' },
    { k: 'Installation', v: 'Retrofittable to any existing booth' },
  ],
  gallery: [],
  icons: [],
}

export default function WallProtectionPage() {
  return <ProductPageTemplate data={data} />
}
