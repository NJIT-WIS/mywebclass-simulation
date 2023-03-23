const { test, expect } = require('@playwright/test');

// Define the browsers to test
const browsers = ['chromium', 'firefox', 'webkit'];

for (const browserType of browsers) {
  test(`Check cross-browser compatibility on ${browserType}`, async ({ browser }) => {
    // Launch the specified browser
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the website's homepage
    await page.goto('http://localhost:3000');

    // Check that the page title is correct
    const pageTitle = await page.title();
    expect(pageTitle).toBe('MyWebClass.org');

    // Close the browser context
    await context.close();
  });
}
