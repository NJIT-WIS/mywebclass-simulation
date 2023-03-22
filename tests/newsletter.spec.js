const { test, expect } = require('@playwright/test')

test('newsletter subscription', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.waitForSelector('#newsletter-form')
  await page.fill('#newsletter-form input[name="email"]', 'test@example.com')
  await page.click('#newsletter-form button[type="submit"]')
  const successMessage = await page.waitForSelector('#newsletter-success-message')
  const successText = await successMessage.innerText()
  expect(successText).toContain('Thank you for subscribing!')
})
