const { test, expect } = require('@playwright/test');

test('Character encoding should support a wide range of characters and scripts', async ({ page }) => {
  // Navigate to the page to be tested
  await page.goto('http://localhost:3000');

  // Check if the page declares a valid charset
  const charset = await page.evaluate(() => {
    const charsetMeta = document.querySelector('meta[charset]');
    return charsetMeta ? charsetMeta.getAttribute('charset').toLowerCase() : '';
  });
  expect(charset).toContain('utf-8'); // Change 'utf-8' to the expected charset if different

  // Check if all characters display correctly
  const pageText = await page.innerText('html');
  expect(pageText).not.toContain('?'); // The replacement character ? indicates that a character could not be displayed
});