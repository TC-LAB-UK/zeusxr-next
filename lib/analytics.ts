/**
 * Lightweight dataLayer helper.
 *
 * Tags themselves (GA4, Google Ads, Meta, LinkedIn) are configured in Google
 * Tag Manager — never hardcoded here. This module only pushes semantic events
 * into the dataLayer for GTM to pick up, which means new destinations can be
 * added from the GTM UI without another code deploy.
 */

type Params = Record<string, unknown>

function push(payload: Params) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push(payload)
}

/** Push a named event with optional parameters. */
export function track(event: string, params: Params = {}) {
  push({ event, ...params })
}

/**
 * A qualified enquiry was submitted successfully.
 * Maps to the GA4 recommended `generate_lead` event and is the event to use
 * as the primary Google Ads conversion.
 */
export function trackLead(params: {
  /** Which surface the enquiry came from. */
  form: 'quote_modal' | 'contact_page'
  /** Enquiry type selected by the user, if any. */
  enquiry_type?: string | null
  /** CTA label the quote modal was opened from, if any. */
  cta?: string | null
}) {
  track('generate_lead', {
    form_location: params.form,
    enquiry_type: params.enquiry_type || 'unspecified',
    cta_label: params.cta || null,
    // GA4 requires a currency when a value is present. Left unset deliberately:
    // assign lead value in GTM/Ads so Finance can change it without a deploy.
  })
}

/** The quote modal was opened — the top of the enquiry funnel. */
export function trackQuoteOpen(cta?: string | null) {
  track('quote_modal_open', { cta_label: cta || null })
}

/** A phone number or email address was clicked. */
export function trackContactClick(method: 'phone' | 'email', value: string) {
  track('contact_click', { contact_method: method, contact_value: value })
}

/** A Zeus XR video was played. */
export function trackVideoPlay(label: string) {
  track('video_play', { video_label: label })
}
