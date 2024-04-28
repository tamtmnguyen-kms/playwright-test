import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class ThankYouPage extends BasePage {
  readonly lblOrderId: Locator;

  constructor(page: Page) {
    super(page);
    this.lblOrderId = page.locator('label.ng-star-inserted');
  }

  async getOrderId() {
    const context = await this.lblOrderId.textContent();
    if (!context) {
      throw new Error('Order ID not found');
    }
    return this.extractId(context);
  }

  extractId(str: string) {
    const regex = /\|\s*([a-f0-9]+)\s*\|/;
    const match = RegExp(regex).exec(str);
    if (match) {
      return match[1];
    }
    return null;
  }
}

export default ThankYouPage;