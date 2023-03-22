const { test, expect } = require('@playwright/test')

test('Website should be compatible with mobile devices', async ({ page }) => {
  // Set viewport to a mobile device size
  await page.setViewportSize({ width: 375, height: 812 })

  // Navigate to the website
  await page.goto('http://localhost:3000')

  // Check that the website title is correct
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org')

  // Check that the main content is visible
  const content = await page.waitForSelector('main')
  expect(await content.isVisible()).toBeTruthy()
})
