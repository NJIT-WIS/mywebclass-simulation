import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mywebclass.org/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await expect(page).toHaveText('Privacy Policy');
});