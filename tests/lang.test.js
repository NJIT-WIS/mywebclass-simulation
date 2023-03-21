const { test, expect } = require('@playwright/test');

test.describe('Language Test', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Should have correct language attribute', async () => {
    await page.goto('http://localhost:3000')
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBe('EN'); // Replace with the expected language code
  });
});
