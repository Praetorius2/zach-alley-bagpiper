declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function isAnalyticsEnabled(): boolean {
  return Boolean(MEASUREMENT_ID)
}

export function initAnalytics(): void {
  if (!MEASUREMENT_ID || typeof window === 'undefined') return
  if (document.getElementById('ga4-gtag')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.id = 'ga4-gtag'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement | null)?.closest('a')
    if (!target) return
    const href = target.getAttribute('href')
    if (!href) return
    if (href.startsWith('tel:')) {
      trackOutboundClick('telephone', href)
    } else if (href.startsWith('mailto:')) {
      trackOutboundClick('email', href)
    }
  })
}

export function trackEvent(name: string, params?: Record<string, string>): void {
  if (!MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', name, params)
}

export function trackInquiryCtaClick(location: string): void {
  trackEvent('inquiry_cta_click', { location })
}

export function trackContactFormSubmit(eventType: string, sourcePage: string): void {
  trackEvent('contact_form_submit', {
    event_type: eventType,
    source_page: sourcePage,
  })
}

export function trackOutboundClick(type: 'telephone' | 'email', href: string): void {
  trackEvent(type === 'telephone' ? 'telephone_click' : 'email_click', { href })
}
