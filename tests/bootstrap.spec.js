const { test, expect } = require('@playwright/test')

test.describe('MyWebClass.org Bootstrap implementation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://mywebclass.org')
  })

  //  test('should have a responsive navigation bar', async ({ page }) => {
  //    const navbar = await page.waitForSelector('.navbar', { state: 'visible', timeout: 10000 })
  //    expect(navbar).toBeTruthy()
  //
  //    await page.setViewportSize({ width: 320, height: 480 }) // Simulate a mobile device
  //
  //    const navbarToggler = await page.waitForSelector('.navbar-toggler', { state: 'visible', timeout: 10000 })
  //    expect(navbarToggler).toBeTruthy()
  //
  //    const isNavbarCollapsed = await navbarToggler.evaluate(toggler => toggler.getAttribute('aria-expanded') === 'false')
  //    expect(isNavbarCollapsed).toBeTruthy()
  //
  //    await navbarToggler.click()
  //    const isNavbarExpanded = await navbarToggler.evaluate(toggler => toggler.getAttribute('aria-expanded') === 'true')
  //    expect(isNavbarExpanded).toBeTruthy()
  //  })

  test('should have a footer with py-5 class for padding', async ({ page }) => {
    const footer = await page.waitForSelector('footer', { state: 'visible', timeout: 10000 })
    expect(footer).toBeTruthy()

    const footerPadding = await footer.evaluate(footerElement => footerElement.classList.contains('py-5'))
    expect(footerPadding).toBeTruthy()
  })
})
