// @ts-check
const { test, expect } = require('@playwright/test')

test('SEO optimization test', async ({ page }) => {
  // Navigate to your website's home page
  await page.goto('http://localhost:3000')

  // Check if keyword research has been conducted and implemented
  const pageContent = await page.innerText('body')
  expect(pageContent).toContain('MyWebClass.org')

  // Check if meta tags are optimized
  const metaDescription = await page.$eval('head meta[name="description"]', el => el.content)
  expect(metaDescription).toContain('project')
  const metaKeywords = await page.$eval('head meta[name="keywords"]', el => el.content)
  expect(metaKeywords).toContain('My Webclass Homepage')
})
