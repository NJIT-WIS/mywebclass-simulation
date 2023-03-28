// @ts-check
const { test, expect } = require('@playwright/test')

test('Should show Privacy Policy prompt on first visit', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const privacyPolicyPrompt = await page.waitForSelector('.cookie-consent', { timeout: 3000 });
    expect(privacyPolicyPrompt).toBeTruthy();

    const privacyPolicyButtonText = await page.$eval('#consent-button', (element) => element.textContent);
    expect(privacyPolicyButtonText).toContain('I Agree');
})
