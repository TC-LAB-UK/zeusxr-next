import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getSolution } from '@/lib/supabase'
import SolutionDynamicClient from '@/components/SolutionDynamicClient'

export const revalidate = 60

// ─── TipTap JSON → React renderer ────────────────────────────────────────────
type TNode = { type: string; text?: string; attrs?: Record<string, unknown>; content?: TNode[]; marks?: { type: string }[] }

function renderNodes(nodes: TNode[] | undefined): ReactNode {
  if (!nodes) return null
  return nodes.map((n, i) => renderNode(n, i))
}

function renderNode(n: TNode, key: number): ReactNode {
  switch (n.type) {
    case 'doc':
      return renderNodes(n.content)
    case 'heading': {
      const lvl = (n.attrs?.level as number) ?? 2
      const text = renderNodes(n.content)
      if (lvl === 2) return <h2 key={key} className="cs-bd-h2">{text}</h2>
      if (lvl === 3) return <h3 key={key} className="cs-bd-h3">{text}</h3>
      return <h4 key={key} className="cs-bd-h4">{text}</h4>
    }
    case 'paragraph':
      return <p key={key} className="cs-bd-p">{renderNodes(n.content)}</p>
    case 'bulletList':
      return <ul key={key} className="cs-bd-ul">{renderNodes(n.content)}</ul>
    case 'orderedList':
      return <ol key={key} className="cs-bd-ol">{renderNodes(n.content)}</ol>
    case 'listItem':
      return <li key={key} className="cs-bd-li">{renderNodes(n.content)}</li>
    case 'hardBreak':
      return <br key={key} />
    case 'text': {
      let el: ReactNode = n.text ?? ''
      if (n.marks) {
        for (const m of n.marks) {
          if (m.type === 'bold')   el = <strong key={key}>{el}</strong>
          if (m.type === 'italic') el = <em key={key}>{el}</em>
        }
      }
      return el
    }
    default:
      return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = await getSolution(slug)
  if (!solution) return {}
  return {
    title: solution.seo_title || solution.name,
    description: solution.seo_description || solution.tagline || undefined,
  }
}

export default async function DynamicSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolution(slug)
  if (!solution) notFound()

  const bodyContent = solution.description
    ? renderNodes((solution.description as { content?: TNode[] }).content)
    : null

  const processSteps: { title: string; description: string }[] = solution.process_steps ?? []

  return (
    <SolutionDynamicClient
      name={solution.name}
      tagline={solution.tagline}
      coverImageUrl={solution.cover_image_url}
      bodyContent={bodyContent}
      processSteps={processSteps}
      slug={slug}
    />
  )
}
