const { chromium } = require('@playwright/test');

describe('Example Test Suite', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    describe('Home page', () => {
        test('Test Case 1: Open Privacy Policy', async () => {
            await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
            const page1Promise = page.waitForEvent('popup');
            await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
            const page1 = await page1Promise;

            expect(page1.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
        });

        test('Test Case 2: Accepting Privacy Policy', async () => {
            await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
            await page.getByRole('button', { name: 'Agree', exact: true }).click();
        });
    });
});