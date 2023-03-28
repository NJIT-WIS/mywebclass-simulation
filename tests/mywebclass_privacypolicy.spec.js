const { test, expect } = require('@playwright/test')

test('Should have header of Privacy Policy', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.click('a:text("Privacy Policy")')
  await page.waitForSelector('header')
  // Check if header tag contains "Privacy Policy"
  const headerText = await page.$eval('h1', el => el.innerText)
  await expect(headerText).toContain('Privacy Policy')
})
