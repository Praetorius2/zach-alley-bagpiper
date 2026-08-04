import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  absoluteUrl,
  HERO_IMAGES,
  type HeroImage,
} from '../config/site'

export type PageMetaData = {
  title: string
  description: string
  path: string
  ogImage?: HeroImage
  ogType?: 'website' | 'article'
}

export function resolvePageMeta({
  title,
  description,
  path,
  ogImage = 'flatirons',
  ogType = 'website',
}: PageMetaData) {
  const url = absoluteUrl(path)
  const image = HERO_IMAGES[ogImage]
  const imageUrl = absoluteUrl(image.webp) || DEFAULT_OG_IMAGE
  const imageAlt = image.alt || DEFAULT_OG_IMAGE_ALT

  return {
    title,
    description,
    url,
    ogType,
    siteName: SITE_NAME,
    imageUrl,
    imageAlt,
  }
}
