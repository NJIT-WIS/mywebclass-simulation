const { chromium } = require('playwright');

describe('Contact Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com/contact');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have a contact form', async () => {
    const form = await page.$('form#contact-form');
    expect(form).toBeTruthy();
  });

  it('should be able to submit a valid contact form', async () => {
    const nameInput = await page.$('#name');
    await nameInput.type('John Doe');

    const emailInput = await page.$('#email');
    await emailInput.type('johndoe@example.com');

    const messageInput = await page.$('#message');
    await messageInput.type('This is a test message.');

    const submitButton = await page.$('button[type=submit]');
    await submitButton.click();

    await page.waitForSelector('#success-message', { visible: true });
    const successMessage = await page.$('#success-message');
    expect(successMessage).toBeTruthy();
  });
});
