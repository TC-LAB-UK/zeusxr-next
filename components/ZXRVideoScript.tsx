'use client'

import { useEffect } from 'react'

export default function ZXRVideoScript() {
  useEffect(() => {
    const wrap = document.getElementById('zxrVideoWrap')
    const btn = document.getElementById('zxrPlayBtn')
    if (!wrap || !btn) return

    let player: any = null
    let apiReady = false
    let pendingPlay = false

    function initPlayer() {
      const div = document.createElement('div')
      div.id = 'zxrYTPlayer'
      div.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;'
      const thumb = wrap!.querySelector('.zxr-thumb') as HTMLElement
      wrap!.insertBefore(div, btn)
      if (thumb) { thumb.style.transition = 'opacity .6s'; thumb.style.opacity = '0' }
      player = new (window as any).YT.Player('zxrYTPlayer', {
        videoId: 'da2caTaIaeA',
        playerVars: { autoplay: 1, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3 },
        events: {
          onReady: (e: any) => e.target.playVideo(),
          onStateChange: (e: any) => {
            if (e.data === (window as any).YT.PlayerState.PLAYING) {
              wrap!.classList.add('playing')
            } else {
              wrap!.classList.remove('playing')
            }
          },
        },
      })
    }

    ;(window as any).onYouTubeIframeAPIReady = function () {
      apiReady = true
      if (pendingPlay) initPlayer()
    }

    btn.addEventListener('click', () => {
      if (!player) {
        pendingPlay = true
        if (!document.getElementById('ytApiScript')) {
          const s = document.createElement('script')
          s.id = 'ytApiScript'
          s.src = 'https://www.youtube.com/iframe_api'
          document.head.appendChild(s)
        }
        if (apiReady) initPlayer()
      } else {
        const YT = (window as any).YT
        player.getPlayerState() === YT.PlayerState.PLAYING
          ? player.pauseVideo()
          : player.playVideo()
      }
    })
  }, [])

  return null
}
