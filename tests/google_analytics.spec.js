const { test } = require('@playwright/test')
const assert = require('assert')

test('Google Analytics is installed', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const gaScriptTag = await page.$('script[src*="googletagmanager.com/gtag/js"]')

  assert.ok(gaScriptTag, 'Google Analytics script tag is not present on the page')
})
