const { test, expect } = require('@playwright/test');

test('Should display the correct title and heading', async ({ page }) => {
  // Navigate to the page.
  await page.goto('http://localhost:3000/privacy.html');

  // Expect the page title to be "MyWebClass.org | Privacy Policy".
  await expect(page.title()).toEqual('MyWebClass.org | Privacy Policy');

  // Expect the page heading to be "Privacy Policy".
  const heading = await page.$eval('h1', el => el.textContent);
  await expect(heading).toEqual('Privacy Policy');
});