// @ts-check
const { test, expect } = require('@playwright/test')

test('Page load speed test', async ({ page }) => {
  // Navigate to the page you want to test
  await page.goto('http://localhost:3000')

  // Measure the time it takes for the page to fully load
  const pageLoadTime = await page.evaluate(() => {
    const timing = performance.timing
    return timing.loadEventEnd - timing.navigationStart
  })

  // Expect the page to load in under 3 seconds (3000 ms)
  expect(pageLoadTime).toBeLessThanOrEqual(3000)
})