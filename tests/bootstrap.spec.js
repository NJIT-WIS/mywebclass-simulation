const { test, expect } = require('@playwright/test')

test('Check presence of Bootstrap classes', async ({ page }) => {
  await page.goto('https://www.example.com')

  // Check for presence of elements with Bootstrap CSS classes
  const navbar = await page.waitForSelector('.navbar')
  const btnPrimary = await page.waitForSelector('.btn-primary')
  const containerFluid = await page.waitForSelector('.container-fluid')

  // Verify that the elements exist on the page
  expect(navbar).toBeDefined()
  expect(btnPrimary).toBeDefined()
  expect(containerFluid).toBeDefined()
})
