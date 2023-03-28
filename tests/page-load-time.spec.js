// @ts-check
const { test, expect } = require('@playwright/test')

test('Page Load Time Test', async ({ page }) => {
    const start = Date.now();
    await page.goto('http://localhost:3000');
    const end = Date.now();

    const loadTime = (end - start) / 1000;
    console.log(`Load time: ${loadTime} seconds`);

    const maxSatisfactoryLoadTime = 4;
    expect(loadTime).toBeLessThanOrEqual(maxSatisfactoryLoadTime);
})
