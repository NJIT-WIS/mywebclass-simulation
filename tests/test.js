const { chromium } = require('playwright');

describe('Example Test Suite', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await .chromium.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Test Case 1', async () => {
    await page.goto('http://localhost:3000/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
    const page1 = await page1Promise;

    });
  });