const { chromium } = require('@playwright/test');

//test 1
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
    const page1Promise = page.waitForNavigation();

    expect(page1.url()).toContain('https://kaanismet.github.io/mywebclass-simulation/');
});

test('Test Case 3: Click on Templates', async () => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('link', { name: 'Content Template' }).click();
    const page1Promise = page.waitForNavigation();

    expect(page1.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/templates.html');

});
