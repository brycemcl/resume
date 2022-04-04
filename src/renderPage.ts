import { createHash } from 'crypto'
import { Browser } from 'playwright'
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
  })
  await page.setContent(html, { waitUntil: 'networkidle' })
  const pdf = page.pdf({ ...pageSize })
  const startImage = await page.screenshot()
  const startImageHash = createHash('sha512').update(startImage).digest('hex')
  await page.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i)
    }
  })
  const endImage = await page.screenshot()
  const endImageHash = createHash('sha512').update(endImage).digest('hex')
  await page.close()
  if (startImageHash !== endImageHash) {
    console.log({ startImageHash, endImageHash })
    throw new Error("html doesn't fit on page")
  }
  return pdf
}
