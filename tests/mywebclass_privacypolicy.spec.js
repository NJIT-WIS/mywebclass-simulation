import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mywebclass.org/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  const headerText = await page.$eval('header', el => el.innerText);
  await expect(headerText).toContain('Privacy Policy');
});