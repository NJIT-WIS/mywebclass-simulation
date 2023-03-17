const { test, expect } = require('@playwright/test')
const { axe, injectAxe, checkA11y } = require('axe-playwright')

test('test-accessibility-homepage', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/');

  // Inject axe into the page
  await injectAxe(page);

  // Run axe on the page
  const results = await checkA11y(page);

  // Check for accessibility violations
  expect(results.violations.length).toBe(0);
});

test('test-accessibility-template-content', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/templates/template-content.html');

  // Inject axe into the page
  await injectAxe(page);

  // Run axe on the page
  const results = await checkA11y(page);

  // Check for accessibility violations
  expect(results.violations.length).toBe(0);
});