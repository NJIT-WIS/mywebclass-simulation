// In this test script,
// we set the Accept-Language header to different languages using a loop and
// verify that the header changes to the desired language for each iteration.
// You can modify this test script as per your requirements to test the internationalization of the website using Playwright.

// After running the command "npm run test" for the above test script, a new instance of the browser will open, and the test script will start executing automatically.
// You don't need to click anything in the browser during the test execution as Playwright will automate all the user interactions required for the test.
// Once the test execution is complete, the browser will automatically close, and you will see the test results in the command prompt or terminal window where you executed the "npm run test" command.
// You can also customize the test runner to output the results to a file or generate a report, depending on your requirements. The documentation for Playwright Test provides more information on how to customize the test runner output.

import { test, expect } from '@playwright/test'

const languages = ['fr', 'es', 'en'] // Add other languages as needed

test.describe('MyWebClass.org internationalization', () => {
  let page

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://www.mywebclass.org')
  })

  test.afterEach(async () => {
    await page.close()
  })

  for (const lang of languages) {
    test(`should display the site in ${lang} when the "Accept-Language" header is set to "${lang}"`, async () => {
      // Set the Accept-Language header and navigate to the website
      await page.setExtraHTTPHeaders({ 'Accept-Language': lang })
      await page.goto('https://www.mywebclass.org')

      // Check if the website is blocking the Accept-Language header or redirecting to a different language version
      const pageUrl = page.url()
      const expectedUrl = `https://www.mywebclass.org/${lang}/`
      expect(pageUrl).toContain(expectedUrl, `Page URL does not match expected URL for language ${lang}. Actual URL: ${pageUrl}`)

      // Wait for the language selector button to be present and click it
      const languageSelectorButton = await page.waitForSelector('.language-selector', { timeout: 5000 })
      expect(languageSelectorButton).not.toBeNull('Could not find language selector button.')
      await languageSelectorButton.click()

      // Wait for the language option to be present and click it
      const languageOption = await page.waitForSelector(`.language-selector a[hreflang="${lang}"]`, { timeout: 5000 })
      expect(languageOption).not.toBeNull(`Could not find language option for ${lang}.`)
      await languageOption.click()

      // Wait for the page to reload and check that the language selector button reflects the current language
      await page.waitForNavigation()
      const languageElement = await page.waitForSelector('.language-selector .active', { timeout: 5000 })
      expect(languageElement).not.toBeNull('Could not find active language element.')
      const languageText = await languageElement.textContent()
      expect(languageText.toLowerCase()).toContain(lang, `Language selector does not reflect language ${lang}.`)
    })
  }
})
