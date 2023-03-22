const { test, expect } = require('@playwright/test')

test('Should have a content page', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html')
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Content')
})
