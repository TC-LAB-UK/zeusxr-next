/**
 * News image recovery script
 * Fetches original article images from the Wayback Machine (archive.org)
 * Run from the zeusxr-next directory: node scripts/recover-news-images.mjs
 */

import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'public', 'media', 'news', 'recovered')

fs.mkdirSync(OUT_DIR, { recursive: true })

const IMAGES = [
  { url: 'https://www.toddengineering.co.uk/media/xp3pzcei/screenshot-2025-04-26-112109.png',  save: 'mem-magazine.png' },
  { url: 'https://www.toddengineering.co.uk/media/pu0foil5/screenshot-2024-12-17-112355.png',  save: 'repairers-magazine-2024.png' },
  { url: 'https://www.toddengineering.co.uk/media/pupgoysn/screenshot-2024-11-26-131905.png',  save: 'night-of-knights-thumb.png' },
  { url: 'https://www.toddengineering.co.uk/media/3ianhgyv/nok2024-5070.jpg',                  save: 'night-of-knights.jpg' },
  { url: 'https://www.toddengineering.co.uk/media/vjxllujm/img_6819.png',                      save: 'award-2024.png' },
  { url: 'https://www.toddengineering.co.uk/media/qhdk2jmh/screenshot-2025-02-05-083755.png',  save: 'al-haddad-motors.png' },
  { url: 'https://www.toddengineering.co.uk/media/ausft4l2/black-country-mag-feature.png',     save: 'black-country-mag.png' },
  { url: 'https://www.toddengineering.co.uk/media/dlxnhezf/screenshot-2024-11-06-063501.png',  save: 'mg-carbon-neutral.png' },
  { url: 'https://www.toddengineering.co.uk/media/rpjjrawu/screenshot-2024-10-29-150103.jpg',  save: 'hills-helicopters.jpg' },
  { url: 'https://www.toddengineering.co.uk/media/vxvab0cr/1.jpg',                             save: 'angus-mackinnon-2024.jpg' },
  { url: 'https://www.toddengineering.co.uk/media/2d5jgkpg/screenshot-2024-10-15-110808.png',  save: 'rhodes-2024.png' },
  { url: 'https://www.toddengineering.co.uk/media/zp1joish/screenshot-2024-10-20-211407.png',  save: 'vcr-greener-future.png' },
  { url: 'https://www.toddengineering.co.uk/media/e2ujjf3q/nbra-repairer-magazine-screenshot-1.png', save: 'nbra-magazine.png' },
  { url: 'https://www.toddengineering.co.uk/media/24lkl34v/screenshot-2024-08-02-143416.png',  save: 'bodyshop-magazine-sandal.png' },
  { url: 'https://www.toddengineering.co.uk/media/qcpelu1e/july-16th-seahwind.jpg',            save: 'seah-wind.jpg' },
  { url: 'https://www.toddengineering.co.uk/media/tkipt0s0/wfel-finish.jpg',                   save: 'wfel-boxer.jpg' },
  { url: 'https://www.toddengineering.co.uk/media/qazlbzon/news-article-23-5-23.png',          save: 'smart-repair-rollout.png' },
  { url: 'https://www.toddengineering.co.uk/media/n4xfk23c/2023-05-10.jpg',                   save: 'boxer-programme.jpg' },
]

function get(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(chunks), type: res.headers['content-type'] }))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function getWaybackUrl(originalUrl) {
  const cdx = `http://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(originalUrl)}&output=json&limit=1&fl=timestamp,statuscode&filter=statuscode:200&from=20230101`
  try {
    const res = await get(cdx)
    const json = JSON.parse(res.data.toString())
    if (json.length < 2) return null
    const [timestamp] = json[1]
    return `https://web.archive.org/web/${timestamp}im_/${originalUrl}`
  } catch {
    return null
  }
}

async function downloadImage(url, saveName) {
  const dest = path.join(OUT_DIR, saveName)
  if (fs.existsSync(dest)) {
    console.log(`  ✓ Already exists: ${saveName}`)
    return true
  }

  // Try original URL first
  try {
    const res = await get(url)
    if (res.status === 200 && res.data.length > 1000) {
      fs.writeFileSync(dest, res.data)
      console.log(`  ✓ Got from origin: ${saveName} (${Math.round(res.data.length/1024)}KB)`)
      return true
    }
  } catch {}

  // Fall back to Wayback Machine
  console.log(`  → Checking Wayback Machine for ${saveName}…`)
  const waybackUrl = await getWaybackUrl(url)
  if (!waybackUrl) {
    console.log(`  ✗ Not found in archive: ${saveName}`)
    return false
  }

  try {
    const res = await get(waybackUrl)
    if (res.status === 200 && res.data.length > 1000) {
      fs.writeFileSync(dest, res.data)
      console.log(`  ✓ Recovered from archive: ${saveName} (${Math.round(res.data.length/1024)}KB)`)
      return true
    } else {
      console.log(`  ✗ Archive returned empty/error for: ${saveName}`)
      return false
    }
  } catch (e) {
    console.log(`  ✗ Failed: ${saveName} — ${e.message}`)
    return false
  }
}

async function main() {
  console.log(`\nRecovering ${IMAGES.length} news images from Wayback Machine…\n`)
  const results = { ok: [], failed: [] }

  for (const img of IMAGES) {
    const ok = await downloadImage(img.url, img.save)
    ;(ok ? results.ok : results.failed).push(img.save)
    await new Promise(r => setTimeout(r, 500)) // be polite to archive.org
  }

  console.log(`\n✓ Recovered: ${results.ok.length}/${IMAGES.length}`)
  if (results.failed.length) {
    console.log(`✗ Failed (need manual upload): ${results.failed.join(', ')}`)
  }

  // Print the news-data.ts mappings to use
  console.log('\n--- Path mappings for news-data.ts ---')
  for (const img of IMAGES) {
    if (results.ok.includes(img.save)) {
      console.log(`/media/news/recovered/${img.save}`)
    }
  }
}

main().catch(console.error)
