const { chromium } = require('playwright');

describe('Contact email test', () => {
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

  test('Contact email is valid', async () => {
    const email = await page.$eval('a[href^="mailto:"]', (element) => element.textContent);
    expect(email).toMatch(/^\S+@\S+\.\S+$/);
  });
});
