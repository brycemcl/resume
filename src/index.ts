import { chromium } from 'playwright'
import { renderPage } from './renderPage'
import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { mergePDFs } from './mergePDFs'

const CSS_PIXEL = 96
const pageSize = { height: 11 * CSS_PIXEL, width: 8.5 * CSS_PIXEL }

;(async () => {
  const browser = await chromium.launch()

  const html = await readFile(resolve(process.cwd(), 'src', 'test.html'), {
    encoding: 'utf-8',
  })
  const pages = []
  pages.push(await renderPage({ browser, html, pageSize }))

  await writeFile('Bryce_McLachlan_Resume.pdf', await mergePDFs(pages))
  await browser.close()
})()
