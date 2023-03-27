const { test, expect } = require('@playwright/test');

test('Contact page test', async ({ page }) => {
  // Go to the contact page
  await page.goto('https://www.example.com/contact');

  // Check that the page title contains "Contact"
  expect(await page.title()).toContain('Contact');

  // Fill out the contact form
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'johndoe@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message.');

  // Submit the form
  await page.click('button[type="submit"]');

  // Check that a success message is displayed
  expect(await page.textContent('.success-message')).toContain('Thank you for your message!');
});
