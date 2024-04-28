import { Locator, Page } from "@playwright/test";
import LeftNavBar from "./LeftNavBar";

class DashboardPage {
  readonly page: Page;
  readonly LeftNavBar: LeftNavBar;
  readonly btnAddToCartByProductName: (productName: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.LeftNavBar = new LeftNavBar(page);
    this.btnAddToCartByProductName = productName =>
      page.locator('div.card-body').filter({ hasText: productName }).locator('button', { hasText: 'Add to Cart' });
  }


}

export default DashboardPage;