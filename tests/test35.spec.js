const { chromium } = require('playwright');

describe('About Us Page', () => {
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
    await page.goto('https://example.com/about-us');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should have a page title', async () => {
    expect(await page.title()).toMatch(/About Us/);
  });

  it('should display company information', async () => {
    const companyInfo = await page.$('.company-info');
    expect(companyInfo).not.toBeNull();
  });

  it('should have a team section', async () => {
    const teamSection = await page.$('.team-section');
    expect(teamSection).not.toBeNull();
  });

  it('should have a mission statement', async () => {
    const missionStatement = await page.$('.mission-statement');
    expect(missionStatement).not.toBeNull();
  });

  it('should have a history section', async () => {
    const historySection = await page.$('.history-section');
    expect(historySection).not.toBeNull();
  });

});
