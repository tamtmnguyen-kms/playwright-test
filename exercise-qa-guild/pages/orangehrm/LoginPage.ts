import { Locator, Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly txtEmail: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly lblRequired: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtEmail = page.getByRole('textbox', { name: 'Username' });
    this.txtPassword = page.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.getByRole('button', { name: 'Login' });
    // this.lblRequired = page.locator('oxd-form-row').filter({ hasText: 'Username'}).locator('span').filter({ hasText: 'Required' });
    this.lblRequired = page.locator(`//div[@class='oxd-form-row' and .//label[text()='Username']]//span[text()='Required']`);
  }

  async goTo() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/', { timeout: 600000});
  }

  async login(email: string, password: string) {
    await this.txtEmail.fill(email);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }
}

export default LoginPage;