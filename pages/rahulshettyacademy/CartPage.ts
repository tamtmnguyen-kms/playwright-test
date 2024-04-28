import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class CartPage extends BasePage {
  readonly btnCheckout: Locator;

  constructor(page: Page) {
    super(page);
    this.btnCheckout = page.locator('button', { hasText: 'Checkout' });
  }

  async clickCheckout() {
    await this.btnCheckout.click();
  }
}

export default CartPage;