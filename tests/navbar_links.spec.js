const { test, expect } = require('@playwright/test')


test('test-valid-navbar-links', async ({browser}) => {

//    const pagesToCheck = ['http://localhost:3000',
//                          'http://localhost:3000/templates/template-content.html',
//    ]
    const context = await browser.newContext()
    const page = await context.newPage();

    const pagesToCheck = ['/',
                          '/templates/template-content.html',
    ]

    for (const pageToCheck of pagesToCheck) {
        console.log("Checking page " + pageToCheck)

        await page.goto(pageToCheck)


        const links = await page.$$(".navbar .nav-link")

        // Click on a button with id 'agreeButton'
        //do I need this?
        //await page.click('#agreeButton')

        for (const link of links) {
            const url = await link.getAttribute('href')
            console.log("Checking link " + url)
            if (url.startsWith('#')) {
                console.log(`Skipping link "${url}" because it is not a new page.`)
                continue
            }

            const newPage = await context.newPage();
            const response = await newPage.goto(url)
            const status = response.status()
            expect(response.ok()).toBe(true)

            await newPage.close()
        }
    }
})