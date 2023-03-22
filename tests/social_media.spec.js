const { test, expect } = require('@playwright/test')

test('Check social media links', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const socialMediaLinks = await page.$$('.nav-item .bi')

  expect(socialMediaLinks.length).toBe(3)
})
