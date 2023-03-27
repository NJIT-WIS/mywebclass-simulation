const { chromium } = require('playwright');

describe('Social Media Links Test', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com/');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have social media links', async () => {
    const socialMediaLinks = await page.$$('a[aria-label^="Follow us on"]');
    expect(socialMediaLinks.length).toBeGreaterThan(0);
  });

  it('should be able to click on social media links', async () => {
    const socialMediaLinks = await page.$$('a[aria-label^="Follow us on"]');

    for (const link of socialMediaLinks) {
      const href = await link.getAttribute('href');
      const newPage = await browser.newPage();
      await newPage.goto(href);

      const pageTitle = await newPage.title();
      expect(pageTitle).not.toMatch(/404/);

      await newPage.close();
    }
  });
});
