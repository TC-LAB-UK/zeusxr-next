import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hades Prep Bay — Todd Engineering',
  description: 'The Hades Prep Bay provides a professional dust-controlled environment for vehicle preparation — sanding, flatting and masking before spray finishing.',
}

const data: ProductPageData = {
  slug: 'hades-prep-bay',
  title: 'Hades Prep Bay',
  eyebrow: 'Todd Engineering — Preparation Systems',
  h1: 'Hades Prep Bay',
  sub: 'Dust-controlled preparation. The right environment before every spray job.',
  heroBg: 'https://www.toddengineering.co.uk/media/qgig2r1t/3fb3e61c-323a-4d73-b553-1027e9322a1a.png',
  description: 'The Hades Prep Bay provides a professional dust-controlled environment for vehicle preparation — sanding, flatting and masking before spray finishing. Integrated low-level extraction keeps the work area clean and safe.',
  pills: ['Dust Extraction', 'Filtered Airflow', 'LED Lighting', 'Low-Level Extract', 'EU3 Filtration', 'Full-Size Bay'],
  specRows: [
    { k: 'Application', v: 'Vehicle preparation — sanding, flatting, masking' },
    { k: 'Airflow Type', v: 'Low-velocity filtered — crossdraft or downdraught' },
    { k: 'Extraction', v: 'Integrated low-level dust extraction' },
    { k: 'Filtration', v: 'EU3 input — dust and particle control' },
    { k: 'LED Lighting', v: '5000K / high-CRI — even illumination' },
    { k: 'Construction', v: 'Insulated or standard panel construction' },
    { k: 'Sizes', v: 'Bespoke to your site' },
    { k: 'Delivery', v: 'Turn-key supply and installation' },
  ],
  gallery: [
    '/media/hades-prep-bay/861AF7A8-BCE5-4286-8664-85A2C40C79C6.jpg',
    '/media/hades-prep-bay/IMG_2112.jpg',
    '/media/hades-prep-bay/IMG_2114.jpg',
    '/media/hades-prep-bay/IMG_2955.jpg',
    '/media/hades-prep-bay/IMG_2956.jpg',
  ],
  icons: [
    { svg: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>, label: 'Dust Extraction' },
    { svg: <><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M15.73 8.27A2.5 2.5 0 1 1 17.5 12H2"/></>, label: 'Filtered Airflow' },
    { svg: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>, label: 'LED Lighting' },
    { svg: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>, label: 'EU3 Filtration' },
  ],
}

export default function HadesPrepBayPage() {
  return <ProductPageTemplate data={data} />
}
