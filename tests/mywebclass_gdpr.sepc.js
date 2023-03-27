// This is the code for GDPR

const { test,except } = require('playwright');

(async () => { 
  const browser = await chromium.launch(); 
  const page = await browser.newPage();

await page.goto('https://localhost:3000');

// Test for GDPR compliance 
  const hasCookieBanner = await page.$('#cookie-banner'); 
  expect(hasCookieBanner).not.toBeNull();

// Test for GDPR opt-in 
  await page.click('#cookie-banner .accept-cookies'); 
  const isOptedIn = await page.$eval('#cookie-banner .accept-cookies', el => el.textContent === 'Opted In'); 
  expect(isOptedIn).toBe(true);

// Test for GDPR data deletion request 
  await page.click('#my-account'); 
  await page.click('#delete-data'); 
  const isDeleted = await page.$eval('#delete-data-confirm', el => el.textContent === 'Data Deleted'); 
  expect(isDeleted).toBe(true);

await browser.close(); })();
