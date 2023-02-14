// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have MyWebClass.org | Article for the title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000/article.html')
  await expect(page).toHaveTitle('MyWebClass.org | Article')
})
