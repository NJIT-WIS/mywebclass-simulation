const { chromium } = require('playwright');

describe('Terms of Service and Privacy Policy', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have a link to the terms of service page', async () => {
    const link = await page.$('a[href="/terms"]');
    expect(link).toBeTruthy();

    await link.click();
    await page.waitForNavigation();

    const title = await page.title();
    expect(title).toMatch(/terms of service/i);
  });

  it('should have a link to the privacy policy page', async () => {
    const link = await page.$('a[href="/privacy"]');
    expect(link).toBeTruthy();

    await link.click();
    await page.waitForNavigation();

    const title = await page.title();
    expect(title).toMatch(/privacy policy/i);
  });
});
