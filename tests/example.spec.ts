import { test, expect } from '@playwright/test';

const timeoutWait: number = 10000;

test.describe('Лендинг', () => {
  test('Получение пробной версии', async ({ page }) => {
    await page.goto('https://elma365.com/ru/');
    const getTrial = page.locator('#sticky-wrapper > header > div > nav > ul:nth-child(2) > li:nth-child(1) > a');
    await getTrial.click();
    const modal = page.locator('#trialRegister > div');
    await expect(modal).toBeVisible();
    await modal.locator('#name').click({ timeout: timeoutWait });
    await modal.locator('#name').fill('testtest', { timeout: timeoutWait });
    await modal.locator('#email').click({ timeout: timeoutWait });
    await modal.locator('#email').fill('elma@elma.test', { timeout: timeoutWait });
    await modal.locator('#customer_phone').click({ timeout: timeoutWait });
    await modal.locator('#customer_phone').fill('89991112233', { timeout: timeoutWait });
    await modal.locator('#companyName').click({ timeout: timeoutWait });
    await modal.locator('#companyName').fill('first test', { timeout: timeoutWait });
    await modal.locator('#jobPosition').click({ timeout: timeoutWait });
    await modal.locator('#jobPosition').fill('test job pos', { timeout: timeoutWait });
    await modal.locator('#companySize').click({ timeout: timeoutWait });
    await modal.locator('#companySize > option:nth-child(2)').click({ timeout: timeoutWait });
    await modal.locator('div[class*="privacy-policy"][class*="form-checkbox"] input').click({ timeout: timeoutWait });
  })
});
