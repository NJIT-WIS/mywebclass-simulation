const { chromium } = require('playwright');

describe('Page footer', () => {
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

  it('contains links to Privacy Policy and Terms of Service', async () => {
    const footer = await page.waitForSelector('footer');
    const privacyPolicyLink = await footer.$('a[href="/privacy"]');
    const termsOfServiceLink = await footer.$('a[href="/terms"]');

    expect(privacyPolicyLink).not.toBeNull();
    expect(termsOfServiceLink).not.toBeNull();
  });
});
