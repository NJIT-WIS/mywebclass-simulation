const { test, expect } = require('@playwright/test');

// HOME PAGE
test('Measure that HOME page load time is less than or equal to 5 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://localhost:3000');
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  console.log(`Page loaded in ${loadTime}ms`);
  expect(loadTime).toBeLessThanOrEqual(5000); // Check that the load time is less than or equal to 5 seconds
});

// CONTENT PAGE
test('Measure that CONTENT page load time is less than or equal to 5 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://localhost:3000/content.html');
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  console.log(`Page loaded in ${loadTime}ms`);
  expect(loadTime).toBeLessThanOrEqual(5000); // Check that the load time is less than or equal to 5 seconds
});

// PRIVACY POLICY
test('Measure that PRIVACY POLICY page load time is less than or equal to 5 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://localhost:3000/privacy.html');
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  console.log(`Page loaded in ${loadTime}ms`);
  expect(loadTime).toBeLessThanOrEqual(5000); // Check that the load time is less than or equal to 5 seconds
});

// OUR STORY (ABOUT US)
test('Measure that OUR STORY page load time is less than or equal to 5 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('http://localhost:3000/story.html');
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  console.log(`Page loaded in ${loadTime}ms`);
  expect(loadTime).toBeLessThanOrEqual(5000); // Check that the load time is less than or equal to 5 seconds
});
