const { chromium } = require('playwright');

describe('Image loading test', () => {
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

  test('Check all images are loaded properly', async () => {
    const imgElements = await page.$$('img');
    for (const img of imgElements) {
      const src = await img.getAttribute('src');
      if (!src.startsWith('data:')) {
        const response = await page.goto(src);
        expect(response.ok()).toBeTruthy();
      }
    }
  });
});
