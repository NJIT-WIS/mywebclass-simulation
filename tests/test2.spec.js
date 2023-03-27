const { chromium } = require('playwright');

describe('Homepage Images', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display all images on the homepage without broken links', async () => {
    const imageElements = await page.$$('img');
    const imageUrls = [];
    for (let i = 0; i < imageElements.length; i++) {
      const url = await imageElements[i].getAttribute('src');
      imageUrls.push(url);
      expect(url).not.toBeNull(); // Check that the image URL is not null
    }
    for (let i = 0; i < imageUrls.length; i++) {
      const response = await page.goto(imageUrls[i]);
      expect(response.ok()).toBe(true); // Check that the image is loaded without any errors
    }
  });
});
