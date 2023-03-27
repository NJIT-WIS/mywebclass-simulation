const { chromium } = require('playwright');

describe('Responsive Design Test', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display website properly on desktop', async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    // Check that website is properly displayed on desktop
    const header = await page.waitForSelector('.header');
    const footer = await page.waitForSelector('.footer');
    expect(header).toBeDefined();
    expect(footer).toBeDefined();
  });

  it('should display website properly on tablet', async () => {
    await page.setViewportSize({ width: 768, height: 1024 });
    // Check that website is properly displayed on tablet
    const header = await page.waitForSelector('.header');
    const footer = await page.waitForSelector('.footer');
    expect(header).toBeDefined();
    expect(footer).toBeDefined();
  });

  it('should display website properly on mobile', async () => {
    await page.setViewportSize({ width: 375, height: 667 });
    // Check that website is properly displayed on mobile
    const header = await page.waitForSelector('.header');
    const footer = await page.waitForSelector('.footer');
    expect(header).toBeDefined();
    expect(footer).toBeDefined();
  });
});
