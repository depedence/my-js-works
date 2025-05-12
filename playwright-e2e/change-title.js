// tests/change-title.spec.js

const { test, expect } = require('@playwright/test');

test('изменяет заголовок по клику на кнопку', async ({ page }) => {
  // Открываем локальный HTML-файл
  await page.goto('http://localhost:3000'); // или путь до файла в dev-сервере

  // Проверяем, что заголовок изначально "Привет"
  const title = page.locator('#title');
  await expect(title).toHaveText('Привет');

  // Кликаем на кнопку
  await page.click('#change');

  // Проверяем, что текст изменился
  await expect(title).toHaveText('Заголовок изменён!');
});
