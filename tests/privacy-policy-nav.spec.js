// @ts-check
const { test, expect } = require('@playwright/test')

test('Privacy Policy Navication', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your website URL

    const ourStoryLink = await page.waitForSelector('a:text("Privacy Policy")', { timeout: 3000 });
    expect(ourStoryLink).toBeTruthy();

    await Promise.all([
      page.waitForNavigation(),
      ourStoryLink.click(),
    ]);

    expect(page.url()).toContain('privacy.html');
})
