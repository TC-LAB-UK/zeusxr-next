import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GREENTECH E6 — Todd Engineering',
  description: 'GREENTECH E6 is a spray booth energy management and monitoring system — real-time power, airflow and cycle analytics with cloud dashboard access.',
}

const data: ProductPageData = {
  slug: 'greentech',
  title: 'GREENTECH E6',
  eyebrow: 'Todd Engineering — Energy Management',
  h1: 'GREENTECH E6',
  sub: 'Real-time energy monitoring. Optimise performance. Reduce operating costs.',
  heroBg: '/media/zeus-xr-25.jpg',
  description: 'GREENTECH E6 is a spray booth energy management and monitoring system. Real-time power consumption, airflow and cycle analytics delivered via local and cloud dashboard — retrofittable to most existing booth systems.',
  pills: ['Energy Monitoring', 'Real-Time Data', 'Airflow Analytics', 'Cycle Optimisation', 'Retrofit Compatible', 'Cloud Dashboard'],
  specRows: [
    { k: 'Application', v: 'Spray booth energy management and monitoring' },
    { k: 'Monitoring', v: 'Power consumption, airflow, cycle time' },
    { k: 'Data Access', v: 'Real-time dashboard — local and cloud' },
    { k: 'Compatibility', v: 'Retrofit to most spray booth systems' },
    { k: 'Reporting', v: 'Automated energy and performance reports' },
    { k: 'Installation', v: 'Add-on — minimal site works' },
    { k: 'Integration', v: 'Compatible with existing PLCs' },
  ],
  gallery: [],
  icons: [],
}

export default function GreentechPage() {
  return <ProductPageTemplate data={data} />
}
