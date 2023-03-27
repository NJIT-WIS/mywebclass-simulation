//This is the code for accessibility

const { test, expect } = require('@playwright/test')

test('MyWebClass.org has alt text on images and label element for newsletter input', async ({ page }) => {
  // Check for alt text on images
  await page.goto('http://localhost:3000/')
  const images = await page.$$('img')
  for (const image of images) {
    const alt = await image.getAttribute('alt')
    expect(alt).toBeTruthy()
  }

  // Check for label element for newsletter input
  const label = await page.$('label[for="newsletter1"]')
  expect(label).toBeTruthy()
})

