import fs from 'node:fs'
import path from 'node:path'

const appRoot = path.join(process.cwd(), 'app')
const routeSet = new Set()

function normalizeRouteFromFile(relativePath) {
  const route = relativePath
    .replace(/\\/g, '/')
    .replace(/^app\//, '')
    .replace(/\/page\.(tsx|ts|jsx|js)$/, '')
    .replace(/\/layout\.(tsx|ts|jsx|js)$/, '')
    .replace(/\/route\.(ts|js)$/, '')
    .replace(/\/not-found\.(tsx|ts|jsx|js)$/, '/not-found')
    .replace(/\/robots\.(ts|js)$/, '/robots')
    .replace(/\/sitemap\.(ts|js)$/, '/sitemap')
    .replace(/\/globals\.css$/, '')

  if (!route || route === 'index') {
    return '/'
  }

  return `/${route.replace(/^\//, '')}`
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
      continue
    }

    const isPageLike = /(?:^|\/)(?:page|layout|route|not-found|robots|sitemap)\.[jt]sx?$/.test(entry.name) || /(?:^|\/)(?:page|layout|route|not-found|robots|sitemap)\.[jt]s$/.test(entry.name)
    if (!isPageLike) continue

    const relative = path.relative(process.cwd(), full)
    const route = normalizeRouteFromFile(relative)
    routeSet.add(route)
  }
}

function routeMatches(target, expected) {
  if (target === expected) return true
  const targetParts = target.split('/').filter(Boolean)
  const expectedParts = expected.split('/').filter(Boolean)

  if (targetParts.length !== expectedParts.length) {
    return false
  }

  return expectedParts.every((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) return true
    return part === targetParts[index]
  })
}

function getHrefValues(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const matches = [...text.matchAll(/href\s*=\s*["']([^"']+)["']/g)]
  return matches.map((match) => match[1])
}

walk(appRoot)

const fileList = []
function collectFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectFiles(full)
      continue
    }
    if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      fileList.push(full)
    }
  }
}
collectFiles(appRoot)

const errors = []
for (const file of fileList) {
  const hrefs = getHrefValues(file)
  for (const href of hrefs) {
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue
    }

    const target = href.split('?')[0].split('#')[0]
    if (target === '/') {
      continue
    }

    const route = target.startsWith('/') ? target : `/${target}`
    const valid = [...routeSet].some((candidate) => routeMatches(route, candidate))
    if (!valid) {
      errors.push(`${path.relative(process.cwd(), file)} -> ${href}`)
    }
  }
}

if (errors.length) {
  console.error('Broken links found:')
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Checked ${fileList.length} app files and ${routeSet.size} routes; all internal links resolve.`)
