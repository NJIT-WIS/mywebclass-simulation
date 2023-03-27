// @ts-check
const { test, expect } = require('@playwright/test')

test('Privacy policy should be present on website', async ({ page }) => {
  await page.goto('http://localhost:3000')
  // Check if the privacy policy link is present
  const privacyPolicyLink = await page.$('a[href="privacy.html"]')
  expect(privacyPolicyLink).toBeDefined()
})

