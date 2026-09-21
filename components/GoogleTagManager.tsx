/**
 * Google Tag Manager + Google Consent Mode v2.
 *
 * Why GTM rather than a hardcoded gtag: every future destination (Google Ads
 * conversions, Meta, LinkedIn, Clarity) is then added from the GTM UI with no
 * code change and no Vercel deploy.
 *
 * Why Consent Mode v2 rather than "load nothing until accept": GTM loads on
 * every page view but with all advertising and analytics storage DENIED until
 * the visitor accepts. Tags still send cookieless pings, so Google can model
 * the traffic that never touches the banner — instead of losing it entirely.
 * This is also the pattern UK/EEA consent rules expect.
 *
 * Render order inside <head> matters and is guaranteed here:
 *   1. consent defaults (denied)  2. GTM loader
 * If GTM loaded first, tags could fire before defaults were set.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/** Shared with components/CookieConsent.tsx — keep in sync. */
export const CONSENT_KEY = 'te-cookie-consent'

const consentDefaults = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  // Redact ad click identifiers and pass state through the URL while denied.
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);

  // Returning visitor who already accepted: grant before GTM loads so their
  // first page_view of the session is measured rather than dropped.
  try {
    if (localStorage.getItem('${CONSENT_KEY}') === 'accepted') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
  } catch (e) {}
})();
`

const gtmLoader = `
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`

/** Goes in <head>, before anything else that might touch the dataLayer. */
export default function GoogleTagManager() {
  if (!GTM_ID) return null
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: consentDefaults }} />
      <script dangerouslySetInnerHTML={{ __html: gtmLoader }} />
    </>
  )
}

/** Goes first inside <body>. Fallback for visitors with JavaScript disabled. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
