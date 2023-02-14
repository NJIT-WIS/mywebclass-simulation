// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have the page title: MyWebClass.org | Installation', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000/installation.html')
  await expect(page).toHaveTitle('MyWebClass.org | Installation Instructions')
})
