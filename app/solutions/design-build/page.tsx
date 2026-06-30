import type { Metadata } from 'next'
import SolutionPageClient from '@/components/SolutionPageClient'

export const metadata: Metadata = {
  title: 'Design and Build — Todd Engineering',
  description: 'Bespoke engineering from first brief to finished facility. No two projects are the same.',
}

export default function DesignBuildPage() {
  return (
    <SolutionPageClient
      eyebrow="Solutions — Todd Engineering"
      h1="Design and Build"
      tagline="Bespoke engineering from first brief to finished facility. No two projects are the same."
      heroBg="/media/zeus-xr-8.jpg"
      overviewTitle="Design and Build"
      overviewBody="When off-the-shelf will not do, our Design and Build service delivers a fully bespoke spraybooth facility engineered specifically to your site, your operational requirements and your budget. From complex multi-bay installations to unique industrial finishing environments, we have the engineering capability to design and build it."
      introImg="/media/zeus-xr-8.jpg"
      introImgAlt="Design and Build"
      processSteps={[
        {
          n: '01', title: 'Brief and Feasibility',
          desc: 'We work with you to understand your operational requirements, throughput targets, space constraints and budget parameters.',
          svg: <><rect x="4" y="4" width="24" height="24" rx="3"/><line x1="10" y1="11" x2="22" y2="11"/><line x1="10" y1="16" x2="22" y2="16"/><line x1="10" y1="21" x2="16" y2="21"/></>,
        },
        {
          n: '02', title: 'Concept Design',
          desc: 'Our engineers produce concept layouts, airflow calculations and 3D visualisations for review and approval.',
          svg: <><path d="M5 27L12 20M12 20l5-12 10-7-7 10-12 5z"/><circle cx="24" cy="8" r="3"/></>,
        },
        {
          n: '03', title: 'Detailed Engineering',
          desc: 'Full structural, mechanical and electrical engineering packages produced for manufacture and installation.',
          svg: <><rect x="4" y="8" width="24" height="18" rx="2"/><path d="M11 8V6a5 5 0 0 1 10 0v2"/><line x1="4" y1="16" x2="28" y2="16"/></>,
        },
        {
          n: '04', title: 'Build and Commission',
          desc: 'Manufacture, delivery and full installation by our own engineering team, with commissioning and performance verification.',
          svg: <><circle cx="16" cy="16" r="12"/><polyline points="10 16 14 20 22 12"/></>,
        },
      ]}
      included={[
        'Initial brief and feasibility assessment',
        'Concept layouts and 3D visualisations',
        'Full structural and services engineering',
        'Planning and building regulation support',
        'Custom panel manufacture',
        'Bespoke plant and ductwork design',
        'Electrical design and installation',
        'Complete commissioning and performance testing',
        'As-built drawings and O&M manuals',
        'Full operator training',
      ]}
      whyCards={[
        { title: 'True Bespoke Engineering', desc: 'We have the in-house capability to design and build solutions that precisely match your requirements — not adapted standard products.' },
        { title: '30 Years of Complex Projects', desc: 'From aerospace facilities in Bahrain to the UK\'s largest wind farm — our project portfolio demonstrates deep engineering experience.' },
        { title: 'Design Responsibility', desc: 'We take full design responsibility for every bespoke project. One point of accountability from concept to completion.' },
      ]}
      formTitle="Interested in our Design and Build service?"
      formSrc="solution_design_build"
    />
  )
}
