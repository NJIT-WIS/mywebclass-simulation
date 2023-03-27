const { test, expect } = require('@playwright/test')

test('Check for Google Analytics', async ({ context }) => {
  const page = await context.newPage()
  await page.goto('http://localhost:3000') // Replace with your website URL

  const cookies = await context.cookies()
  const hasGoogleAnalyticsCookie = cookies.some(cookie => cookie.name === '_ga')

  expect(hasGoogleAnalyticsCookie).toBeTruthy()
})
