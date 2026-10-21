import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { join } from 'node:path'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { portfolio } = await server.ssrLoadModule('/src/data/portfolio.js')
  const render = () => renderToStaticMarkup(createElement(App))
  const html = render()
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  assert.equal(ids.length, new Set(ids).size, 'IDs must be unique')
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), `Missing anchor: ${target}`)
  for (const section of ['home', 'about', 'skills', 'projects', 'contact']) assert.ok(ids.includes(section))
  assert.ok(html.includes('<nav') && html.includes('<main') && html.includes('<footer'))
  assert.equal((html.match(/<h1\b/g) || []).length, 1)
  assert.equal((html.match(/<article\b/g) || []).length, 7)
  assert.equal(portfolio.name, 'Haikal Ramli')
  for (const project of portfolio.projects) assert.ok(html.includes(project.title) && html.includes(project.description) && html.includes(project.status))
  assert.doesNotMatch(html, /placeholder|not configured|unavailable|href="(?:null|undefined)/i)
  const configuredUrls = new Set([
    ...portfolio.contact.links.map(link => link.url),
    ...portfolio.projects.flatMap(project => [project.githubUrl, project.demoUrl]),
  ].filter(Boolean))
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith('#')) assert.ok(configuredUrls.has(href), `Unexpected public URL: ${href}`)
  }
  assert.ok(html.includes(String(new Date().getFullYear())))

  // Reserved .invalid addresses are test fixtures only, never saved or built.
  const contact = portfolio.contact.links[0]
  const project = portfolio.projects[0]
  const originalContact = contact.url
  const originalGithub = project.githubUrl
  const originalDemo = project.demoUrl
  try {
    contact.url = 'mailto:check@example.invalid'
    project.githubUrl = 'https://example.invalid/source'
    project.demoUrl = 'https://example.invalid/demo'
    const configured = render()
    for (const url of [contact.url, project.githubUrl, project.demoUrl]) assert.ok(configured.includes(`href="${url}"`))
  } finally {
    contact.url = originalContact
    project.githubUrl = originalGithub
    project.demoUrl = originalDemo
  }
  const built = await readFile('dist/index.html', 'utf8')
  assert.match(built, /<html lang="en">/)
  assert.match(built, /<title>Haikal Ramli/)
  assert.match(built, /name="description"/)
  assert.match(built, /name="viewport"/)
  for (const [, asset] of built.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) await access(join('dist', asset.slice(1)))
  const css = await readFile('src/index.css', 'utf8')
  assert.ok(css.includes('prefers-reduced-motion') && css.includes(':focus-visible'))
  console.log('PASS: seven components, unique IDs, anchors, content, hidden missing links, configured links, SEO, built assets, focus and reduced-motion rules.')
} finally {
  await server.close()
}
