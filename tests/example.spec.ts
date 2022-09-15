import { test, expect } from '@playwright/test';

test('Получение пробной версии', async ({ page }) => {
  await page.goto('https://elma365.com/ru/');
  const getTrial = page.locator('#sticky-wrapper > header > div > nav > ul:nth-child(2) > li:nth-child(1) > a');
  await getTrial.click();
  const modal = page.locator('#trialRegister > div');
  await expect(modal).toBeVisible();
  await modal.locator('#name').click();
  await modal.locator('#name').fill('testtest');
  await modal.locator('#email').click();
  await modal.locator('#email').fill('elma@elma.test');
  await modal.locator('#customer_phone').click();
  await modal.locator('#customer_phone').fill('89991112233');
  await modal.locator('#companyName').click();
  await modal.locator('#companyName').fill('first test');
  await modal.locator('#jobPosition').click();
  await modal.locator('#jobPosition').fill('test job pos');
  await modal.locator('#companySize').click();
  await modal.locator('#companySize > option:nth-child(2)').click();
  await modal.locator('div[class*="privacy-policy"][class*="form-checkbox"] input').click();
});
