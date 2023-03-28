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

test('Test Case 5: Click on Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/resources.html');
});

test('Test Case 6: Click on Forum', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Forum' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/forum.html');
});

test('Test Case 7: Click on Courses', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Courses' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/courses.html');
});

test('Test Case 8: Click on Career', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Career' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/career.html');
});

test('Test Case 9: Access the Develop and curate', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Content Template' }).click();
    await page.getByRole('link', { name: 'Develop and cur...' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/content.html#section1');
});

test('Test Case 10: Access the Create a web forum', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Content Template' }).click();
    await page.getByRole('link', { name: 'Create a web co...' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/content.html#section2');
});

test('Test Case 11: Access the Offer online courses', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Content Template' }).click();
    await page.getByRole('link', { name: 'Offer online co...' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/content.html#section3');
});

test('Test Case 12: Access the Provide Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Content Template' }).click();
    await page.getByRole('link', { name: 'Provide resourc...' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/content.html#section4');
});

test('Test Case 13: Access the Web Development Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'Web Development...' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/resources.html');
});

test('Test Case 14: Access the HTML Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'HTML' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/resources.html#section1');
});

test('Test Case 15: Access the CSS Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'CSS' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/resources.html#section2');
});

test('Test Case 15: Access the JavaScript Resources', async ({ page }) => {
    await page.goto('https://kaanismet.github.io/mywebclass-simulation/');
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'JavaScript' }).click();

    expect(page.url()).toBe('https://kaanismet.github.io/mywebclass-simulation/resources.html#section3');
});