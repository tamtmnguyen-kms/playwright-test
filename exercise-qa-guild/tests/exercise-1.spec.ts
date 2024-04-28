import { expect } from '@playwright/test';
import { test } from '../pages/rahulshettyacademy/BaseTest';

test('Buy the iPhone 13 PRO', async ({ loginPage, dashboardPage, cartPage, checkoutPage, yourOrderPage, thankYouPage }) => {
  let orderId: string;

  await test.step('Login to rahulshettyacademy.com', async () => {
    await loginPage.goTo();
    await loginPage.login('rahulshetty@gmail.com', 'Iamking@000');
  });

  await test.step('Add the iPhone 13 PRO to cart', async () => {
    await dashboardPage.addProductToCart('IPHONE 13 PRO');
  });

  await test.step('Checkout', async () => {
    await dashboardPage.Header.clickCart();
    await cartPage.clickCheckout();
    await checkoutPage.selectCountry('Vietnam');
    await checkoutPage.clickPlaceOrder();
    orderId = (await thankYouPage.getOrderId())!;
  });

  await test.step('Verify the order in the Orders page', async () => {
    await thankYouPage.Header.clickMyOrder();
    await expect(yourOrderPage.txtOrderId(orderId), `Verify Order ID ${orderId} is displayed`).toBeVisible();
  });
});