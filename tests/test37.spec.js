const { chromium } = require('playwright');

describe('Blog Functionality Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://example.com/blog');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display recent blog posts', async () => {
    const posts = await page.$$eval('.blog-posts .post', (elements) => elements.length);
    expect(posts).toBeGreaterThan(0);
  });

  it('should allow user to click on a blog post', async () => {
    const postTitle = await page.$eval('.blog-posts .post:first-child .post-title', (element) => element.textContent);
    await page.click('.blog-posts .post:first-child .post-title');
    await page.waitForNavigation();
    const postTitleOnPage = await page.$eval('h1', (element) => element.textContent);
    expect(postTitle).toEqual(postTitleOnPage);
  });
});
