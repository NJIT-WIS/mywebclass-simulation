const { test, expect } = require('@playwright/test')

test('Check social media links', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const socialMediaLinks = await page.$$('.nav-item .bi')

  expect(socialMediaLinks.length).toBe(3)
})

test('Footer contains LinkedIn social media link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const linkedinLink = await page.$('a[aria-label="LinkedIn Link"]');
  expect(linkedinLink).not.toBeNull();
});

test('Footer contains Twitter social media link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const twitterLink = await page.$('a[aria-label="Twitter Link"]');
  expect(twitterLink).not.toBeNull();
});

test('Footer contains Facebook social media link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const twitterLink = await page.$('a[aria-label="Facebook Link"]');
  expect(twitterLink).not.toBeNull();
});
