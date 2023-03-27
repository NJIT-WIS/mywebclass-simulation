const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.example.com/cart');

  // Verify that the cart page is loaded correctly
  expect(await page.title()).toBe('Shopping Cart - Example');

  // Verify that there are items in the cart
  const itemsInCart = await page.$$('[data-test-id="cart-item"]');
  expect(itemsInCart.length).toBeGreaterThan(0);

  // Verify that the item quantity can be updated
  const firstItemQuantity = await page.$eval('[data-test-id="cart-item-quantity"]', el => el.textContent);
  await page.click('[data-test-id="cart-item-quantity"] + button');
  const updatedItemQuantity = await page.$eval('[data-test-id="cart-item-quantity"]', el => el.textContent);
  expect(updatedItemQuantity).not.toBe(firstItemQuantity);

  // Verify that an item can be removed from the cart
  await page.click('[data-test-id="cart-item-remove"]');
  const updatedItemsInCart = await page.$$('[data-test-id="cart-item"]');
  expect(updatedItemsInCart.length).toBe(itemsInCart.length - 1);

  await browser.close();
})();
