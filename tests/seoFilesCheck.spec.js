const { test, expect } = require('@playwright/test');
const fetch = require('node-fetch');
const { URL } = require('url');

test('Check if robots.txt and sitemap.xml exist', async ({ page }) => {
  // Navigate to the homepage
  const websiteUrl = 'http://localhost:3000';
  await page.goto(websiteUrl);

  // Extract the base URL of the website
  const baseUrl = new URL(websiteUrl).origin;

  // Check if robots.txt exists
  const robotsTxtUrl = `${baseUrl}/robots.txt`;
  const robotsTxtResponse = await fetch(robotsTxtUrl);
  expect(robotsTxtResponse.status).toBe(200);

  // Check if sitemap.xml exists
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const sitemapResponse = await fetch(sitemapUrl);
  expect(sitemapResponse.status).toBe(200);
});
