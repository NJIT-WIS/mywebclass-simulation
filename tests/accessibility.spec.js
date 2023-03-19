const { test } = require('@playwright/test')
const { axe, injectAxe, checkA11y } = require('axe-playwright')

test('test-accessibility-homepage', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');

    // Inject axe into the page
    await injectAxe(page);

    // Run axe on the page
    const results = await checkA11y(page, null, {
        axeOptions: {},
        detailedReport: true,
        detailedReportOptions: {html: true}
    });
});

test('test-accessibility-template-content', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/templates/template-content.html');

    // Inject axe into the page
    await injectAxe(page);

    // Run axe on the page
    const results = await checkA11y(page, null, {
        axeOptions: {},
        detailedReport: true,
        detailedReportOptions: {html: true}
    });
});