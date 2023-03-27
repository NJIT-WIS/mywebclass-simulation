const { chromium } = require('playwright');

describe('Shopping cart functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should add an item to the shopping cart', async () => {
    // Navigate to the shopping cart page
    await page.click('#shopping-cart-icon');
    await page.waitForNavigation();

    // Verify that the cart is empty
    const emptyCartMessage = await page.innerText('#cart-empty-message');
    expect(emptyCartMessage).toContain('Your cart is empty.');

    // Add an item to the cart
    await page.click('#add-to-cart-button');
    await page.waitForNavigation();

    // Verify that the cart contains the added item
    const cartItems = await page.$$('.cart-item');
    expect(cartItems.length).toBe(1);
    const itemName = await cartItems[0].innerText('.item-name');
    expect(itemName).toBe('Example Item');
  });
});
