import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const projectRoot = process.cwd()
const appRoot = path.join(projectRoot, 'app')
const sourceRoots = [appRoot, path.join(projectRoot, 'components')]
const routes = new Set()
const sourceFiles = []

function routeFromFile(filePath) {
  const relative = path.relative(appRoot, filePath).replace(/\\/g, '/')
  const segments = relative.split('/')
  const filename = segments.pop()

  if (filename === 'not-found.tsx' || filename === 'not-found.jsx') return null
  if (filename === 'robots.ts') return '/robots.txt'
  if (filename === 'sitemap.ts') return '/sitemap.xml'

  if (/^page\.(tsx|ts|jsx|js)$/.test(filename)) {
    return segments.length ? `/${segments.join('/')}` : '/'
  }

  if (/^route\.(ts|js)$/.test(filename)) {
    return segments.length ? `/${segments.join('/')}` : '/'
  }

  return null
}

function collect(dir) {
  if (!fs.existsSync(dir)) return

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collect(filePath)
      continue
    }

    if (!/\.(tsx|ts|jsx|js)$/.test(entry.name)) continue
    sourceFiles.push(filePath)

    if (dir.startsWith(appRoot)) {
      const route = routeFromFile(filePath)
      if (route) routes.add(route)
    }
  }
}

function matchesRoute(target, route) {
  const targetSegments = target.split('/').filter(Boolean)
  const routeSegments = route.split('/').filter(Boolean)
  if (targetSegments.length !== routeSegments.length) return false

  return routeSegments.every((segment, index) => {
    if (segment.startsWith('[') && segment.endsWith(']')) return true
    return segment === targetSegments[index]
  })
}

function hrefsFromSource(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const source = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const hrefs = []

  function visit(node) {
    if (ts.isJsxAttribute(node) && node.name.getText(source) === 'href' && node.initializer) {
      const value = node.initializer
      if (ts.isStringLiteral(value)) {
        hrefs.push(value.text)
      } else if (ts.isJsxExpression(value) && value.expression) {
        if (ts.isStringLiteral(value.expression) || ts.isNoSubstitutionTemplateLiteral(value.expression)) {
          hrefs.push(value.expression.text)
        } else if (ts.isTemplateExpression(value.expression)) {
          const template = value.expression
          const dynamicPath = template.head.text + template.templateSpans.map((span) => `[param]${span.literal.text}`).join('')
          hrefs.push(dynamicPath)
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(source)
  return hrefs
}

for (const root of sourceRoots) collect(root)

const errors = []
for (const filePath of sourceFiles) {
  for (const href of hrefsFromSource(filePath)) {
    if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue

    const route = href.split(/[?#]/, 1)[0]
    if (!route.startsWith('/')) continue
    if (![...routes].some((candidate) => matchesRoute(route, candidate))) {
      errors.push(`${path.relative(projectRoot, filePath)} -> ${href}`)
    }
  }
}

if (errors.length) {
  console.error('Broken internal links found:')
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Checked ${sourceFiles.length} app/component files and ${routes.size} routes; all static internal links resolve.`)
