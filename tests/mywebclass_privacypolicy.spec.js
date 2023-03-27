import { test, expect } from '@playwright/test';

test('Should have header of Privacy Policy', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  const headerText = await page.$eval('header', el => el.innerText);
  await expect(headerText).toContain('Privacy Policy');
});