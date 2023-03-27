const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to login page
  await page.goto('https://www.example.com/login');

  // Fill in login form
  await page.fill('input[name="username"]', 'myusername');
  await page.fill('input[name="password"]', 'mypassword');

  // Click on login button
  await page.click('button[type="submit"]');

  // Verify successful login
  await page.waitForSelector('#logout-button');

  // Click on logout button
  await page.click('#logout-button');

  // Verify successful logout
  await page.waitForSelector('#login-button');

  // Close the browser
  await browser.close();
})();
