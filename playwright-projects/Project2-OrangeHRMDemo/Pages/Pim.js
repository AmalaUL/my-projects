import { expect } from "@playwright/test";

class Pim {
    constructor(page) {
        this.page = page;
        this.addBtn = '.bi-plus';
        this.firstNameTxt = '[name="firstName"]';
        this.middleNameTxt = '[name="middleName"]';
        this.lastNameTxt = '[name="lastName"]';
        this.employeeIdTxt = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input';
        this.saveBtn = '.oxd-button--secondary';
        this.employeeName = '.oxd-autocomplete-text-input input';
        this.searchBtn = '[type="submit"]';
        this.recordFoundLabel = '.orangehrm-horizontal-padding>.oxd-text--span';
        this.nameLabel = '.oxd-table-card > .oxd-table-row >.oxd-padding-cell';
        this.editIcon = '.bi-pencil-fill';
        this.subItems = '.orangehrm-tabs-item';
        this.jobDropDown = '.oxd-select-text>.oxd-select-text--after>.bi-caret-down-fill';
        this.roleOptions = '.oxd-select-option';
        this.deleteBtn = '.bi-trash';
        this.confirmationDeleteBtn = '.oxd-button--label-danger';
        this.mainMenu = '.oxd-main-menu-item--name';
        this.title = '.oxd-text--h6';
    }

    async goToPimPage() {
        await this.page.locator(`${this.mainMenu}:has-text('PIM')`).click();
        await expect(this.page.locator(this.title)).toHaveText('PIM');
    }
    async addEmployee(firstName, middleName, lastName) {
        await this.page.click(this.addBtn);
        await this.page.fill(this.firstNameTxt, firstName);
        await this.page.fill(this.middleNameTxt, middleName);
        await this.page.fill(this.lastNameTxt, lastName);
        await this.page.locator(this.employeeIdTxt).clear();
        await this.page.click(this.saveBtn);
        await expect(this.page.getByText('Successfully Saved')).toBeVisible();
        await expect(this.page.locator(this.title).filter({ hasText: 'Personal Details' })).toBeVisible();
    }

    async searchEmployee(employeeFullName, employeeLastName) {
        await this.page.locator(this.employeeName).first().waitFor();
        await this.page.locator(this.employeeName).first().fill(employeeFullName);
        await this.page.keyboard.press('Enter');
        await this.page.click(this.searchBtn);
        await expect(this.page.locator(this.recordFoundLabel).filter({ hasText: '(1) Record Found' })).toBeVisible();
        await expect(this.page.locator(this.nameLabel).filter({ hasText: employeeLastName })).toBeVisible();
    }



    async editEmployee() {
        await this.page.click(this.editIcon);
        await this.page.locator(this.subItems).filter({ hasText: 'Job' }).click();
        await expect(this.page.locator(this.title).filter({ hasText: 'Job Details' })).toBeVisible();
        await this.page.locator(this.jobDropDown).first().click();
        const options = await this.page.$$(this.roleOptions);
        for (let option of options) {
            const value = await option.textContent();
            if (value?.trim() === 'Automation Tester') {
                await option.click();
                break;
            }
        }

        await this.page.click(this.saveBtn)
        await expect(this.page.getByText('Successfully Updated')).toBeVisible();
    }

    async deleteEmployee() {
        const [response] = await Promise.all([
            this.page.waitForResponse((res) =>
                res.request().method() === 'DELETE' &&
                res.url().includes('/pim/employees')
            ),
            await this.page.click(this.deleteBtn),
            await this.page.click(this.confirmationDeleteBtn)
        ])

        await expect(this.page.getByText('Successfully Deleted')).toBeVisible();
        await expect(response.status()).toBe(200);

    }
}
export default Pim;
