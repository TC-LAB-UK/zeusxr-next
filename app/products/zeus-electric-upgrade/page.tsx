import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zeus Electric Upgrade — Todd Engineering',
  description: 'Retrofit your existing spray booth with far infrared (FIR) electric heating. Eliminate gas dependency, cut running costs and future-proof your bodyshop.',
}

const data: ProductPageData = {
  slug: 'zeus-electric-upgrade',
  title: 'Zeus Electric Upgrade',
  eyebrow: 'Todd Engineering — Retrofit Electrification',
  h1: 'Zeus Electric Upgrade',
  sub: 'Retrofit. Electrify. Zero fossil fuels — without replacing your booth.',
  heroBg: '/media/zeus-xr-28.jpg',
  description: 'Retrofit your existing spray booth with far infrared (FIR) electric heating elements. Eliminate gas dependency, dramatically cut running costs and future-proof your bodyshop — without replacing the booth.',
  pills: ['FIR Electric Heating', 'Retrofit Compatible', 'Zero Fossil Fuels', 'Energy Saving', '98.5% Efficient', 'PLC Integration'],
  specRows: [
    { k: 'Application', v: 'Retrofit electrification of gas spray booths' },
    { k: 'Technology', v: 'Far infrared (FIR) electric heating elements' },
    { k: 'FIR Efficiency', v: '98.5% electrically efficient / 75,000hr rated' },
    { k: 'Compatibility', v: 'Most existing downdraught spray booths' },
    { k: 'Fossil Fuel Saving', v: '100% — eliminates gas dependency' },
    { k: 'Control', v: 'Integrates with existing PLC or new panel' },
    { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz)' },
    { k: 'Installation', v: 'Todd Engineering full retrofit service' },
  ],
  gallery: [],
  icons: [],
}

export default function ZeusElectricUpgradePage() {
  return <ProductPageTemplate data={data} />
}
