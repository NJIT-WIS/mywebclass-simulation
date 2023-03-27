// @ts-check
const { chromium } = require('playwright');

describe('Verify logo display', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display logo in the header section', async () => {
    const logo = await page.$('header img');
    expect(logo).toBeTruthy();
  });
});
