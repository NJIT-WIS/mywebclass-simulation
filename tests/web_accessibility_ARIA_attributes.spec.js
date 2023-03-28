// @ts-check
const { test, expect } = require('@playwright/test');

test('Check aria-label of navigation element', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const navigation = await page.$('nav[role="navigation"]');
  const ariaLabel = await navigation.getAttribute('aria-label');
  expect(ariaLabel).toBe('Main navigation');
});
