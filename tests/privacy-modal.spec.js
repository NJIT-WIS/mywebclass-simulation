const { test, expect } = require('@playwright/test');

test('Privacy Policy modal appears on homepage', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Check that the Privacy Policy modal appears
  const privacyModalExists = await page.$('#privacyModal');
  expect(privacyModalExists).toBeTruthy();
});
