import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class DashboardPage extends BasePage {
  readonly page: Page;
  readonly btnAddToCartByProductName: (productName: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.btnAddToCartByProductName = productName =>
      page.locator('div.card-body').filter({ hasText: productName }).locator('button', { hasText: 'Add to Cart' });
  }

  async addProductToCart(productName: string) {
    await this.btnAddToCartByProductName(productName).click();
  }
}

export default DashboardPage;