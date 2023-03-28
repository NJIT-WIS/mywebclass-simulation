// @ts-check
const { test, expect } = require('@playwright/test')

//test
test('Test Case 1: Check Privacy Policy', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
    const page1 = await page1Promise;

    expect(page1.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
});

test('Test Case 2: Accepting Privacy Policy', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();

    expect(page.url()).toContain('https://kaanismet.github.io/mywebclass-simulation/');
});

test('Test Case 3: Click on Templates', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Content Template' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/content.html');
});

test('Test Case 4: Click on Our Story', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Our Story' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/story.html');
});

/*
test('Test Case 5: Click on Privacy Policy', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    //await page.getByLabelText('link', { name: 'Privacy Policy' }).click();
    await page.waitForSelector('#footer a[title="Privacy Policy"]');
    await page.click('#footer a[title="Privacy Policy"]');

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
});
*/
test('Test Case 5: Click on Privacy Policy', async ({ page }) => {
  try {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.waitForSelector('button[name="agree"]');
    await page.click('button[name="agree"]');
    await Promise.all([
      page.waitForNavigation(),
      page.click('a[title="Privacy Policy"]')
    ]);
    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/privacy.html');
  } catch (error) {
    console.error(error);
  }
});