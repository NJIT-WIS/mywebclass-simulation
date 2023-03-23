const { test, expect } = require('@playwright/test')

// OUR STORY (ABOUT US)
test('Should have a OUR STORY page', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html')
  const pageTitle = await page.title()
  expect(pageTitle).toBe('MyWebClass.org | Our Story')
})

test('Check OUR STORY main section for title with required author information', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html');
  const mainSection = await page.$('main > section#title');
  expect(mainSection).toBeTruthy(); // check if main section with ID 'title' exists

  const authorDiv = await mainSection.$('div.text-muted:has-text("By: Dina Lahham | Arly Volmar | Nathan Hernandez | ChatGPT")');
  expect(authorDiv).toBeTruthy(); // check if <div> with class 'text-muted' and correct text exists
});
