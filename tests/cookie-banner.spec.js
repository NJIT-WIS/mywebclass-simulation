const { test, expect } = require('@playwright/test');

test('Check if the cookie banner is present', async ({ page }) => {
  // Navigate to your website's URL (replace 'http://localhost:3000' with your website's URL)
  await page.goto('http://localhost:3000');

  // Check if the cookie banner is present
  const cookieBanner = await page.$('.cookie-banner');
  expect(cookieBanner).toBeTruthy();

  // Check if the Accept button is present
  const acceptButton = await page.$('.cookie-banner .accept');
  expect(acceptButton).toBeTruthy();

  // Check if the Reject button is present
  const rejectButton = await page.$('.cookie-banner .reject');
  expect(rejectButton).toBeTruthy();

  // Check if the Learn More button is present
  const learnMoreButton = await page.$('.cookie-banner .learn-more');
  expect(learnMoreButton).toBeTruthy();
});