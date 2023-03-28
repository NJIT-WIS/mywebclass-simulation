import { test, expect } from '@playwright/test';

test.use({
  // Configure Safari browser
  browserName: 'chromium'
});

test.describe('Keyboard Navigation Test', () => {
  test('should be able to navigate using keyboard', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://localhost:3000');

    // Focus on the first link
    await page.keyboard.press('Tab');
    await page.waitForSelector('a');
    const firstLink = await page.$('a');
    const linkText = await firstLink.innerText();
    expect(linkText).toBe('Example Domain');

    // Click on the first link using Enter key
    await page.keyboard.press('Enter');
    const newPage = await context.waitForEvent('page');
    const pageTitle = await newPage.title();
    expect(pageTitle).toContain('Example Domain');

    // Navigate back to the previous page using the Backspace key
    await newPage.keyboard.press('Backspace');
    await page.waitForNavigation();
    const pageTitleAfterBack = await page.title();
    expect(pageTitleAfterBack).toBe('Example Domain');
  });
});
