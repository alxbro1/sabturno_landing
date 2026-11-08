export type HeroScrubSection = {
  id: string
  label: string
  still: string
  stillMobile?: string
  clip: string
  clipMobile?: string
  accent?: string
  scroll?: number
  linger?: number
}

export type HeroScrubConfig = {
  trackEl: HTMLElement
  diveScroll?: number
  connScroll?: number
  crossfade?: number
  finalePoster?: string
  finalePosterMobile?: string
  sections: HeroScrubSection[]
  connectors?: (string | null)[]
  connectorsMobile?: (string | null)[]
  onProgress?: (progress: number, activeIndex: number, fallbackStatic: boolean) => void
}

type InternalSegment = {
  kind: 'dive' | 'conn'
  si: number
  clip: string
  clipM?: string
  still: string
  stillM?: string
  accent?: string
  w: number
  linger: number
  start: number
  end: number
  el: HTMLDivElement | null
  img: HTMLImageElement | null
  video: HTMLVideoElement | null
  blobUrl: string | null
  hasClip: boolean
  loading: boolean
  ready: boolean
  cur: number
  target: number
  visible: boolean
}

type NetworkInformationLike = {
  saveData?: boolean
  effectiveType?: string
}

function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined') return false
  const nav = navigator as Navigator & {
    connection?: NetworkInformationLike
    mozConnection?: NetworkInformationLike
    webkitConnection?: NetworkInformationLike
  }
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection
  if (!conn) return false
  if (conn.saveData) return true
  const eff = (conn.effectiveType || '').toLowerCase()
  return eff === 'slow-2g' || eff === '2g'
}

export function shouldUseStaticHeroFallback(): boolean {
  if (typeof window === 'undefined') return false
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return reduceMotion || isSlowConnection()
}

export function mountHeroScrollWorld(
  container: HTMLElement,
  config: HeroScrubConfig
): { destroy: () => void } {
  const fallbackStatic = shouldUseStaticHeroFallback()
  const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches
  const smallMQ = window.matchMedia('(max-width: 860px)')
  const isMobile = (): boolean => coarse || smallMQ.matches

  const sections = config.sections || []
  const connectors = config.connectors || []
  const connectorsM = config.connectorsMobile || []
  const diveW = config.diveScroll ?? 1.15
  const connW = config.connScroll ?? 0.7
  const crossfade = config.crossfade ?? 0.12

  if (!sections.length) {
    return { destroy: () => undefined }
  }

  injectHeroScrubCSS()
  container.innerHTML = ''
  container.classList.add('sw-hero-stage')

  const segments: InternalSegment[] = []
  sections.forEach((s, i) => {
    segments.push({
      kind: 'dive',
      si: i,
      clip: s.clip,
      clipM: s.clipMobile,
      still: s.still,
      stillM: s.stillMobile,
      accent: s.accent,
      w: s.scroll ?? diveW,
      linger: s.linger ?? 0,
      start: 0,
      end: 1,
      el: null,
      img: null,
      video: null,
      blobUrl: null,
      hasClip: false,
      loading: false,
      ready: false,
      cur: 0,
      target: 0,
      visible: false,
    })

    const connClip = connectors[i]
    if (i < sections.length - 1 && connClip) {
      const nextSection = sections[i + 1]
      segments.push({
        kind: 'conn',
        si: i,
        clip: connClip,
        clipM: connectorsM[i] ?? undefined,
        still: nextSection.still,
        stillM: nextSection.stillMobile,
        accent: nextSection.accent,
        w: connW,
        linger: 0,
        start: 0,
        end: 1,
        el: null,
        img: null,
        video: null,
        blobUrl: null,
        hasClip: false,
        loading: false,
        ready: false,
        cur: 0,
        target: 0,
        visible: false,
      })
    }
  })

  if (fallbackStatic) {
    const lastSec = sections[sections.length - 1]
    const staticScene = document.createElement('div')
    staticScene.className = 'sw-hero-scene is-static'
    staticScene.style.opacity = '1'
    const img = document.createElement('img')
    img.className = 'sw-hero-scene__still'
    img.alt = ''
    img.decoding = 'async'
    const mobilePoster = config.finalePosterMobile || lastSec.stillMobile || lastSec.still
    const desktopPoster = config.finalePoster || lastSec.still
    img.src = isMobile() ? mobilePoster : desktopPoster
    staticScene.appendChild(img)
    container.appendChild(staticScene)
    config.onProgress?.(1, sections.length - 1, true)
    return {
      destroy: () => {
        container.innerHTML = ''
      },
    }
  }

  segments.forEach((s) => {
    const scene = document.createElement('div')
    scene.className = 'sw-hero-scene'
    if (s.accent) {
      scene.style.setProperty('--sw-accent', s.accent)
    }
    const img = document.createElement('img')
    img.className = 'sw-hero-scene__still'
    img.alt = ''
    img.decoding = 'async'
    const poster = isMobile() && s.stillM ? s.stillM : s.still
    if (poster) {
      img.src = poster
    }
    scene.appendChild(img)
    container.appendChild(scene)
    s.el = scene
    s.img = img
  })

  const clamp = (x: number, a = 0, b = 1): number => Math.min(b, Math.max(a, x))
  const smooth = (x: number): number => {
    const c = clamp(x)
    return c * c * (3 - 2 * c)
  }
  const lingerEase = (x: number, l: number): number => {
    const lc = clamp(l)
    const c = x - 0.5
    return (1 - lc) * x + lc * (4 * c * c * c + 0.5)
  }

  let totalWeight = 0
  segments.forEach((s) => {
    s.start = totalWeight
    totalWeight += s.w
    s.end = totalWeight
  })

  let ticking = false
  let destroyed = false
  let userReady = false
  let laidOutW = window.innerWidth

  function primeVideo(v: HTMLVideoElement): void {
    const p = v.play()
    if (p && typeof p.then === 'function') {
      p.then(() => {
        v.pause()
      }).catch(() => undefined)
    }
  }

  function loadClip(s: InternalSegment): void {
    if (destroyed || s.loading || !s.clip) return
    s.loading = true
    const url = isMobile() && s.clipM ? s.clipM : s.clip
    fetch(url)
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error('404'))))
      .then((blob) => {
        if (destroyed || !s.el) return
        const v = document.createElement('video')
        v.className = 'sw-hero-scene__video'
        v.muted = true
        v.playsInline = true
        v.preload = 'auto'
        v.setAttribute('muted', '')
        v.setAttribute('playsinline', '')
        const blobUrl = URL.createObjectURL(blob)
        s.blobUrl = blobUrl
        v.src = blobUrl
        v.addEventListener('loadedmetadata', () => {
          s.ready = true
          read()
        })
        v.addEventListener(
          'seeked',
          () => {
            s.el?.classList.add('has-clip')
          },
          { once: true }
        )
        v.addEventListener('loadeddata', () => {
          try {
            v.pause()
          } catch {
            // ignore pause errors
          }
          if (userReady) {
            primeVideo(v)
          }
        })
        s.el.appendChild(v)
        s.video = v
        s.hasClip = true
      })
      .catch(() => {
        s.loading = false
      })
  }

  // Eagerly load all hero segments since there are only 2 scenes in the hero
  segments.forEach((s) => loadClip(s))

  function read(): void {
    if (destroyed) return
    const rect = config.trackEl.getBoundingClientRect()
    const scrollable = Math.max(1, config.trackEl.offsetHeight - window.innerHeight)
    const rawProgress = clamp(-rect.top / scrollable, 0, 1)
    const y = rawProgress * totalWeight
    const fade = crossfade

    let activeSegIdx = 0
    for (let i = 0; i < segments.length; i++) {
      if (y >= segments[i].start) {
        activeSegIdx = i
      }
    }

    for (let i = 0; i < segments.length; i++) {
      const s = segments[i]
      if (!s.el) continue
      const segLen = Math.max(0.0001, s.end - s.start)
      const local = clamp((y - s.start) / segLen, 0, 1)
      s.target = s.linger ? lingerEase(local, s.linger) : local

      let outside = 0
      if (y < s.start && i > 0) {
        outside = s.start - y
      } else if (y > s.end && i < segments.length - 1) {
        outside = y - s.end
      }
      const op = outside <= 0 ? 1 : outside >= fade ? 0 : 1 - smooth(outside / fade)
      s.visible = op > 0.005
      s.el.style.opacity = op.toFixed(3)
      s.el.style.visibility = s.visible ? 'visible' : 'hidden'
    }

    const activeSectionIndex = segments[activeSegIdx]?.si ?? 0
    config.onProgress?.(rawProgress, activeSectionIndex, false)
    kick()
  }

  function tick(): void {
    if (destroyed) {
      ticking = false
      return
    }
    let more = false
    for (let i = 0; i < segments.length; i++) {
      const s = segments[i]
      const d = s.target - s.cur
      if (Math.abs(d) > 0.0008) {
        s.cur += d * 0.28
        more = true
      } else {
        s.cur = s.target
      }

      if (s.visible && s.ready && s.video && s.video.duration) {
        const t = clamp(s.cur, 0, 0.998) * s.video.duration
        if (Math.abs(s.video.currentTime - t) > 0.018 && !s.video.seeking) {
          try {
            s.video.currentTime = t
          } catch {
            // ignore seek race
          }
        }
      }
    }
    if (more) {
      requestAnimationFrame(tick)
    } else {
      ticking = false
    }
  }

  function kick(): void {
    if (!ticking && !destroyed) {
      ticking = true
      requestAnimationFrame(tick)
    }
  }

  function onFirstTouch(): void {
    if (userReady) return
    userReady = true
    segments.forEach((s) => {
      if (s.video) {
        primeVideo(s.video)
      }
    })
  }

  function onResize(): void {
    if (coarse && Math.abs(window.innerWidth - laidOutW) < 2) {
      read()
      return
    }
    laidOutW = window.innerWidth
    const mobile = isMobile()
    segments.forEach((s) => {
      if (s.img) {
        const desiredPoster = mobile && s.stillM ? s.stillM : s.still
        if (desiredPoster && !s.img.src.endsWith(desiredPoster)) {
          s.img.src = desiredPoster
        }
      }
    })
    read()
  }

  window.addEventListener('scroll', read, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('touchstart', onFirstTouch, { passive: true, once: true })
  window.addEventListener('pointerdown', onFirstTouch, { passive: true, once: true })

  read()

  return {
    destroy: () => {
      destroyed = true
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('touchstart', onFirstTouch)
      window.removeEventListener('pointerdown', onFirstTouch)
      segments.forEach((s) => {
        if (s.blobUrl) {
          URL.revokeObjectURL(s.blobUrl)
        }
      })
      container.innerHTML = ''
    },
  }
}

function injectHeroScrubCSS(): void {
  if (typeof document === 'undefined' || document.getElementById('sw-hero-css')) return
  const style = document.createElement('style')
  style.id = 'sw-hero-css'
  style.textContent = `
    .sw-hero-stage {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      background: #050806;
    }
    .sw-hero-scene {
      position: absolute;
      inset: 0;
      opacity: 0;
      visibility: hidden;
      will-change: opacity;
    }
    .sw-hero-scene__still,
    .sw-hero-scene__video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 48%;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: none;
    }
    .sw-hero-scene__video {
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .sw-hero-scene.has-clip .sw-hero-scene__video {
      opacity: 1;
    }
    .sw-hero-scene.has-clip .sw-hero-scene__still {
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    @media (max-width: 860px) and (orientation: portrait) {
      .sw-hero-scene__still,
      .sw-hero-scene__video {
        object-position: center 45%;
      }
    }
  `
  document.head.appendChild(style)
}
