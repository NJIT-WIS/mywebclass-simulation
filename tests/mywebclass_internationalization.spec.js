import { test, expect } from '@playwright/test'

test.describe('MyWebClass.org internationalization', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
  })

  test.afterEach(async () => {
    await page.close()
  })

  test('should display the site in "en" when the "Accept-Language" header is set to "EN"', async () => {
    // Set the Accept-Language header and navigate to the website
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'EN' })
    await page.goto('http://localhost:3000')

    // Check if the lang attribute of the HTML tag is set to "en"
    const langAttribute = await page.getAttribute('html', 'lang')
    expect(langAttribute).toEqual('EN');

    // Perform any additional checks for the "en" language version of the website here, e.g., checking specific text or elements
  })
})