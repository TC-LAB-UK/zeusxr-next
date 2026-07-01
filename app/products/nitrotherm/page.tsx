import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nitrotherm — Todd Engineering',
  description: 'Nitrotherm uses heated nitrogen as the spray medium for superior atomisation, faster flash-off, reduced overspray and OEM-quality finish results.',
}

const data: ProductPageData = {
  slug: 'nitrotherm',
  title: 'Nitrotherm',
  eyebrow: 'Todd Engineering — Application Technology',
  h1: 'Nitrotherm',
  sub: 'Heated nitrogen spray. Superior atomisation. OEM-quality results.',
  heroBg: '/media/robot-scanner.jpg',
  description: 'Nitrotherm uses heated nitrogen as the spray medium, delivering superior atomisation versus compressed air. Significantly faster flash-off, reduced overspray, less material waste and OEM-level finish quality.',
  pills: ['Heated Nitrogen', 'Superior Atomisation', 'Faster Flash-Off', 'Reduced Overspray', 'Less Material Waste', 'OEM Quality Finish'],
  specRows: [
    { k: 'Application', v: 'Professional spray paint application' },
    { k: 'Technology', v: 'Heated nitrogen as spray medium' },
    { k: 'Benefit', v: 'Superior atomisation vs. compressed air' },
    { k: 'Flash-Off', v: 'Significantly faster solvent evaporation' },
    { k: 'Material Saving', v: 'Reduced overspray — less waste' },
    { k: 'Finish Quality', v: 'Reduced orange peel — OEM-level results' },
    { k: 'Compatibility', v: 'All standard spray guns and booths' },
    { k: 'Installation', v: 'Plug & play nitrogen generator unit' },
  ],
  gallery: [],
  icons: [],
}

export default function NitrothermPage() {
  return <ProductPageTemplate data={data} />
}
