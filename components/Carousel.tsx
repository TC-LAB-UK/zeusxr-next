'use client'

import { useEffect, useRef } from 'react'

export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const nextBtn = document.getElementById('catNext')
    const prevBtn = document.getElementById('catPrev')

    function scrollBy(dir: 1 | -1) {
      const card = track!.querySelector('.cat-card') as HTMLElement | null
      if (!card) return
      track!.scrollBy({ left: dir * (card.offsetWidth + 12), behavior: 'smooth' })
    }

    nextBtn?.addEventListener('click', () => scrollBy(1))
    prevBtn?.addEventListener('click', () => scrollBy(-1))

    // Drag to scroll
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    track.addEventListener('mousedown', e => {
      isDown = true
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    })
    track.addEventListener('mouseleave', () => { isDown = false })
    track.addEventListener('mouseup', () => { isDown = false })
    track.addEventListener('mousemove', e => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      track.scrollLeft = scrollLeft - (x - startX) * 1.2
    })
  }, [])

  return (
    <div className="catalogue-track-wrap">
      <div className="catalogue-track" id="catTrack" ref={trackRef}>
        {children}
      </div>
    </div>
  )
}
