// Renders the built site to a single, continuous PDF that matches the live
// website exactly (dark theme, real content). Scrolls through first so the
// scroll-in animations and count-up stats are all triggered before printing.
import puppeteer from 'puppeteer-core'

const URL = process.env.PDF_URL || 'http://localhost:4173/'
const OUT = 'GSD-TransXpress-Website.pdf'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 2 })
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
await page.emulateMediaType('screen')

// Wait for web fonts.
await page.evaluate(() => document.fonts && document.fonts.ready)

// Scroll the whole page in small steps so every IntersectionObserver-driven
// animation (Reveal) and the animated counters fire.
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
  const step = window.innerHeight * 0.6
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await sleep(180)
  }
  window.scrollTo(0, document.body.scrollHeight)
  await sleep(800)
  window.scrollTo(0, 0)
  await sleep(400)
})

// Hide the floating WhatsApp button so it doesn't overlap mid-page.
await page.addStyleTag({
  content: 'a[aria-label="Chat with us on WhatsApp"]{display:none!important}',
})

const fullHeight = await page.evaluate(() =>
  Math.ceil(document.documentElement.scrollHeight),
)

await page.pdf({
  path: OUT,
  printBackground: true,
  width: '1280px',
  height: `${fullHeight}px`,
  pageRanges: '1',
})

await browser.close()
console.log(`PDF written: ${OUT} (${fullHeight}px tall)`)
