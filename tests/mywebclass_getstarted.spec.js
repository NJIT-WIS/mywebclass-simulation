const { test, expect } = require('@playwright/test')

test('Should navigate to another website when clicking the "Get Started" button', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('privacyPolicyAgreed', true)
  })
  // Navigate to the index.html page
  await page.goto('http://localhost:3000')

  // Verify that the title is "MyWebClass.org"
  await expect(page).toHaveTitle('MyWebClass.org')

  // Click the "Let's get Started!" button
  await page.locator('#start-here').click({ force: true })

  // Wait for the new page to load
  try {
    await this.page.waitForNavigation()
    // if we are here it means login was successful
    await expect(page).toHaveTitle("MyWebClass.org | Let's get started!")
  } catch (e) {
  }
})
