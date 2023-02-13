// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:8081/');

  await expect(page).toHaveTitle('MyWebClass.org');
});