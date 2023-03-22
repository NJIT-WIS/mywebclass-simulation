const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');

  // Get all images on the page
  const images = await page.$$eval('img', (imgs) =>
    imgs.map((img) => ({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt'),
    }))
  );

  // Iterate over all images and check for alternative text
  for (const image of images) {
    // Check if the image has an alt attribute
    if (!image.alt) {
      console.error(`Image "${image.src}" does not have alternative text`);
    }
  }

  await browser.close();
})();
