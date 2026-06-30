import type { Metadata } from 'next'
import SolutionPageClient from '@/components/SolutionPageClient'

export const metadata: Metadata = {
  title: 'Maintenance & Servicing — Todd Engineering',
  description: 'Keep your booth performing at its best. Planned maintenance, rapid response and nationwide coverage.',
}

export default function MaintenancePage() {
  return (
    <SolutionPageClient
      eyebrow="Solutions — Todd Engineering"
      h1="Maintenance and Servicing"
      tagline="Keep your booth performing at its best. Planned maintenance, rapid response and nationwide coverage."
      heroBg="/media/zeus-xr-26.jpg"
      overviewTitle="Maintenance and Servicing"
      overviewBody="A spraybooth is critical production equipment. Unplanned downtime is expensive and degraded performance affects quality. Our maintenance and servicing contracts are designed to keep your booth operating at peak performance, with rapid response when you need it most."
      introImg="/media/zeus-xr-26.jpg"
      introImgAlt="Maintenance and Servicing"
      processSteps={[
        {
          n: '01', title: 'Service Schedule',
          desc: 'We agree a planned maintenance schedule based on your throughput and manufacturer recommendations — minimising downtime.',
          svg: <><circle cx="16" cy="16" r="12"/><polyline points="16 9 16 16 21 19"/></>,
        },
        {
          n: '02', title: 'Planned Maintenance',
          desc: 'Regular visits by our engineers to service filters, fans, burners, controls and all ancillary equipment to specification.',
          svg: <><path d="M22 9a6 6 0 0 0-8.485 8.485L5 26l1 1 8.515-8.515A6 6 0 0 0 22 9z"/></>,
        },
        {
          n: '03', title: 'Rapid Response',
          desc: 'When breakdowns occur, our nationwide team provides fast on-site response to get you back in production as quickly as possible.',
          svg: <><path d="M16 4l11 4.5V17c0 6.5-4.5 12.5-11 14-6.5-1.5-11-7.5-11-14V8.5L16 4z"/><polyline points="11 16 15 20 21 13"/></>,
        },
        {
          n: '04', title: 'Service Reporting',
          desc: 'Detailed service reports after every visit. Full service history maintained and available on request.',
          svg: <><circle cx="16" cy="16" r="12"/><polyline points="10 16 14 20 22 12"/></>,
        },
      ]}
      included={[
        'Annual or bi-annual planned maintenance visits',
        'Filter inspection and replacement',
        'Fan, motor and driveshaft inspection',
        'Burner service and combustion analysis',
        'Control system inspection and calibration',
        'Inverter and electrical check',
        'LED lighting inspection',
        'Door seals and hardware check',
        'Full written service report',
        'Priority response on service contracts',
      ]}
      whyCards={[
        { title: 'Keep the Booth Earning', desc: 'A well-maintained booth produces better results, consumes less energy and has a longer operational life. Planned maintenance protects your investment.' },
        { title: 'Nationwide Engineer Network', desc: 'Service engineers based across the UK, ensuring rapid response times wherever you are.' },
        { title: 'Know Your Equipment', desc: 'Our engineers do not just service spray booths — they service Todd Engineering spray booths. They understand every component because they install them.' },
      ]}
      formTitle="Interested in our Maintenance and Servicing service?"
      formSrc="solution_maintenance"
    />
  )
}
