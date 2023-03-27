const { chromium } = require('playwright');

describe('Verify website has working login page', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should navigate to the login page', async () => {
    await page.goto('https://www.example.com/login');
    expect(await page.title()).toBe('Login | Example Website');
  });

  it('should display the login form', async () => {
    const loginForm = await page.waitForSelector('#login-form');
    expect(loginForm).not.toBeNull();
  });

  it('should allow a user to enter their credentials', async () => {
    const emailInput = await page.waitForSelector('#email-input');
    const passwordInput = await page.waitForSelector('#password-input');

    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();

    await emailInput.type('exampleuser@example.com');
    await passwordInput.type('examplepassword');
  });

  it('should allow the user to submit the login form', async () => {
    const submitButton = await page.waitForSelector('#submit-button');

    expect(submitButton).not.toBeNull();

    await submitButton.click();
  });

  it('should navigate to the user dashboard after successful login', async () => {
    await page.waitForNavigation();
    expect(await page.title()).toBe('User Dashboard | Example Website');
  });
});
