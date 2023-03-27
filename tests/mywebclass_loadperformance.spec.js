// @ts-check
const { test, expect } = require('@playwright/test')

test('Performance Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000')

  // Measure the load time of the website
  const loadStartTime = Date.now()
  await page.waitForLoadState('networkidle')
  const loadTime = Date.now() - loadStartTime

  // Check if the load time is below a certain threshold
  expect(loadTime).toBeLessThanOrEqual(5000) // 5 seconds
})
