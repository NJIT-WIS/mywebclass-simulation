const { test, expect } = require('@playwright/test')

const pagesToCheck = ['/',
                      '/templates/template-content.html',
]

test('test-valid-navbar-links', async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    for (const pageToCheck of pagesToCheck) {
        console.log("Checking page " + pageToCheck)

        await page.goto(pageToCheck)
        const links = await page.$$(".navbar .nav-link")

        for (const link of links) {
            const url = await link.getAttribute('href')
            console.log("Checking link " + url)
            if (url.startsWith('#')) {
                console.log(`Skipping link "${url}" because it is not a new page.`)
                continue
            }

            const newPage = await context.newPage()
            const response = await newPage.goto(url)
            const status = response.status()
            expect(response.ok()).toBe(true)

            await newPage.close()
        }
    }
})

test('navbar-contains-correct-links-and-wording', async ({page}) => {
    const expectedNavbarLinks = [ ["Home", "/"],
                                  ["Content Template", "/templates/template-content.html"]
    ]

    for (const pageToCheck of pagesToCheck) {
        console.log("Checking page " + pageToCheck)

        await page.goto(pageToCheck)
        const links = await page.$$(".navbar .nav-link")

        for (let i = 0; i < links.length; i++) {
            const link = links[i]
            const textContent = await link.textContent()
            const linkedUrl = await link.getAttribute("href")

            console.log("Checking for " + expectedNavbarLinks[i][0] + " linking to " + expectedNavbarLinks[i][1])
            expect (textContent).toBe(expectedNavbarLinks[i][0])
            expect (linkedUrl).toBe(expectedNavbarLinks[i][1])

        }

    }
})
