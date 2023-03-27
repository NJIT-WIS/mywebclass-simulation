const { chromium } = require('playwright');

describe('Contact form', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('can be submitted with valid data', async () => {
    await page.goto('https://example.com/contact');

    // Fill out form fields
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'johndoe@example.com');
    await page.fill('#message', 'This is a test message.');

    // Submit form
    await Promise.all([
      page.waitForNavigation(),
      page.click('#submit-button')
    ]);

    // Verify success message
    const successMessage = await page.textContent('.success-message');
    expect(successMessage).toBe('Thank you for contacting us!');
  });
});
