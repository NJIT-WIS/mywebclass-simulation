const { chromium } = require('playwright');

describe('Newsletter Subscription Form Test', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://www.example.com');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should be able to subscribe to newsletter successfully', async () => {
    // Navigate to newsletter subscription page
    await page.click('a.newsletter');

    // Fill in and submit newsletter subscription form
    await page.fill('input[name="email"]', 'test@example.com');
    await page.click('input[type="submit"]');

    // Wait for success message to appear
    await page.waitForSelector('.success-message');

    // Verify success message is displayed
    const successMessage = await page.textContent('.success-message');
    expect(successMessage).toContain('Subscription successful');
  });
});
