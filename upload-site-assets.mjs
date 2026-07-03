/**
 * Bulk-upload all zeusxr-next/public/media images to Supabase Storage
 * so they appear in the portal Media library.
 *
 * Usage:
 *   cd ~/Documents/Claude/Projects/Todd\ Engineering
 *   SUPABASE_URL=https://xxxx.supabase.co \
 *   SUPABASE_SERVICE_KEY=eyJh... \
 *   ORG_ID=8129f148-b92e-4fb4-a458-b0c941d6b42f \
 *   MEDIA_DIR=../zeusxr-next/public/media \
 *   node upload-site-assets.mjs
 *
 * Get the service key from: Supabase → Project Settings → API → service_role key
 */

import { createClient } from '@supabase/supabase-js'
import { readdir, readFile, stat } from 'fs/promises'
import { join, relative, extname } from 'path'

const SUPABASE_URL     = process.env.SUPABASE_URL
const SUPABASE_KEY     = process.env.SUPABASE_SERVICE_KEY
const ORG_ID           = process.env.ORG_ID     || '8129f148-b92e-4fb4-a458-b0c941d6b42f'
const MEDIA_DIR        = process.env.MEDIA_DIR  || '../zeusxr-next/public/media'
const BUCKET           = 'media'
const FOLDER_PREFIX    = `${ORG_ID}/site-assets`

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.svg'])

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Set SUPABASE_URL and SUPABASE_SERVICE_KEY env vars.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...await walk(full))
    } else if (IMAGE_EXTS.has(extname(e.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function main() {
  console.log(`📂 Scanning ${MEDIA_DIR}…`)
  const all = await walk(MEDIA_DIR)
  console.log(`📸 Found ${all.length} images\n`)

  let ok = 0, skip = 0, fail = 0

  for (const absPath of all) {
    const rel   = relative(MEDIA_DIR, absPath)         // e.g. zeus-8000/IMG_0053.jpg
    const dest  = `${FOLDER_PREFIX}/${rel}`            // orgId/site-assets/zeus-8000/IMG_0053.jpg
    const mime  = guessMime(extname(absPath))

    const buf = await readFile(absPath)

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(dest, buf, { contentType: mime, upsert: false })

    if (!error) {
      console.log(`  ✅ ${rel}`)
      ok++
    } else if (error.message?.includes('already exists') || error.statusCode === '409') {
      console.log(`  ⏭  ${rel} (already exists)`)
      skip++
    } else {
      console.log(`  ❌ ${rel} — ${error.message}`)
      fail++
    }
  }

  console.log(`\n✅ Uploaded: ${ok}  ⏭ Skipped: ${skip}  ❌ Failed: ${fail}`)
}

function guessMime(ext) {
  const map = {
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.png': 'image/png',  '.webp': 'image/webp',
    '.gif': 'image/gif',  '.avif': 'image/avif',
    '.svg': 'image/svg+xml',
  }
  return map[ext.toLowerCase()] ?? 'application/octet-stream'
}

main().catch(err => { console.error(err); process.exit(1) })
