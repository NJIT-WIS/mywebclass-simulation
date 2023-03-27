const { chromium } = require('playwright');

describe('Social Media Links Test', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.example.com/');
  });

  afterEach(async () => {
    await context.close();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have working social media links', async () => {
    // Find the social media icons/links
    const facebookLink = await page.$('a[aria-label="Facebook"]');
    const twitterLink = await page.$('a[aria-label="Twitter"]');
    const instagramLink = await page.$('a[aria-label="Instagram"]');

    // Click on each link and verify that it leads to the correct social media profile
    await Promise.all([
      page.click('a[aria-label="Facebook"]'),
      context.waitForEvent('page')
    ]);
    expect(page.url()).toBe('https://www.facebook.com/example');

    await Promise.all([
      page.click('a[aria-label="Twitter"]'),
      context.waitForEvent('page')
    ]);
    expect(page.url()).toBe('https://twitter.com/example');

    await Promise.all([
      page.click('a[aria-label="Instagram"]'),
      context.waitForEvent('page')
    ]);
    expect(page.url()).toBe('https://www.instagram.com/example/');
  });
});
