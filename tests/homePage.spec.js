// @ts-check
const { test, expect } = require('@playwright/test')

// HOME PAGE
test('HOME should have MyWebClass.org title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle('MyWebClass.org')
})

test('Check homepage for Bootstrap nav with navbar-brand and img child', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const nav = await page.$('nav.navbar');
  expect(nav).toBeTruthy(); // check if nav with class 'navbar' exists

  const navbarBrand = await nav.$('.navbar-brand');
  expect(navbarBrand).toBeTruthy(); // check if anchor tag with class 'navbar-brand' exists

  const img = await navbarBrand.$('img');
  expect(img).toBeTruthy(); // check if img tag exists as a child of anchor tag with class 'navbar-brand'
});

test('Check page for Bootstrap primary button with text "Start Here"', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const button = await page.$(`a.btn.btn-primary:has-text("Start Here")`);
  expect(button).toBeTruthy(); // check if button with class 'btn-primary' and text 'Start Here' exists
});

test('Check for newsletter form with email input', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check that a form with an input field with the specified ID and placeholder exists
  const newsletterForm = await page.$('form');
  expect(newsletterForm).toBeTruthy();

  const emailInput = await newsletterForm.$('#newsletter1');
  expect(emailInput).toBeTruthy();

  const placeholder = await emailInput.getAttribute('placeholder');
  expect(placeholder).toBe('Email address');
});

test('Check HOME page has a placeholder DIV for a shared Navigation Bar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const divNavPlaceholder = await page.$('header[role="banner"] > div#main-navigation');
  expect(divNavPlaceholder).toBeTruthy(); // check if div with ID 'main-navigation' exists
});

test('Check HOME page has a placeholder DIV for a shared FOOTER', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const divFooterPlaceholder = await page.$('body > div > div#main-footer');
  expect(divFooterPlaceholder).toBeTruthy(); // check if div with ID 'main-footer' exists
});


