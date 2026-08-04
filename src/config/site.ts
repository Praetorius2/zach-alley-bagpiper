export const SITE_URL = 'https://www.zachalleybagpiper.com'
export const SITE_NAME = 'Zach Alley — Highland Bagpiper'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/flatirons.webp`
export const DEFAULT_OG_IMAGE_ALT =
  'Zach Alley playing Highland bagpipes with the Flatirons in the background'

export const PERSON_ID = `${SITE_URL}/#person`
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export type HeroImage = 'flatirons' | 'cathedral'

export const HERO_IMAGES = {
  flatirons: {
    webp: '/images/flatirons.webp',
    png: '/images/flatirons.png',
    alt: 'Zach Alley playing Highland bagpipes with the Flatirons in the background',
  },
  cathedral: {
    webp: '/images/cathedral.webp',
    png: '/images/cathedral.png',
    alt: 'Zach Alley playing bagpipes inside a gothic cathedral',
  },
} as const

export function absoluteUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
