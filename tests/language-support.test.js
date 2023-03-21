const { test, expect } = require('@playwright/test');

test('Language support should allow users to switch between languages and display content correctly', async ({ page }) => {
  // Navigate to the page to be tested
  await page.goto('http://localhost:3000');

  // Verify that language switcher is available
  const languageSwitcher = await page.$('select#language-switcher');
  expect(languageSwitcher).toBeTruthy();

  // Get all available language options
  const languageOptions = await languageSwitcher.$$('option');

  // Verify that at least two language options are available
  expect(languageOptions.length).toBeGreaterThan(1);

  // Loop through each language option and verify that content displays correctly
  for (const option of languageOptions) {
    const languageCode = await option.getAttribute('value');
    await languageSwitcher.selectOption({ value: languageCode });
    const pageText = await page.innerText('html');
    expect(pageText).not.toContain('Error'); // Check that the page does not display error messages due to language issues
  }
});
