import Login from "../Pages/Login";
import Pim from "../Pages/Pim";
import { faker } from '@faker-js/faker'
import { test, expect } from '@playwright/test';

test.describe('Employee -CRUD', () => {
  let login, pim;
  const firstName = faker.name.firstName();
  const middleName = faker.name.middleName();
  const lastName = faker.name.lastName();
  const employee = {
    firstName,
    middleName,
    lastName,
    fullName: function () {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }
  test.beforeEach('login setUp', async ({ page }) => {
    login = new Login(page);
    pim = new Pim(page);

    await login.loginApp(process.env.APPLICATION_USERID, process.env.APPLICATION_PASSWORD);
    await pim.goToPimPage();
  })

  test('TC-1 Add an employee', async ({ page }) => {
    await pim.addEmployee(employee.firstName, employee.middleName, employee.lastName);

  })
  test('TC-2 Search and Edit the employee details', async ({ page }) => {
    await pim.searchEmployee(employee.fullName(), employee.lastName);
    await pim.editEmployee();
  })
  test('TC-3 Search and delete the employee details', async ({ page }) => {
    await pim.searchEmployee(employee.fullName(), employee.lastName);
    await pim.deleteEmployee();
  })
})