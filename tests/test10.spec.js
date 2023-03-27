const { chromium } = require('playwright');

describe('Website Performance Test', () => {
  let browser, context, page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have a good performance score', async () => {
    await page.goto('https://example.com');

    const performanceTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));
    const loadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;

    expect(loadTime).toBeLessThanOrEqual(3000); // load time should be less than or equal to 3 seconds

    const performanceMetrics = await page.evaluate(() => JSON.parse(JSON.stringify(window.performance.getEntriesByType("navigation"))));
    const firstContentfulPaint = performanceMetrics[0].domContentLoadedEventEnd - performanceTiming.navigationStart;

    expect(firstContentfulPaint).toBeLessThanOrEqual(2000); // FCP should be less than or equal to 2 seconds

    const speedIndex = await page.evaluate(() => window.performance.getSpeedIndex());

    expect(speedIndex).toBeLessThanOrEqual(2000); // speed index should be less than or equal to 2 seconds
  });
});
