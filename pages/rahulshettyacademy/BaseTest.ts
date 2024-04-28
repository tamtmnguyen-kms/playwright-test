import { test as baseTest } from '@playwright/test';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ThankYouPage from './ThankYouPage';
import YourOrdersPage from './YourOrdersPage';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  thankYouPage: ThankYouPage;
  yourOrderPage: YourOrdersPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },  
  
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }, 
  
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },  
  
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },  
  
  yourOrderPage: async ({ page }, use) => {
    await use(new YourOrdersPage(page));
  }, 
  
  thankYouPage: async ({ page }, use) => {
    await use(new ThankYouPage(page));
  },

});
