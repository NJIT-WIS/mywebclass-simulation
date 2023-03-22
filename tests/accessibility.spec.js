const { test, expect } = require('@playwright/test')

test('Check Accessibility and Usability', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Ensure page has a title
  const pageTitle = await page.title()
  expect(pageTitle).toBeTruthy()

  // Ensure all images have alt attributes
  const images = await page.$$('img')
  for (const image of images) {
    expect(await image.getAttribute('alt')).toBeTruthy()
  }

  // Ensure all form fields have labels
  const formFields = await page.$$('input, select, textarea')
  for (const field of formFields) {
    const label = await page.$(`label[for="${await field.getAttribute('id')}"]`)
    expect(label).toBeTruthy()
  }



  // Ensure there are no empty headings
  const headings = await page.$$('h1, h2, h3, h4, h5, h6')
  for (const heading of headings) {
    const text = await heading.innerText()
    expect(text).toBeTruthy()
  }
})
