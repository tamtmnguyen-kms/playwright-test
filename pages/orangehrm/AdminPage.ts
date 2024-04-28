import { Locator, Page } from '@playwright/test';
import LeftNavBar from './LeftNavBar';
import Header from './Header';

class AdminPage {
  readonly page: Page;
  readonly LeftNavBar: LeftNavBar;
  readonly Header: Header;
  readonly btnAdd: Locator;

  readonly btnUserRole: Locator;
  readonly btnStatus: Locator;
  readonly txtEmployeeName: Locator;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly txtConfirmPassword: Locator;
  readonly optionEmployeeName: Locator;
  readonly btnSave: Locator;

  constructor(page: Page) {
    this.page = page;
    this.LeftNavBar = new LeftNavBar(page);
    this.Header = new Header(page);
    this.btnAdd = page.locator('.orangehrm-header-container button');
    this.btnUserRole = page.locator('.oxd-grid-item').filter({ hasText: 'User Role' }).locator('.oxd-select-text');
    this.btnStatus = page.locator('.oxd-grid-item').filter({ hasText: 'Status' }).locator('.oxd-select-text');
    this.txtUsername = page.locator('.oxd-grid-item').filter({ hasText: 'Username' }).locator('input');
    this.txtPassword = page.locator('.oxd-grid-item').filter({ hasText: 'Password' }).first().locator('input');
    this.txtConfirmPassword = page.locator('.oxd-grid-item').filter({ hasText: 'Confirm Password' }).locator('input');
    this.btnSave = page.getByRole('button', { name: 'Save' });
  }

  async selectUserRole(userRole: 'Admin' | 'ESS') {
    await this.btnUserRole.click();
    await this.page.getByRole('option', { name: userRole }).click();
  }  
  
  async selectStatus(status: 'Enabled' | 'Disabled') {
    await this.btnStatus.click();
    await this.page.getByRole('option', { name: status }).click();
  }

  async clickAdd() {
    await this.btnAdd.click();
    await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
  }

  async fillEmployeeName(employeeName: string) {
  await this.page.locator(".oxd-main-menu .oxd-main-menu-item-wrapper:nth-child(1)").click();
  await this.page.getByPlaceholder("Type for hints...").fill(employeeName);
  await this.page.locator("[role=listbox] [role='option']").filter({ hasText: employeeName }).click();
  }

  async fillUsername(username: string) {
    await this.txtUsername.fill(username);
  }  
  
  async fillPassword(password: string) {
    await this.txtPassword.fill(password);
  }  
  
  async fillConfirmPassword(password: string) {
    await this.txtConfirmPassword.fill(password);
  }

  async clickSave() {
    await this.btnSave.click();
    await this.page.waitForLoadState('load');
  }

  async createUser(userRole: 'Admin' | 'ESS', status: 'Enabled' | 'Disabled', employeeName: string, username: string, password: string) {
    await this.selectUserRole(userRole);
    await this.fillEmployeeName(employeeName);
    await this.selectStatus(status);
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.fillConfirmPassword(password);
    await this.clickSave();
  }

  async waitForUserCreationResponse() {
    await this.page.waitForResponse(resp => resp.url().includes('/api/v2/admin/users') && resp.request().method() === 'POST' && resp.status() === 200);
  }

  async logout() {
    await this.Header.logout();
  }
}

export default AdminPage;