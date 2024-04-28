import { Locator, Page } from "@playwright/test";

class Header {
  readonly page: Page;
  readonly btnCart: Locator;
  readonly btnMyOrders: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnCart = page.locator(`button[routerlink='/dashboard/cart']`);
    this.btnMyOrders = page.locator(`button[routerlink='/dashboard/myorders']`);
  }

  async clickCart() {
    await this.btnCart.click();
  }  
  
  async clickMyOrder() {
    await this.btnMyOrders.click();
  }
}

export default Header;