import ProductPageTemplate from '@/components/ProductPageTemplate'
import type { ProductPageData } from '@/components/ProductPageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PG-90E — Todd Engineering',
  description: 'The PG-90E is an AI-assisted robotic spray finishing arm — sub-millimetre repeatability, production-rate throughput and consistent film build across all surfaces.',
}

const data: ProductPageData = {
  slug: 'pg-90e',
  title: 'PG-90E',
  eyebrow: 'Todd Engineering — Robotic Systems',
  h1: 'PG-90E',
  sub: 'AI-assisted robotic finishing. Sub-millimetre accuracy. Production throughput.',
  heroBg: '/media/zeus-xr-8.jpg',
  description: 'The PG-90E is an AI-assisted robotic spray finishing arm designed to integrate with the Zeus XR spray booth. Sub-millimetre repeat accuracy, production-rate throughput and consistent, controlled film build across all surfaces.',
  pills: ['AI-Assisted', 'Robotic Arm', 'Repeatable Application', 'Production Speed', 'Consistent Film Build', 'Integrated Controls'],
  specRows: [
    { k: 'Application', v: 'Robotic spray finishing — automotive and industrial' },
    { k: 'Technology', v: 'AI-assisted path planning and application control' },
    { k: 'Repeatability', v: 'Sub-millimetre repeat accuracy' },
    { k: 'Speed', v: 'Production-rate throughput' },
    { k: 'Film Build', v: 'Consistent, controlled application across all surfaces' },
    { k: 'Integration', v: 'Designed to integrate with Zeus XR spray booth' },
    { k: 'Control', v: 'Integrated touchscreen and remote management' },
    { k: 'Programming', v: 'Teach-and-repeat + AI-optimised path generation' },
    { k: 'Power Supply', v: '415VAC 3Ph/N/E (50/60Hz)' },
  ],
  gallery: [],
  icons: [],
}

export default function PG90EPage() {
  return <ProductPageTemplate data={data} />
}
