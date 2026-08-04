import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { SERVICES } from './config/services'
import { resolvePageMeta, type PageMetaData } from './config/meta'

const HOME_META: PageMetaData = {
  title: 'Zach Alley — Highland Bagpiper | Denver & Boulder',
  description:
    'Professional Highland bagpiper based in Denver and Boulder. Funerals, memorials, weddings, ceremonies, and events across Colorado’s Front Range and beyond.',
  path: '/',
  ogImage: 'flatirons',
}

const SERVICES_META: PageMetaData = {
  title: 'Professional Bagpiper Services in Colorado | Zach Alley',
  description:
    'Explore Highland bagpipe services for funerals, weddings, ceremonies, private events, cultural celebrations, concerts, and recordings across Colorado.',
  path: '/services',
  ogImage: 'flatirons',
}

export function getMetaForPath(url: string) {
  const path = url.split('?')[0] || '/'
  if (path === '/') return resolvePageMeta(HOME_META)
  if (path === '/services') return resolvePageMeta(SERVICES_META)
  const service = SERVICES.find((item) => item.path === path)
  if (service) {
    return resolvePageMeta({
      title: service.title,
      description: service.description,
      path: service.path,
      ogImage: service.ogImage,
    })
  }
  return resolvePageMeta({
    title: 'Page Not Found | Zach Alley Bagpiper',
    description: 'The page you requested could not be found.',
    path,
  })
}

export type RenderResult = {
  html: string
  meta: ReturnType<typeof resolvePageMeta>
}

export function render(url: string): RenderResult {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )

  return {
    html,
    meta: getMetaForPath(url),
  }
}
