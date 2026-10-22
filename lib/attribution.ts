/**
 * Visitor-source attribution for lead forms.
 *
 * Problem this solves: ad visitors land on one page (e.g. /products/zeus-8000
 * with ?utm_source=google&utm_medium=cpc) and often browse to another page
 * before enquiring. By then the URL no longer carries the UTM tags, and
 * document.referrer points at our own site — so the lead was stored with no
 * source at all.
 *
 * ATTRIBUTION_SCRIPT runs inline on every full page load (no React needed, so
 * it also works on browsers where hydration fails). When the visit arrives
 * with UTM tags, an ad click ID or an external referrer, it records that
 * "touch" in sessionStorage. Internal navigation never overwrites it.
 *
 * getLeadAttribution() is called by every lead form at submit time and returns
 * fields that map ONLY onto columns that already exist on the `leads` table
 * (referrer, utm_source, utm_medium, utm_campaign) plus a human-readable line
 * for `notes`, so the source is visible in the portal. Do not add new keys to
 * the insert payload without adding the column first — PostgREST rejects
 * unknown columns and the lead would be lost.
 *
 * Storage is sessionStorage (cleared when the tab closes) and nothing is sent
 * anywhere until the visitor chooses to submit an enquiry.
 */

export const ATTRIBUTION_KEY = 'te-attribution'

export const ATTRIBUTION_SCRIPT = `
(function(){
  try {
    var p = new URLSearchParams(location.search);
    var ref = document.referrer || '';
    var refHost = '';
    try { refHost = ref ? new URL(ref).hostname : ''; } catch (e) {}
    var external = refHost && refHost.replace(/^www\\./,'') !== location.hostname.replace(/^www\\./,'');
    var click = p.get('gclid') ? 'gclid' : p.get('gbraid') ? 'gbraid' : p.get('wbraid') ? 'wbraid' : p.get('fbclid') ? 'fbclid' : p.get('msclkid') ? 'msclkid' : '';
    var hasUtm = p.get('utm_source') || p.get('utm_medium') || p.get('utm_campaign');
    if (!hasUtm && !click && !external) return;
    var src = p.get('utm_source'), med = p.get('utm_medium');
    if (!src && (click === 'gclid' || click === 'gbraid' || click === 'wbraid')) { src = 'google'; med = 'cpc'; }
    if (!src && click === 'fbclid') { src = 'facebook'; med = 'paid_social'; }
    if (!src && click === 'msclkid') { src = 'bing'; med = 'cpc'; }
    sessionStorage.setItem('${ATTRIBUTION_KEY}', JSON.stringify({
      utm_source: src || null,
      utm_medium: med || null,
      utm_campaign: p.get('utm_campaign') || null,
      utm_term: p.get('utm_term') || null,
      click: click || null,
      referrer: external ? ref.split('?')[0] : null,
      landing_page: location.pathname,
      ts: Date.now()
    }));
  } catch (e) {}
})();
`

type Stored = {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_term: string | null
  click: string | null
  referrer: string | null
  landing_page: string | null
}

export type LeadAttribution = {
  referrer: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  /** One readable line for the `notes` column, e.g. "Source: Google Ads · keyword: electric paint booth · landed on /products/zeus-8000" */
  sourceNote: string
}

function readStored(): Stored | null {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY)
    return raw ? (JSON.parse(raw) as Stored) : null
  } catch {
    return null
  }
}

/** Plain-English channel name for the portal. */
export function describeSource(s: Pick<Stored, 'utm_source' | 'utm_medium' | 'referrer'>): string {
  const src = (s.utm_source || '').toLowerCase()
  const med = (s.utm_medium || '').toLowerCase()
  let host = ''
  try { host = s.referrer ? new URL(s.referrer).hostname.replace(/^www\./, '') : '' } catch {}

  if (src === 'google' && (med === 'cpc' || med === 'ppc' || med === 'paid')) return 'Google Ads'
  if (src === 'facebook' || src === 'instagram' || src === 'meta') return med.includes('paid') || med === 'cpc' ? 'Meta Ads' : 'Facebook / Instagram'
  if (src === 'bing' && med === 'cpc') return 'Microsoft Ads'
  if (src.includes('chatgpt') || host.includes('chatgpt.com') || host.includes('openai.com')) return 'ChatGPT'
  if (src.includes('perplexity') || host.includes('perplexity.ai')) return 'Perplexity'
  if (host.includes('claude.ai')) return 'Claude'
  if (host.includes('copilot.microsoft.com')) return 'Microsoft Copilot'
  if (host.includes('gemini.google.com')) return 'Gemini'
  if (src) return med ? `${s.utm_source} (${s.utm_medium})` : (s.utm_source as string)
  if (/^google\./.test(host) || host.includes('.google.')) return 'Google search'
  if (host.startsWith('bing.') || host.includes('.bing.')) return 'Bing search'
  if (host.includes('duckduckgo')) return 'DuckDuckGo'
  if (host.includes('linkedin')) return 'LinkedIn'
  if (host.includes('facebook') || host.includes('instagram')) return 'Facebook / Instagram'
  if (host) return host
  return 'Direct / unknown'
}

/**
 * Attribution fields for a lead insert. Falls back to the current page's URL
 * and referrer when nothing was stored (storage blocked, or the script did
 * not run).
 */
export function getLeadAttribution(): LeadAttribution {
  if (typeof window === 'undefined') {
    return { referrer: null, utm_source: null, utm_medium: null, utm_campaign: null, sourceNote: '' }
  }
  let s = readStored()
  if (!s) {
    const p = new URLSearchParams(window.location.search)
    const ref = document.referrer || ''
    let external = false
    try { external = !!ref && new URL(ref).hostname.replace(/^www\./, '') !== window.location.hostname.replace(/^www\./, '') } catch {}
    const gclid = p.get('gclid') || p.get('gbraid') || p.get('wbraid')
    s = {
      utm_source: p.get('utm_source') || (gclid ? 'google' : null),
      utm_medium: p.get('utm_medium') || (gclid ? 'cpc' : null),
      utm_campaign: p.get('utm_campaign'),
      utm_term: p.get('utm_term'),
      click: gclid ? 'gclid' : null,
      referrer: external ? ref.split('?')[0] : null,
      landing_page: window.location.pathname,
    }
  }
  const parts = [`Source: ${describeSource(s)}`]
  if (s.utm_term && s.utm_term !== '{keyword}') parts.push(`keyword: ${s.utm_term}`)
  if (s.landing_page) parts.push(`landed on ${s.landing_page}`)
  return {
    referrer: s.referrer,
    utm_source: s.utm_source,
    utm_medium: s.utm_medium,
    utm_campaign: s.utm_campaign,
    sourceNote: parts.join(' · '),
  }
}

/** Joins an existing notes value with the source line, skipping blanks. */
export function withSourceNote(notes: string | null | undefined, a: LeadAttribution): string | null {
  const out = [notes || '', a.sourceNote].filter(Boolean).join('\n')
  return out || null
}
