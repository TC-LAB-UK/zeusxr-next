'use client'

import { useState } from 'react'

export default function ZeusXRVideo() {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`zxr-video-wrap rv${playing ? ' playing' : ''}`}
      style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '16/9', background: '#111', position: 'relative' }}
    >
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/8WvJNBGG0mc?autoplay=1&rel=0&modestbranding=1"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          allow="autoplay; fullscreen"
        />
      ) : (
        <>
          <img
            src="/media/zeus-xr-video-thumb.jpg"
            alt="Zeus XR in action"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <button
            onClick={() => setPlaying(true)}
            style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.25)', border: 'none', cursor: 'pointer', width: '100%', transition: 'background .3s' }}
            aria-label="Play video"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ filter: 'drop-shadow(0 2px 16px rgba(0,0,0,.5))' }}>
              <circle cx="40" cy="40" r="39" stroke="rgba(255,255,255,.35)" strokeWidth="1"/>
              <polygon points="33,25 57,40 33,55" fill="white"/>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
