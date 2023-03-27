// @ts-check
const { chromium } = require('playwright');

describe('Open web', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('should open website', async () => {
    await page.goto('https://mp299.github.io/mywebclass-simulation/');
    expect(await page.title()).toContain('MyWebClass Homepage');
  });
});
