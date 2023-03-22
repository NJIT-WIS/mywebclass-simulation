const { test, expect } = require('@playwright/test')

test('submit newsletter form', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.waitForSelector('form[id="newsletter-form"]')
  await page.fill('form[id="newsletter-form"] input[name="email"]', 'test@example.com')
  await page.click('form[id="newsletter-form"] button[type="submit"]')
  const successMessage = await page.waitForSelector('#newsletter-success-message')
  const successMessageText = await successMessage.textContent()
  expect(successMessageText).toContain('Thanks for subscribing!')
})
