import { test as baseTest } from '@playwright/test';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import AdminPage from './AdminPage';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  adminPage: AdminPage;

};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },    
  
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },    
  
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },  


});
