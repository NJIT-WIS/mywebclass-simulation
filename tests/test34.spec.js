const { chromium } = require('playwright');

describe('Careers page test', () => {
  let browser, context, page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have a working careers page with job listings', async () => {
    await page.goto('https://example.com/careers');

    // Confirm that the page has loaded by checking for a specific element
    const pageTitle = await page.waitForSelector('h1');
    expect(await pageTitle.innerText()).toBe('Careers at Example Inc.');

    // Check that the page contains a list of job listings
    const jobListings = await page.$$('.job-listing');
    expect(jobListings.length).toBeGreaterThan(0);

    // Select one of the job listings and click on it
    const firstJobListing = jobListings[0];
    await firstJobListing.click();

    // Confirm that the page for the selected job listing has loaded by checking for a specific element
    const jobTitle = await page.waitForSelector('.job-title');
    expect(await jobTitle.innerText()).toContain('Software Engineer');
  });
});
