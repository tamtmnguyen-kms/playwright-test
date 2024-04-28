import { Locator, Page } from "@playwright/test";

class Header {
  readonly page: Page;
  readonly ddlMenu: Locator;
  readonly btnLogout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ddlMenu = page.locator('li.oxd-userdropdown');
    this.btnLogout = page.getByRole('menuitem').filter({ hasText: 'Logout' });
  }

  async logout() {
    await this.ddlMenu.click();
    await this.btnLogout.click();
  }  
  
}

export default Header;