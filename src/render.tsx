import { writeFile } from 'fs/promises'
import { Browser } from 'playwright'
import { renderToStaticMarkup } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { head } from './components/head'


const CSS_PIXEL = 96
const pageSize = { height: 11 * CSS_PIXEL, width: 8.5 * CSS_PIXEL }

export const renderMarkup = async (component: JSX.Element) => {
  const sheet = new ServerStyleSheet()
  let html = ''
  try {
    const staticMarkup = renderToStaticMarkup(sheet.collectStyles(component))
    const styleTags = sheet.getStyleTags()
    html = `<html><head>${styleTags}${head}</head><body>${staticMarkup}</body></html>`
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
  await writeFile('resume.html', html)
  return html
}

export const renderPage = async ({
  browser,
  html,
  pageSize,
}: {
  browser: Browser
  html: string
  pageSize: { height: number; width: number }
}) => {
  const page = await browser.newPage({
    screen: pageSize,
    viewport: pageSize,
  })
  await page.setContent(html, { waitUntil: 'networkidle' })
  const pdf = page.pdf({
    ...pageSize,
    printBackground: true,
    margin: { bottom: '0.25cm', right: '0.25cm', top: '0.25cm', left: '0.25cm' },
    pageRanges: '1',
  })
  return pdf
}

export const render = async (browser: Browser, element: JSX.Element) =>
  await renderPage({
    browser,
    html: await renderMarkup(element),
    pageSize,
  })
