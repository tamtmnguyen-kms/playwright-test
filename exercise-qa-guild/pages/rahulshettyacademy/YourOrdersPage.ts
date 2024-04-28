import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class YourOrdersPage extends BasePage {
  readonly page: Page;
  readonly txtOrderId: (orderId: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.txtOrderId = orderId => page.getByRole('rowheader', { name: `${orderId}` });
  }

}

export default YourOrdersPage;