'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Mark html as ready — enables opacity:0 animations (progressive enhancement)
    document.documentElement.classList.add('rv-ready')

    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )
    els.forEach(el => obs.observe(el))

    // Safety net: force-reveal anything still hidden after 1.5s
    const fallback = setTimeout(() => {
      document.querySelectorAll('.rv:not(.in)').forEach(el => el.classList.add('in'))
    }, 1500)

    return () => { obs.disconnect(); clearTimeout(fallback) }
  }, [])

  return null
}
