const { test, expect } = require('@playwright/test');

// CONTENT page
test('Verify reading time is displayed on the Content page', async ({ page }) => {
  // Navigate to the Content page, as a test
  await page.goto('http://localhost:3000/content.html');

  // Check that the reading time is displayed on the page with ID "readingTime"
  const readingTimeElement = await page.$('#readingTime');
  expect(readingTimeElement).not.toBeNull();

  // Check that the reading time is a valid number
  const readingTime = await readingTimeElement.innerText();
  expect(parseInt(readingTime)).not.toBeNaN();
});

// PRIVACY POLICY page
test('Verify reading time is displayed on the Privacy Policy page', async ({ page }) => {
  // Navigate to the Privacy page, as a test
  await page.goto('http://localhost:3000/privacy.html');

  // Check that the reading time is displayed on the page with ID "readingTime"
  const readingTimeElement = await page.$('#readingTime');
  expect(readingTimeElement).not.toBeNull();

  // Check that the reading time is a valid number
  const readingTime = await readingTimeElement.innerText();
  expect(parseInt(readingTime)).not.toBeNaN();
});

// OUR STORY page
test('Verify reading time is displayed on the Our Story page', async ({ page }) => {
  // Navigate to the Story page, as a test
  await page.goto('http://localhost:3000/story.html');

  // Check that the reading time is displayed on the page with ID "readingTime"
  const readingTimeElement = await page.$('#readingTime');
  expect(readingTimeElement).not.toBeNull();

  // Check that the reading time is a valid number
  const readingTime = await readingTimeElement.innerText();
  expect(parseInt(readingTime)).not.toBeNaN();
});
