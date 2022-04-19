import { writeFile } from 'fs/promises'
import { chromium } from 'playwright'
import { Body } from './components/body'
import { render } from './render'
;(async () => {
  const browser = await chromium.launch()

  await writeFile('Bryce_McLachlan_Resume.pdf', await render(browser, <Body />))
  await browser.close()
  console.log('done')
})()
