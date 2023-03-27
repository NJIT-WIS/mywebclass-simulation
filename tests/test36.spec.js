const { chromium } = require('playwright');

describe('Search bar test', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://example.com');
  });

  afterEach(async () => {
    await context.close();
  });

  it('should be able to search for a product using the search bar', async () => {
    // find and interact with search bar element
    const searchBar = await page.$('input[name="search"]');
    await searchBar.type('product name');
    await searchBar.press('Enter');

    // verify that search results are displayed
    const searchResults = await page.$('.search-results');
    expect(searchResults).toBeTruthy();
  });
});
