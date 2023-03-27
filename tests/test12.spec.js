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

  it('should open the navigation menu when clicking the menu button', async () => {
    // Click on the menu button
    await page.click('button.menu');

    // Verify that the navigation menu is displayed
    const navigationMenu = await page.waitForSelector('nav.navigation');
    expect(navigationMenu).not.toBeNull();

    // Click on the menu button again to close the navigation menu
    await page.click('button.menu');
  });

  it('should navigate to the correct page when clicking a link in the navigation menu', async () => {
    // Click on the menu button
    await page.click('button.menu');

    // Click on a link in the navigation menu
    await page.click('nav.navigation a[href="/about"]');

    // Verify that the page has loaded
    const aboutPage = await page.waitForSelector('h1.page-title:has-text("About Us")');
    expect(aboutPage).not.toBeNull();

    // Navigate back to the homepage
    await page.goBack();
  });
});
