const { chromium } = require('playwright');

describe('Test 25: Verify that the website has a robots.txt file that disallows sensitive content', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Check if robots.txt file exists and disallows sensitive content', async () => {
    await page.goto('https://example.com/robots.txt');
    const content = await page.innerText('pre');
    expect(content).toContain('User-agent: *\nDisallow: /secret/\nDisallow: /passwords/\n');
  });
});
