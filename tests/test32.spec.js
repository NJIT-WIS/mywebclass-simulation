const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Navigate to the website's FAQ page.
  await page.goto('https://example.com/faq');

  // 2. Check that the page title matches the expected title.
  const expectedTitle = 'FAQ - Example Website';
  const pageTitle = await page.title();
  if (pageTitle !== expectedTitle) {
    throw new Error(`Unexpected page title: ${pageTitle}`);
  }

  // 3. Verify that there are a reasonable number of questions and answers on the page.
  const questions = await page.$$('div.question');
  const answers = await page.$$('div.answer');
  if (questions.length < 5 || answers.length < 5) {
    throw new Error('Insufficient number of questions or answers on the FAQ page');
  }

  // 4. Check that each question can be clicked to reveal the answer.
  for (const question of questions) {
    await question.click();
    const answer = await question.$('div.answer');
    if (!answer || !await answer.isVisible()) {
      throw new Error('Failed to reveal answer to question');
    }
  }

  // 5. Verify that the answers are clear and informative.
  for (const answer of answers) {
    const text = await answer.innerText();
    if (text.length < 10) {
      throw new Error('Answer text is too short');
    }
  }

  await browser.close();
})();
