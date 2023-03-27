const { chromium } = require('playwright');

describe('Basic Website Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto('https://www.example.com/');
  });

  it('Test 1: Verify that the homepage loads successfully and without errors', async () => {
    expect(await page.title()).toBe('Example Domain');
  });

  it('Test 2: Confirm that all the images on the homepage are displayed correctly and without any broken links', async () => {
    const images = await page.$$('img');
    for (let i = 0; i < images.length; i++) {
      const imageSrc = await images[i].getAttribute('src');
      const response = await page.goto(imageSrc);
      expect(response.ok()).toBe(true);
    }
  });

  it('Test 3: Verify that the logo of the website is displayed in the header section', async () => {
    const logo = await page.$('img[src="https://www.example.com/images/logo.png"]');
    expect(logo).toBeTruthy();
  });

  it('Test 4: Check that the main navigation menu is working and all links are clickable', async () => {
    const menuItems = await page.$$('nav ul li a');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      const href = await menuItem.getAttribute('href');
      const response = await page.goto(href);
      expect(response.ok()).toBe(true);
    }
  });

  it('Test 5: Test the search functionality on the website', async () => {
    const searchBox = await page.$('input[name="search"]');
    await searchBox.type('example search');
    await searchBox.press('Enter');
    await page.waitForNavigation();
    expect(await page.title()).toContain('Search Results');
  });

    it('Test 6: Verify that the contact form can be submitted with valid data', async () => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'johndoe@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    expect(await page.url()).toContain('thankyou');
  });

  it('Test 7: Check that the page footer contains important links such as Privacy Policy and Terms of Service', async () => {
    const footerLinks = await page.$$('footer a');
    const expectedLinks = ['Privacy Policy', 'Terms of Service'];
    for (let i = 0; i < footerLinks.length; i++) {
      const footerLink = await footerLinks[i].textContent();
      expect(expectedLinks).toContain(footerLink);
    }
  });

  it('Test 8: Verify that the website is accessible to users with disabilities using a screen reader', async () => {
    const accessibilityTree = await page.accessibility.snapshot();
    expect(accessibilityTree).toBeTruthy();
  });

  it('Test 9: Check that the website is responsive and works well on different screen sizes', async () => {
    const screenWidths = [320, 768, 1024];
    for (let i = 0; i < screenWidths.length; i++) {
      await page.setViewportSize({ width: screenWidths[i], height: 800 });
      expect(await page.title()).toBe('Example Domain');
    }
  });

  it('Test 10: Verify that the website loads quickly and has a good performance score', async () => {
    const performanceMetrics = await page.metrics();
    expect(performanceMetrics.TimeToFirstByte < 1000).toBe(true);
    expect(performanceMetrics.TotalBlockingTime < 500).toBe(true);
  });

    it('Test 11: Verify that the website has a valid SSL certificate', async () => {
    const securityDetails = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("navigation")[0].securityDetails));
    const isSecure = JSON.parse(securityDetails).protocol === 'TLS 1.2';
    expect(isSecure).toBe(true);
  });

  it('Test 12: Check that the website has a clear and easy-to-use navigation menu', async () => {
    const menuItems = await page.$$('.navbar li');
    expect(menuItems.length).toBeGreaterThan(3);
  });

  it('Test 13: Verify that the website has a favicon', async () => {
    const faviconUrl = await page.$eval('link[rel="icon"]', el => el.href);
    const response = await page.goto(faviconUrl);
    expect(response.ok()).toBe(true);
  });

  it('Test 14: Check that the website displays images properly and does not have any broken image links', async () => {
    const imageLinks = await page.$$('img');
    for (let i = 0; i < imageLinks.length; i++) {
      const response = await imageLinks[i].evaluate(img => fetch(img.src));
      expect(response.ok).toBe(true);
    }
  });

  it('Test 15: Verify that the website has social media links and that they work', async () => {
    const socialMediaLinks = await page.$$('.social-links a');
    for (let i = 0; i < socialMediaLinks.length; i++) {
      const response = await socialMediaLinks[i].evaluate(link => fetch(link.href));
      expect(response.ok).toBe(true);
    }
  });

const { chromium } = require('playwright');

describe('Basic Website Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto('https://www.example.com/');
  });

  it('Test 16: Verify that the website has a responsive design', async () => {
    const viewportSize = await page.viewportSize();
    expect(viewportSize.width).toBeGreaterThan(320);
    expect(viewportSize.height).toBeGreaterThan(480);
  });

  it('Test 17: Check that the website has a footer with relevant information and links', async () => {
    const footerLinks = await page.$$('.footer-links a');
    expect(footerLinks.length).toBeGreaterThan(3);
  });

  it('Test 18: Verify that the website has a working search function', async () => {
    const searchInput = await page.$('#search-form input[type="search"]');
    await searchInput.type('test');
    await searchInput.press('Enter');
    await page.waitForNavigation();
    const searchResults = await page.$$('.search-results li');
    expect(searchResults.length).toBeGreaterThan(0);
  });

  it('Test 19: Check that the website has a contact page with a contact form', async () => {
    await page.goto('https://www.example.com/contact');
    const contactForm = await page.$('form#contact-form');
    expect(contactForm).not.toBeNull();
  });

  it('Test 20: Verify that the website has a terms of service and privacy policy page with relevant information', async () => {
    await page.goto('https://www.example.com/terms-of-service');
    const termsOfServiceText = await page.textContent('body');
    expect(termsOfServiceText).toContain('Terms of Service');

    await page.goto('https://www.example.com/privacy-policy');
    const privacyPolicyText = await page.textContent('body');
    expect(privacyPolicyText).toContain('Privacy Policy');
  });

   it('Test 21: Verify that the website has a working navigation menu', async () => {
    const menuItems = await page.$$('.nav-menu li a');
    expect(menuItems.length).toBeGreaterThan(0);

    for (const item of menuItems) {
      const href = await item.getAttribute('href');
      expect(href).not.toBeNull();
    }
  });

  it('Test 22: Check that the website has a "About Us" page with relevant information', async () => {
    await page.goto('https://www.example.com/about');
    const aboutUsText = await page.textContent('body');
    expect(aboutUsText).toContain('About Us');
  });

  it('Test 23: Verify that the website has a working contact email address', async () => {
    const emailLink = await page.$('a[href^="mailto:"]');
    expect(emailLink).not.toBeNull();

    const email = await emailLink.getAttribute('href');
    expect(email).toMatch(/^mailto:/);
  });

  it('Test 24: Check that the website has a sitemap or other navigation aid', async () => {
    const sitemapLink = await page.$('a[href$="sitemap.xml"]');
    expect(sitemapLink).not.toBeNull();
  });

  it('Test 25: Verify that the website has a robots.txt file that disallows sensitive content', async () => {
    const robotsTxt = await page.goto('https://www.example.com/robots.txt');
    const disallowList = robotsTxt.text().match(/Disallow: (\S+)/g);
    expect(disallowList).toContain('Disallow: /admin/');
    expect(disallowList).toContain('Disallow: /private/');
  });

  it('Test 26: Check that the website has a search box with a working search feature', async () => {
    const searchBox = await page.$('#search-box');
    expect(searchBox).not.toBeNull();

    await searchBox.type('example search term');
    await searchBox.press('Enter');

    const searchResults = await page.textContent('#search-results');
    expect(searchResults).toContain('Search results for "example search term"');
  });

  it('Test 27: Verify that the website has a working login page', async () => {
    const loginLink = await page.$('a[href="/login"]');
    expect(loginLink).not.toBeNull();

    await loginLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Login');

    const usernameInput = await page.$('#username');
    const passwordInput = await page.$('#password');
    const loginButton = await page.$('#login-button');

    expect(usernameInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
    expect(loginButton).not.toBeNull();
  });

  it('Test 28: Check that the website has a working shopping cart', async () => {
    const cartLink = await page.$('#cart-link');
    expect(cartLink).not.toBeNull();

    await cartLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Shopping Cart');

    const cartItems = await page.$$('.cart-item');
    expect(cartItems.length).toBeGreaterThan(0);
  });

  it('Test 29: Verify that the website has a working newsletter subscription form', async () => {
    const subscribeForm = await page.$('#newsletter-form');
    expect(subscribeForm).not.toBeNull();

    const emailInput = await subscribeForm.$('#email-input');
    const subscribeButton = await subscribeForm.$('#subscribe-button');

    expect(emailInput).not.toBeNull();
    expect(subscribeButton).not.toBeNull();
  });

  it('Test 30: Check that the website has a privacy policy page with clear and concise information', async () => {
    await page.goto('https://www.example.com/privacy');
    const privacyText = await page.textContent('body');
    expect(privacyText).toContain('Privacy Policy');
  });

it('Test 31: Check that the website has a working contact page', async () => {
    const contactLink = await page.$('a[href="/contact"]');
    expect(contactLink).not.toBeNull();

    await contactLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Contact Us');

    const nameInput = await page.$('#name');
    const emailInput = await page.$('#email');
    const messageInput = await page.$('#message');
    const submitButton = await page.$('#submit-button');

    expect(nameInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(messageInput).not.toBeNull();
    expect(submitButton).not.toBeNull();
  });

  it('Test 32: Verify that the website has a working FAQ page with useful information', async () => {
    await page.goto('https://www.example.com/faq');
    const faqText = await page.textContent('body');
    expect(faqText).toContain('Frequently Asked Questions');
    expect(faqText).toContain('What is your return policy?');
    expect(faqText).toContain('How do I reset my password?');
  });

  it('Test 33: Check that the website has a working social media presence with links to relevant profiles', async () => {
    const facebookLink = await page.$('a[href="https://www.facebook.com/example"]');
    const twitterLink = await page.$('a[href="https://www.twitter.com/example"]');
    const instagramLink = await page.$('a[href="https://www.instagram.com/example"]');

    expect(facebookLink).not.toBeNull();
    expect(twitterLink).not.toBeNull();
    expect(instagramLink).not.toBeNull();
  });

  it('Test 34: Verify that the website has a working careers page with job listings', async () => {
    const careersLink = await page.$('a[href="/careers"]');
    expect(careersLink).not.toBeNull();

    await careersLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Careers');

    const jobListings = await page.$$('.job-listing');
    expect(jobListings.length).toBeGreaterThan(0);
  });

  it('Test 35: Check that the website has a working "About Us" page with information about the company', async () => {
    const aboutLink = await page.$('a[href="/about"]');
    expect(aboutLink).not.toBeNull();

    await aboutLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('About Us');

    const aboutText = await page.textContent('body');
    expect(aboutText).toContain('Our Story');
    expect(aboutText).toContain('Meet the Team');
  });

   it('Test 36: Check that the website has a working search bar', async () => {
    const searchBar = await page.$('#search-bar');
    const searchButton = await page.$('#search-button');

    expect(searchBar).not.toBeNull();
    expect(searchButton).not.toBeNull();

    await searchBar.type('example search');
    await searchButton.click();

    const searchResults = await page.$('.search-results');
    expect(searchResults).not.toBeNull();
  });

  it('Test 37: Verify that the website has a working blog with recent posts', async () => {
    const blogLink = await page.$('a[href="/blog"]');
    expect(blogLink).not.toBeNull();

    await blogLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Blog');

    const postLinks = await page.$$('.blog-post-link');
    expect(postLinks.length).toBeGreaterThan(0);

    const recentPosts = await page.$('.recent-posts');
    expect(recentPosts).not.toBeNull();
  });

  it('Test 38: Check that the website has a working product page with prices and reviews', async () => {
    const productLink = await page.$('a[href="/products/example"]');
    expect(productLink).not.toBeNull();

    await productLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Example Product');

    const productPrice = await page.$('.product-price');
    const reviewSection = await page.$('.product-reviews');

    expect(productPrice).not.toBeNull();
    expect(reviewSection).not.toBeNull();
  });

  it('Test 39: Verify that the website has a working cart page with the ability to add and remove items', async () => {
    const cartLink = await page.$('a[href="/cart"]');
    expect(cartLink).not.toBeNull();

    await cartLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Shopping Cart');

    const cartItems = await page.$$('.cart-item');
    expect(cartItems.length).toBe(0);

    const addToCartButton = await page.$('.add-to-cart');
    expect(addToCartButton).not.toBeNull();

    await addToCartButton.click();

    const cartCount = await page.$('.cart-count');
    expect(cartCount).not.toBeNull();
    expect(await cartCount.textContent()).toBe('1');

    const removeItemButton = await page.$('.remove-item');
    expect(removeItemButton).not.toBeNull();

    await removeItemButton.click();

    const emptyCartMessage = await page.$('.empty-cart-message');
    expect(emptyCartMessage).not.toBeNull();
  });

  it('Test 40: Check that the website has a working login page with the ability to log in and out', async () => {
    const loginLink = await page.$('a[href="/login"]');
    expect(loginLink).not.toBeNull();

    await loginLink.click();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Login');

    const usernameInput = await page.$('#username');
    const passwordInput = await page.$('#password');
    const loginButton = await page.$('#login-button');

    expect(usernameInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
    expect(loginButton).not.toBeNull();

    await usernameInput.type('example_user');
    await passwordInput.type('password123');
    await loginButton.click();

    const userDropdown = await page.$('.user-dropdown');
    expect(userDropdown).not.toBeNull();

    const logoutButton = await page.$('.logout-button');
    expect(logoutButton).not.toBeNull();

    await logoutButton.click();
    expect(await page.url()).toContain('https://www.example.com/');
  });

});
