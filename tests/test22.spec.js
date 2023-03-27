const { chromium } = require('playwright');

describe('About Us Page Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com/about-us');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the correct page title', async () => {
    const pageTitle = await page.title();
    expect(pageTitle).toBe('About Us | Example.com');
  });

  it('should display relevant information about the company', async () => {
    const companyInfo = await page.textContent('.company-info');
    expect(companyInfo).toBeTruthy();
  });

  it('should have a clear and easy-to-read layout', async () => {
    const pageLayout = await page.$('.page-layout');
    expect(pageLayout).toBeTruthy();
  });
});
