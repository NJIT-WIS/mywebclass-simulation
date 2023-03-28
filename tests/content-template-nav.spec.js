// @ts-check
const { test, expect } = require('@playwright/test')

test('Content Template Navigation', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your website URL

    const ourStoryLink = await page.waitForSelector('a:text("Content Template")', { timeout: 3000 });
    expect(ourStoryLink).toBeTruthy();

    await Promise.all([
      page.waitForNavigation(),
      ourStoryLink.click(),
    ]);

    expect(page.url()).toContain('content.html');
})
