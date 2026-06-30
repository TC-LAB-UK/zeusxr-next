import type { Metadata } from 'next'
import ZeusXRClient from '@/components/ZeusXRClient'

export const metadata: Metadata = {
  title: 'Zeus XR — Robotic Spray Finishing System | Todd Engineering',
  description: 'Zeus XR is an AI-assisted robotic spray booth system that delivers consistent, automated spray finishing for modern bodyshops. Up to 30% increased throughput, 50% less rework.',
  openGraph: {
    title: 'Zeus XR — Advanced Spray Finishing Technology',
    description: 'AI-assisted robotic spray booth system by Todd Engineering.',
    images: [{ url: '/media/zeus-xr-8.jpg', width: 1200, height: 630 }],
  },
}

export default function ZeusXRPage() {
  return <ZeusXRClient />
}
