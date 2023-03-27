const { chromium } = require('playwright');

describe('Navigation menu test', () => {
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

  it('should have a working navigation menu', async () => {
    // Find the navigation menu
    const navMenu = await page.waitForSelector('nav');

    // Find all the links in the navigation menu
    const navLinks = await navMenu.$$('a');

    // Verify that each link is clickable and leads to the correct page
    for (let i = 0; i < navLinks.length; i++) {
      // Get the link's URL
      const linkUrl = await navLinks[i].getAttribute('href');

      // Click the link
      await navLinks[i].click();

      // Wait for the page to load
      await page.waitForNavigation();

      // Verify that the URL of the new page matches the link's URL
      expect(page.url()).toEqual(linkUrl);

      // Go back to the homepage
      await page.goBack();
    }
  });
});
