import type { Metadata } from 'next'
import SolutionPageClient from '@/components/SolutionPageClient'

export const metadata: Metadata = {
  title: 'Project Management — Todd Engineering',
  description: 'End-to-end delivery for complex, multi-stage installations. On time. On budget. Fully accountable.',
}

export default function ProjectManagementPage() {
  return (
    <SolutionPageClient
      eyebrow="Solutions — Todd Engineering"
      h1="Project Management"
      tagline="End-to-end delivery for complex, multi-stage installations. On time. On budget. Fully accountable."
      heroBg="/media/zeus-xr-28.jpg"
      overviewTitle="Project Management"
      overviewBody="Large-scale and multi-phase projects require programme management that goes beyond standard installation. Our dedicated project management service provides structured oversight, proactive risk management and a single point of accountability for the full lifecycle of your project."
      introImg="/media/zeus-xr-28.jpg"
      introImgAlt="Project Management"
      processSteps={[
        {
          n: '01', title: 'Scope Definition',
          desc: 'Detailed scope of works, deliverables schedule and success criteria agreed and documented before mobilisation.',
          svg: <><rect x="4" y="4" width="24" height="24" rx="3"/><line x1="10" y1="11" x2="22" y2="11"/><line x1="10" y1="16" x2="22" y2="16"/><line x1="10" y1="21" x2="16" y2="21"/></>,
        },
        {
          n: '02', title: 'Programme Planning',
          desc: 'Detailed project programme developed with key milestones, dependencies and resource plans. Shared with all stakeholders.',
          svg: <><rect x="4" y="3" width="24" height="26" rx="2"/><line x1="10" y1="10" x2="22" y2="10"/><line x1="10" y1="15" x2="22" y2="15"/><rect x="10" y="20" width="5" height="4" rx="1"/><rect x="17" y="17" width="5" height="7" rx="1"/></>,
        },
        {
          n: '03', title: 'Managed Delivery',
          desc: 'Works coordinated and supervised by a dedicated project manager. Regular progress reports and proactive issue resolution.',
          svg: <><rect x="4" y="8" width="24" height="18" rx="2"/><path d="M11 8V6a5 5 0 0 1 10 0v2"/><line x1="4" y1="16" x2="28" y2="16"/></>,
        },
        {
          n: '04', title: 'Handover and Closeout',
          desc: 'Formal handover with as-built documentation, O&M manuals, completion certificate and post-project review.',
          svg: <><circle cx="16" cy="16" r="12"/><polyline points="10 16 14 20 22 12"/></>,
        },
      ]}
      included={[
        'Dedicated project manager',
        'Detailed project programme and milestone tracking',
        'Regular progress reporting',
        'Risk register and issue log management',
        'Stakeholder communication management',
        'Site coordination and supervision',
        'Health, safety and CDM compliance',
        'Subcontractor management where required',
        'As-built documentation and O&M manuals',
        'Post-project review and lessons learned',
      ]}
      whyCards={[
        { title: 'Proven on Complex Projects', desc: 'Project management capability proven on international projects, multi-phase programmes and time-critical installations across multiple sectors.' },
        { title: 'Proactive Risk Management', desc: 'We identify and address risks before they become problems — maintaining programme integrity and protecting your budget.' },
        { title: 'Clear Communication', desc: 'Structured reporting keeps all stakeholders informed. You always know where your project stands.' },
      ]}
      formTitle="Interested in our Project Management service?"
      formSrc="solution_project_management"
    />
  )
}
