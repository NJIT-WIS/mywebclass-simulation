const { test, expect } = require('@playwright/test');

// HOME
test('Check elements in HOME main section for scroll-offset class', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const headings = await page.$$('main h1, main h2, main h3, main h4, main h5, main h6');

  for (let i = 0; i < headings.length; i++) {
    const classList = await headings[i].getAttribute('class');
    expect(classList).toContain('scroll-offset'); // check if scroll-offset class is added to each heading element
  }
});

// OUR STORY
test('Check elements in OUR STORY main section for scroll-offset class', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html');
  const headings = await page.$$('main h1, main h2, main h3, main h4, main h5, main h6');

  for (let i = 0; i < headings.length; i++) {
    const classList = await headings[i].getAttribute('class');
    expect(classList).toContain('scroll-offset'); // check if scroll-offset class is added to each heading element
  }
});

// PRIVACY
test('Check elements in PRIVACY main section for scroll-offset class', async ({ page }) => {
  await page.goto('http://localhost:3000/privacy.html');
  const headings = await page.$$('main h1, main h2, main h3, main h4, main h5, main h6');

  for (let i = 0; i < headings.length; i++) {
    const classList = await headings[i].getAttribute('class');
    expect(classList).toContain('scroll-offset'); // check if scroll-offset class is added to each heading element
  }
});

// CONTENT
test('Check elements in CONTENT main section for scroll-offset class', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html');
  const headings = await page.$$('main h1, main h2, main h3, main h4, main h5, main h6');

  for (let i = 0; i < headings.length; i++) {
    const classList = await headings[i].getAttribute('class');
    expect(classList).toContain('scroll-offset'); // check if scroll-offset class is added to each heading element
  }
});
