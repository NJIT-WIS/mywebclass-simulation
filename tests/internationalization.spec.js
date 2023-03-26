const { test, expect } = require('@playwright/test');

test('[Language] - i18next cookie exists', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000/');

  // Get all cookies
  const cookies = await page.context().cookies();

  // Find the i18next cookie
  const i18nextCookie = cookies.find(cookie => cookie.name === 'i18next');

  // Assert that the i18next cookie exists
  expect(i18nextCookie).toBeDefined();
});

test('[Language] - Test default language is set to en-US', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000/');

  // Get all cookies
  const cookies = await page.context().cookies();

  // Find the i18next cookie
  const i18nextCookie = cookies.find(cookie => cookie.name === 'i18next');

  // Assert that the i18next cookie defaults to 'en-US' on first use.
  expect(i18nextCookie.value).toBe('en-US');
});

test('[Language] - Validate i18next language selector changed language to SPANISH', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000/');

  // Wait for the Privacy modal to appear and close it
  const modal = await page.waitForSelector('#privacyModal');
  await page.click('button[data-bs-dismiss="modal"]');

  // Click on the language selector to open the dropdown menu
  await page.click('#languageSelector');

  // Click on the Spanish option
  await page.click('#spanishOption');

  // Get all cookies
  const cookies = await page.context().cookies();
  // Find the i18next cookie
  const i18nextCookie = cookies.find(cookie => cookie.name === 'i18next');

  // Assert that the i18next cookie is now to 'es' after switching to Spanish.
  expect(i18nextCookie.value).toBe('es');
});

