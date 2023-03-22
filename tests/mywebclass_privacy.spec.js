/* global localStorage */
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()

  // Retrieve the privacyPolicyAgreed item from local storage
  const privacyPolicyAgreed = await page.evaluate(() => {
    return localStorage.getItem('privacyPolicyAgreed')
  })

  // Check if privacyPolicyAgreed is set in local storage
  expect(privacyPolicyAgreed).toBeTruthy()

  // Click the "Content Template" link
  await page.getByRole('link', { name: 'Content Template' }).click()

  // Click the "Section 3" link
  await page.getByRole('link', { name: 'Section 3' }).click()
})
