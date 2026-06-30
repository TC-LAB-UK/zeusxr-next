import type { Metadata } from 'next'
import SolutionPageClient from '@/components/SolutionPageClient'

export const metadata: Metadata = {
  title: 'Installation — Todd Engineering',
  description: 'Full project management from site survey through to commissioning. Delivered on time and on budget by Todd Engineering.',
}

export default function InstallationPage() {
  return (
    <SolutionPageClient
      eyebrow="Solutions — Todd Engineering"
      h1="Installation"
      tagline="Full project management from site survey through to commissioning. Delivered on time and on budget."
      heroBg="/media/zeus-xr-21.jpg"
      overviewTitle="Installation"
      overviewBody="Todd Engineering's installation service covers every aspect of your spraybooth project — from the initial site survey and design sign-off through to manufacture, delivery, full commissioning and operator training. You get a single point of contact and a team of British engineers who take ownership of every detail."
      introImg="/media/zeus-xr-21.jpg"
      introImgAlt="Installation"
      processSteps={[
        {
          n: '01', title: 'Site Survey',
          desc: 'Our engineers visit your site, assess dimensions, services, access and structural requirements to build an accurate project scope.',
          svg: <><rect x="4" y="4" width="24" height="24" rx="3"/><line x1="10" y1="11" x2="22" y2="11"/><line x1="10" y1="16" x2="22" y2="16"/><line x1="10" y1="21" x2="16" y2="21"/></>,
        },
        {
          n: '02', title: 'Design and Planning',
          desc: 'Detailed layout drawings, services specifications and project timelines produced for your approval before any work begins.',
          svg: <><path d="M5 27L12 20M12 20l5-12 10-7-7 10-12 5z"/><circle cx="24" cy="8" r="3"/></>,
        },
        {
          n: '03', title: 'Installation',
          desc: 'Our own engineers carry out the full installation — structure, services, controls and commissioning — with minimal disruption to your operation.',
          svg: <><rect x="4" y="8" width="24" height="18" rx="2"/><path d="M11 8V6a5 5 0 0 1 10 0v2"/><line x1="4" y1="16" x2="28" y2="16"/></>,
        },
        {
          n: '04', title: 'Training and Handover',
          desc: 'Full operator training delivered on-site. We do not leave until your team is confident and your booth is producing results.',
          svg: <><circle cx="16" cy="10" r="5"/><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10"/></>,
        },
      ]}
      included={[
        'Site survey and assessment',
        'Detailed layout and services drawings',
        'Full structural installation',
        'Electrical and pneumatic connections',
        'Control panel commissioning',
        'EU5 ceiling filters and paint stop filters',
        'LED lighting installation and testing',
        'Variable speed drive commissioning',
        'Operator training and documentation',
        '12-month warranty on installation workmanship',
      ]}
      whyCards={[
        { title: 'Single Point of Contact', desc: 'One project manager from survey to handover. No handoffs, no confusion between contractors.' },
        { title: 'Our Engineers, Not Subcontractors', desc: 'All installation work carried out by Todd Engineering engineers — the same people who designed and built your system.' },
        { title: 'On Time, On Budget', desc: 'Structured project management keeps programmes on track. We set realistic timelines and we deliver against them.' },
      ]}
      formTitle="Interested in our Installation service?"
      formSrc="solution_installation"
    />
  )
}
