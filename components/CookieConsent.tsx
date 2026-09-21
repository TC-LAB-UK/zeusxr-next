'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'te-cookie-consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Tell Google Consent Mode v2 what the visitor decided.
 *
 * GTM loads on every page view with all storage denied by default (see
 * components/GoogleTagManager.tsx). This is what flips it. Calling it on
 * REJECT as well as accept matters: it resolves GTM's `wait_for_update`
 * immediately instead of leaving tags stalled for 500ms.
 */
function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  const state = granted ? 'granted' : 'denied'
  // arguments-style push is required by the Consent API
  function gtag(...args: unknown[]) { w.dataLayer!.push(args) }
  gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  })
  w.dataLayer.push({ event: 'cookie_consent_update', consent_granted: granted })
}

/**
 * Direct GA4 fallback, used only when no GTM container is configured.
 * With GTM present the GA4 config tag lives in the container instead, so
 * loading it here too would double-count every page view.
 */
function loadGA() {
  if (GTM_ID) return
  if (!GA_ID || typeof window === 'undefined') return
  if (document.getElementById('ga4-script')) return // already loaded

  const script1 = document.createElement('script')
  script1.id = 'ga4-script'
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script1.async = true
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.id = 'ga4-init'
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `
  document.head.appendChild(script2)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted') {
      // GoogleTagManager.tsx already granted this pre-load for returning
      // visitors; repeated here so the direct-GA fallback path still works.
      updateConsent(true)
      loadGA()
    } else if (stored === 'rejected') {
      updateConsent(false)
    } else {
      // Show banner after a short delay so it doesn't flash immediately
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    updateConsent(true)
    loadGA()
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
    updateConsent(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-text">
          <p>
            We use cookies to understand how you use our site and to improve your experience.
            Analytics cookies are only set with your consent.{' '}
            <Link href="/cookies" className="cookie-link">Cookie Policy</Link>
          </p>
        </div>
        <div className="cookie-actions">
          <button onClick={reject} className="cookie-btn cookie-btn--reject">
            Reject non-essential
          </button>
          <button onClick={accept} className="cookie-btn cookie-btn--accept">
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

// Exported so footer "Cookie settings" link can reopen the banner
export function reopenCookieBanner() {
  localStorage.removeItem('te-cookie-consent')
  window.location.reload()
}
