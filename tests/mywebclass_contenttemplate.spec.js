const { test, expect } = require('@playwright/test')

test('Should have header of Article Title', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByRole('link', { name: 'Content Template' }).click()
  await page.waitForSelector('header')
  // Check if header tag contains "Article Title"
  const headerText = await page.$eval('h1', el => el.innerText)
  await expect(headerText).toContain('Article Title')
})
