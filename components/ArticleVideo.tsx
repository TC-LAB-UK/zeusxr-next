'use client'
import { useState } from 'react'

interface Props {
  label: string
  title: string
  overlayUrl: string
  overlayPosition?: string
  videoId?: string
}

export default function ArticleVideo({ label, title, overlayUrl, overlayPosition = 'center', videoId = 'da2caTaIaeA' }: Props) {
  const [playing, setPlaying] = useState(false)
  return (
    <section className="art-video-sec">
      <div className="art-video-inner rv">
        <div className="art-video-hdr">
          <span className="art-video-lbl">{label}</span>
          <span className="art-video-title">{title}</span>
        </div>
        <div className="art-video-wrap" onClick={() => setPlaying(true)}>
          {playing ? (
            <iframe
              className="art-video-iframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div
              className="art-video-overlay"
              style={{ backgroundImage: `url('${overlayUrl}')`, backgroundSize: 'cover', backgroundPosition: overlayPosition }}
            >
              <button className="art-play-btn" aria-label="Play video">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <polygon points="24,18 44,30 24,42" fill="white" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
