import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Called by Clarri portal after publishing any content
// GET /api/revalidate?secret=TOKEN&path=/news/zeus-xr-msrt-installation&type=page
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  if (!path) {
    return NextResponse.json({ error: 'Missing path' }, { status: 400 })
  }

  try {
    revalidatePath(path)
    // Also revalidate parent listing pages
    if (path.startsWith('/news/')) revalidatePath('/news')
    if (path.startsWith('/projects/')) revalidatePath('/projects')
    if (path.startsWith('/products/') || path === '/zeus-xr') revalidatePath('/products')

    return NextResponse.json({ revalidated: true, path, timestamp: Date.now() })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
