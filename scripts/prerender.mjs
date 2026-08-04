import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

const ROUTES = [
  '/',
  '/services',
  '/funeral-memorial-bagpiper',
  '/wedding-bagpiper',
  '/ceremonial-bagpiper',
  '/private-corporate-events',
  '/scottish-irish-holiday-events',
  '/orchestral-concert-recording',
]

function escapeAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function buildHeadTags(meta) {
  return [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.url)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:type" content="${escapeAttr(meta.ogType)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.url)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(meta.siteName)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:image" content="${escapeAttr(meta.imageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(meta.imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(meta.imageAlt)}" />`,
  ].join('\n    ')
}

function stripDocumentMetaFromBody(appHtml) {
  return appHtml
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\b[^>]*>/g, '')
    .replace(/<link\b[^>]*>/g, '')
}

function injectHtml(template, appHtml, meta) {
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${stripDocumentMetaFromBody(appHtml)}</div>`,
  )

  html = html.replace(/<title>[\s\S]*?<\/title>/, '')
  html = html.replace(/<meta\s+name="description"[^>]*>/, '')
  html = html.replace(/<link\s+rel="canonical"[^>]*>/, '')
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/g, '')
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/g, '')

  html = html.replace('</head>', `    ${buildHeadTags(meta)}\n  </head>`)
  return html
}

async function prerender() {
  const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  })

  try {
    const mod = await vite.ssrLoadModule('/src/entry-server.tsx')
    const render = mod.render

    for (const route of ROUTES) {
      const { html: appHtml, meta } = render(route)
      const documentHtml = injectHtml(template, appHtml, meta)
      const outDir =
        route === '/' ? dist : path.join(dist, route.replace(/^\//, ''))
      fs.mkdirSync(outDir, { recursive: true })
      const outFile = path.join(outDir, 'index.html')
      fs.writeFileSync(outFile, documentHtml)
      console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`)
    }
  } finally {
    await vite.close()
  }
}

prerender().catch((error) => {
  console.error(error)
  process.exit(1)
})
