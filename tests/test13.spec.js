const { chromium } = require('playwright');

describe('Website Favicon Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://example.com');
  });

  afterEach(async () => {
    await page.close();
  });

  it('Should have a favicon', async () => {
    const favicon = await page.$('link[rel="icon"]');
    expect(favicon).toBeTruthy();
  });
});
