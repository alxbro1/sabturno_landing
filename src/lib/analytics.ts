import type { Router } from 'vue-router'

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  push?: FbqFunction
  loaded?: boolean
  version?: string
  queue?: unknown[]
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: FbqFunction
  }
}

// Password reset links carry the token in the query string (see pages/Home.vue).
// GA4 and the Pixel both send the full URL, so tracking must never start on those loads.
const SENSITIVE_PARAMS = ['token', 'passwordResetToken', 'passwordResetTokenExpires']

function hasSensitiveParams(search: string): boolean {
  const params = new URLSearchParams(search)
  return SENSITIVE_PARAMS.some((name) => params.has(name))
}

let initialized = false
let gaReady = false
let pixelReady = false

function loadScript(src: string): void {
  const script = document.createElement('script')
  script.src = src
  script.async = true
  document.head.appendChild(script)
}

function initGa(id: string): void {
  window.dataLayer = window.dataLayer || []
  // gtag.js only processes Arguments objects; pushing a plain array is silently ignored.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { send_page_view: false })
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${id}`)
  gaReady = true
}

function initPixel(id: string): void {
  if (!window.fbq) {
    const fbq: FbqFunction = (...args: unknown[]) => {
      if (fbq.callMethod) {
        fbq.callMethod(...args)
      } else {
        fbq.queue = fbq.queue || []
        fbq.queue.push(args)
      }
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
  }

  loadScript('https://connect.facebook.net/en_US/fbevents.js')
  window.fbq('init', id)
  pixelReady = true
}

function sendPageView(fullPath: string): void {
  if (gaReady && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: fullPath,
      page_location: window.location.href,
      page_title: document.title,
    })
  }

  if (pixelReady && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

/**
 * Sets up GA4 and/or Meta Pixel based on env vars, then wires SPA page views
 * to the router. No-op when neither `VITE_GA_MEASUREMENT_ID` nor
 * `VITE_META_PIXEL_ID` is set, or in dev unless `VITE_ANALYTICS_DEBUG=true`.
 */
export function initAnalytics(router: Router): void {
  if (initialized) return

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
  const pixelId = import.meta.env.VITE_META_PIXEL_ID
  const debugEnabled = import.meta.env.VITE_ANALYTICS_DEBUG === 'true'

  if (import.meta.env.DEV && !debugEnabled) return
  if (!gaId && !pixelId) return
  if (hasSensitiveParams(window.location.search)) return

  initialized = true

  if (gaId) initGa(gaId)
  if (pixelId) initPixel(pixelId)

  router.afterEach((to) => {
    sendPageView(to.fullPath)
  })
}

/** Safe no-op when GA is not initialized. */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!gaReady || !window.gtag) return
  window.gtag('event', name, params)
}

/** Meta Pixel standard event (e.g. `Lead`, `PageView`). Safe no-op when not initialized. */
export function trackPixelEvent(name: string, params?: Record<string, unknown>): void {
  if (!pixelReady || !window.fbq) return
  window.fbq('track', name, params)
}

/** Meta Pixel custom event (non-standard name). Safe no-op when not initialized. */
export function trackPixelCustomEvent(name: string, params?: Record<string, unknown>): void {
  if (!pixelReady || !window.fbq) return
  window.fbq('trackCustom', name, params)
}
