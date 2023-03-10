const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const report = fs.readFileSync('./test-results/report.json', 'utf8');
  const reportObj = JSON.parse(report);

  if (typeof reportObj.report !== 'string') {
    throw new Error('Report is not a string');
  }

  await page.setContent(JSON.stringify(reportObj.report));
  await page.pdf({ path: './test-results/light_house_report.pdf', format: 'A4' });

  await browser.close();
})();
