import { Page } from "@playwright/test";
import Header from "./Header";

class BasePage {
  readonly page: Page;
  readonly Header: Header;

  constructor(page: Page) {
    this.page = page;
    this.Header = new Header(page);
  }
}

export default BasePage;