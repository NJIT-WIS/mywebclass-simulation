const { test, expect } = require('@playwright/test')

test('newsletter subscription', async ({ page }) => {
  // Navigate to the website
  await page.goto('http://localhost:3000')

  // Click the newsletter sign-up button
  const newsletterButton = await page.waitForSelector('#newsletter-btn')
  await newsletterButton.click()

  // Fill out the sign-up form
  await page.waitForSelector('#email-input')
  await page.type('#email-input', 'test@example.com')
  const submitButton = await page.waitForSelector('#submit-btn')
  await submitButton.click()

  // Verify that the confirmation message is displayed
  const confirmationMessage = await page.waitForSelector('#confirmation-message')
  const messageText = await confirmationMessage.innerText()
  expect(messageText).toContain('Thank you for subscribing!')
})
