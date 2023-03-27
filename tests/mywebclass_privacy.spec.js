import { test, expect } from '@playwright/test';

test('Privacy policy exists', async ({ page }) => {
  // Go to the localhost:3000
  await page.goto('http://localhost:3000/privacy.html');

  // Find the link to the privacy policy
  const privacyPolicyLink = await page.$('a[href="/privacy.html"]');

  // Check if the link exists
  expect(privacyPolicyLink).not.toBeNull();
});
