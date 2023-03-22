import { test, expect } from '@playwright/test'

test.describe('MyWebClass.org tests', () => {
  test('SEO tests', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    // Test for keyword research
    const keywords = ['MyWebClass.org']
    const pageContent = await page.textContent('body')
    const hasKeywords = keywords.every(keyword => pageContent.includes(keyword))
    expect(hasKeywords).toBeTruthy()
    // Test for meta tags
    const pageTitle = await page.title()
    const pageMetaDescription = await page.$eval('meta[name="description"]', el => el.content)
    const pageMetaKeywords = await page.$eval('meta[name="keywords"]', el => el.content)
    const hasMetaTags = Boolean(pageTitle && pageMetaDescription && pageMetaKeywords)
    expect(hasMetaTags).toBeTruthy()
    // Test for URL structure
    const pageUrl = page.url()
    const pageUrlPathname = new URL(pageUrl).pathname
    const hasProperUrlStructure = Boolean(pageUrl && !pageUrl.includes('%20') && pageUrlPathname === '/')
    expect(hasProperUrlStructure).toBeTruthy()
    // Test for fast load times
    const pageLoadTime = await page.evaluate(() => window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart)
    const isFastLoading = pageLoadTime <= 5000
    expect(isFastLoading).toBeTruthy()
  })
})
