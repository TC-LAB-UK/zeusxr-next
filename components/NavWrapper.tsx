import { getSolutions } from '@/lib/supabase'
import Nav from './Nav'

export const revalidate = 60

export default async function NavWrapper() {
  const solutions = await getSolutions()
  return <Nav solutions={solutions} />
}
