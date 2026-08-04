import { resolvePageMeta, type PageMetaData } from '../config/meta'

type PageMetaProps = PageMetaData

export function PageMeta(props: PageMetaProps) {
  const meta = resolvePageMeta(props)

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.ogType} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="og:image:alt" content={meta.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.imageUrl} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />
    </>
  )
}
