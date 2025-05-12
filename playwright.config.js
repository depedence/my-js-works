// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'playwright-e2e/change-title.js', // Указываем отдельную папку
  timeout: 10000,
  use: {
    headless: true,
  },
});
