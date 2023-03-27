const { chromium } = require('playwright');

describe('Main Navigation Menu Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com/');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Verify all links in the main navigation menu are clickable', async () => {
    const navLinks = await page.$$('nav ul li a');

    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      expect(href).not.toBeNull();

      await Promise.all([
        link.click(),
        page.waitForNavigation()
      ]);

      const pageTitle = await page.title();
      expect(pageTitle).not.toBe('404 Page Not Found');

      await page.goBack();
    }
  });
});
