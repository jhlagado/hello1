import { expect, test } from '@playwright/test'

test('shows the hello starter page', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /hello/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /get started/i })).toBeVisible()
})
