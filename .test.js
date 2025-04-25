const { expect } = require('chai')


// test/ui/login.ui.test.js
describe('Login Page Tests', () => {
    before(async () => {
      await browser.url('/login');
    });

    it('should login with valid credentials', async () => {
      await $('#username').setValue('testuser');
      await $('#password').setValue('password123');
      await $('#login-btn').click();

      await expect(browser).toHaveUrlContaining('/dashboard');
      await expect($('.welcome-message')).toBeDisplayed();
    });

    it('should show error for invalid credentials', async () => {
      await $('#username').setValue('wronguser');
      await $('#password').setValue('wrongpass');
      await $('#login-btn').click();

      await expect($('.error-message')).toHaveText('Invalid credentials');
    });
  });
