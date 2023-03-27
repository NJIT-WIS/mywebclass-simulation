const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.examplewebsite.com/product-page');

  // Check that the page title contains the product name
  const productName = await page.textContent('.product-name');
  expect(await page.title()).toContain(productName);

  // Check that the price is displayed correctly
  const productPrice = await page.textContent('.product-price');
  expect(productPrice).toMatch(/^\$\d+(\.\d{2})?$/);

  // Check that there are reviews for the product
  const reviewCount = await page.textContent('.review-count');
  expect(reviewCount).not.toBeNull();

  // Check that the add to cart button works
  const addToCartButton = await page.$('.add-to-cart-button');
  expect(addToCartButton).not.toBeNull();
  await addToCartButton.click();

  // Check that the cart shows the correct product and price
  await page.click('.cart-icon');
  const cartProduct = await page.textContent('.cart-product');
  expect(cartProduct).toEqual(productName);
  const cartPrice = await page.textContent('.cart-price');
  expect(cartPrice).toEqual(productPrice);

  await browser.close();
})();
