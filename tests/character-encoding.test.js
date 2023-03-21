const { test, expect } = require('@playwright/test');

test('Check UTF-8 encoding', async ({ page }) => {
  // Navigate to the web page
  await page.goto('http://localhost:3000');

  // Get the content encoding from the HTTP header
  const contentEncoding = await page.evaluate(() => {
    return document.characterSet;
  });

  // Assert that the content encoding is UTF-8
  expect(contentEncoding).toBe('UTF-8');
});
