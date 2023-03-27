const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to website
  await page.goto('https://www.example.com');

  // Check that search box exists
  const searchBox = await page.$('#search-box');
  expect(searchBox).toBeTruthy();

  // Type search query and press Enter
  await searchBox.type('example search');
  await searchBox.press('Enter');

  // Wait for search results page to load
  await page.waitForSelector('#search-results');

  // Check that search results are displayed
  const searchResults = await page.$('#search-results');
  expect(searchResults).toBeTruthy();

  await browser.close();
})();
