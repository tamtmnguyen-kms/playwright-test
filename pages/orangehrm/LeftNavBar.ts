import { Locator, Page } from "@playwright/test";

class LeftNavBar {
  readonly page: Page;
  readonly menuAdmin: Locator;
  readonly btnMyOrders: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuAdmin = page.locator('.oxd-navbar-nav').locator('li', { hasText: 'Admin' });
  }

  async clickAdmin() {
    await this.menuAdmin.click();
  }  
  
}

export default LeftNavBar;