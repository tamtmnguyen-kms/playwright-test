import { Locator, Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly txtEmail: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtEmail = page.getByPlaceholder('email@example.com');
    this.txtPassword = page.getByPlaceholder('enter your passsword');
    this.btnLogin = page.getByRole('button', { name: 'Login' });
  }

  // async goTo() {
  //   await this.page.goto('https://rahulshettyacademy.com/client/auth/login');
  //   await this.page.waitForLoadState('load');

  // }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client/', { waitUntil: 'load' });
  }

  async login(email: string, password: string) {
    await this.txtEmail.fill(email);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }
}

export default LoginPage;