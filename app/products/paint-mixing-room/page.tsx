import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paint Mixing Room — Todd Engineering',
  description: 'Professional paint mixing rooms — ATEX-rated, COSHH compliant, climate controlled with colour-match LED lighting. Built to any size. Turn-key delivery.',
}

const data: ProductPageData = {
  slug: 'paint-mixing-room',
  title: 'Paint Mixing Room',
  eyebrow: 'Todd Engineering — Mixing Room Systems',
  h1: 'Paint Mixing Room',
  sub: 'ATEX-rated. COSHH compliant. Colour-accurate. Built for professionals.',
  heroBg: 'https://www.toddengineering.co.uk/media/x2sabjv4/img_2548.png',
  description: 'Professional paint mixing rooms with ATEX-rated explosion-proof electrics, COSHH-compliant ventilation and 5000K colour-match LED lighting. Bespoke to your footprint. Turn-key supply and installation.',
  pills: ['Explosion-Proof', 'COSHH Compliant', 'Climate Controlled', 'Colour-Match Lighting', 'Solvent-Rated Ventilation', 'Bespoke Sizes'],
  specRows: [
    { k: 'Application', v: 'Professional paint mixing and storage' },
    { k: 'Ventilation', v: 'Solvent-rated — continuous air changes' },
    { k: 'Electrical', v: 'ATEX-rated explosion-proof throughout' },
    { k: 'Compliance', v: 'COSHH / DSEAR / Building Regs' },
    { k: 'Temperature Control', v: 'Stabilised mixing environment' },
    { k: 'Lighting', v: '5000K colour-matched LED — daylight accurate' },
    { k: 'Construction', v: 'Fire-rated insulated panels' },
    { k: 'Door', v: 'Explosion-relief / self-closing, fire-rated' },
    { k: 'Sizes', v: 'Bespoke to your footprint' },
    { k: 'Delivery', v: 'Turn-key supply and installation' },
  ],
  gallery: [
    '/media/paint-mixing-room/IMG_3894.jpg',
    '/media/paint-mixing-room/IMG_3897.jpg',
    '/media/paint-mixing-room/IMG_3898.jpg',
  ],
  icons: [
    { svg: <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>, label: 'ATEX-Rated' },
    { svg: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>, label: 'COSHH Compliant' },
    { svg: <><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></>, label: 'Climate Controlled' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: 'Colour-Match Lighting' },
  ],
}

export default function PaintMixingRoomPage() {
  return <ProductPageTemplate data={data} />
}
