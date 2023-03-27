const { chromium } = require('@playwright/test');

//test 1
test('Test Case 1: Open Privacy Policy', async () => {
            await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
            const page1Promise = page.waitForEvent('popup');
            await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
            const page1 = await page1Promise;

            expect(page1.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
});