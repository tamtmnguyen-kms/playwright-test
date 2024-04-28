import { expect } from '@playwright/test';
import { test } from '../pages/orangehrm/BaseTest';

test.describe('As a user, I am able to log in with my credentials', async () => {
  let randomUsername = `iam${Date.now().toString(36)}`;
  let password = 'userpw@123';

  test.beforeEach(async ({ loginPage, dashboardPage, adminPage }) => {
    await loginPage.goTo();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.LeftNavBar.clickAdmin();
    await adminPage.clickAdd();
    await adminPage.createUser('Admin', 'Enabled', 'Orange test', randomUsername, password);
  });

  test(`Verify that the user can log in successfully when provided the username and password correctly`, async ({ loginPage, dashboardPage }) => {
    await loginPage.goTo();
    await loginPage.login(randomUsername, password);
    await expect(dashboardPage.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test(`Verify that the user can not log in successfully when providing username is empty`, async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.login('', password);
    await expect(loginPage.lblRequired, `“Required” message is displayed below the username textbox`).toBeVisible();
  });

});