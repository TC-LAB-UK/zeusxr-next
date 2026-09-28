'use client'

import { useRef } from 'react'

export const HONEYPOT_NAME = '_hp'

/**
 * A field real people never see and never fill. Bots that parse the DOM and
 * complete every input give themselves away by putting something in it.
 */
export function HoneypotField() {
  return (
    <input
      type="text"
      name={HONEYPOT_NAME}
      autoComplete="off"
      tabIndex={-1}
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-9999px',
        opacity: 0,
        pointerEvents: 'none',
        height: 0,
        width: 0,
      }}
    />
  )
}

/**
 * Returns a check for automated submissions: the honeypot was filled, or the
 * form was completed faster than a person physically could.
 *
 * Callers should treat a positive result as a silent success — showing the
 * usual confirmation gives the bot no signal that it was caught.
 */
export function useSpamGuard(minSeconds = 3) {
  const mountedAt = useRef(Date.now())

  return function isSpam(form: HTMLFormElement | null) {
    if (!form) return false
    if (new FormData(form).get(HONEYPOT_NAME)) return true
    if (Date.now() - mountedAt.current < minSeconds * 1000) return true
    return false
  }
}
