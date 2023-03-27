const { chromium } = require('playwright');

describe('Verify website has a sitemap or other navigation aid', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Check for sitemap.xml file', async () => {
    await page.goto('https://www.example.com/sitemap.xml');

    const pageTitle = await page.title();
    expect(pageTitle).toBe('Sitemap');
  });

  test('Check for navigation aid link in the footer', async () => {
    await page.goto('https://www.example.com');

    const navigationAidLink = await page.$('footer a[href="/sitemap.xml"]');
    expect(navigationAidLink).not.toBeNull();
  });
});
