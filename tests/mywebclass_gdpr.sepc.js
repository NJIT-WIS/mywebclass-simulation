// This is a playwright test to check if the websiten follows thw GDPR guidleines or not

// @ts-check
const { test, expect } = require('@playwright/test')

test('Privacy policy should follow GDPR guidelines', async ({ page }) => {
  // Navigate to the privacy policy page
  await page.goto('http://localhost:3000/privacy.html')

  // Check if the policy includes a statement about GDPR compliance
  const policyText = await page.innerText('body')
  const includesGDPRStatement = policyText.includes('GDPR')
  expect(includesGDPRStatement).toBeTruthy()
})
