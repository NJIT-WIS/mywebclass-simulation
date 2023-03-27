const { chromium } = require('playwright');

test('Verify SSL certificate', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  const response = await page.waitForResponse((response) => {
    return response.url().startsWith('https://example.com') && response.securityDetails();
  });

  const securityDetails = response.securityDetails();
  const { validFrom, validTo, protocol } = securityDetails;

  expect(protocol).toBe('TLS 1.2');
  expect(validFrom).toBeGreaterThan(0);
  expect(validTo).toBeGreaterThan(new Date().getTime() / 1000);

  await browser.close();
});
