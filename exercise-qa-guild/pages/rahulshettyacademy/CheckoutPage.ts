import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
  readonly txtSelectCountry: Locator;
  readonly btnCountryItem: (country: string) => Locator
  readonly btnPlaceOrder: Locator;

  constructor(page: Page) {
    super(page);
    this.txtSelectCountry = page.getByPlaceholder('Select Country');
    this.btnCountryItem = country => page.getByRole('button').filter({ hasText: country });
    this.btnPlaceOrder = page.getByText('Place Order');
  }

  async selectCountry(country: string) {
    await this.txtSelectCountry.click();
    await this.txtSelectCountry.fill(country);
    await this.txtSelectCountry.dispatchEvent("keyup");

    await this.btnCountryItem(country).click();
  }

  async clickPlaceOrder() {
    await this.btnPlaceOrder.click();
  }
}

export default CheckoutPage;