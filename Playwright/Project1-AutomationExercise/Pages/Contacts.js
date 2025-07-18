import { expect } from '@playwright/test';

class Contacts {
    constructor(page) {
        this.page = page;
        this.contactsUsLink = '.fa-envelope';
        this.nameTextBox = '[data-qa="name"]';
        this.emailTextBox = '[data-qa="email"]';
        this.subjectTextBox = '[data-qa="subject"]';
        this.messageTextBox = '[data-qa="message"]';
        this.chooseFileBtn = '[name="upload_file"]';
        this.submitBtn = '[data-qa="submit-button"]';

    }

    async fillContactForm(name, email, subject, message, errorMessage) {
        await this.page.click(this.contactsUsLink);

        await expect(this.page.locator(this.nameTextBox)).toBeVisible();
        await this.page.fill(this.nameTextBox, name);
        if (email !== undefined) {
            await this.page.fill(this.emailTextBox, email);
        }

        const result = await this.page.locator(this.emailTextBox).evaluate((el) => ({
            valid: el.validity.valid,
            message: el.validationMessage
        }));
        console.log('Validity:' + result.valid);
        console.log('validationMessage:' + result.message);
        await this.page.fill(this.subjectTextBox, subject);
        await this.page.fill(this.messageTextBox, message);
        await this.page.locator(this.chooseFileBtn).setInputFiles('TestData/TestFiles/invoice.txt');

        await expect(result.valid).toBe(false);
        await expect(result.message).toContain(errorMessage);

        await this.page.click(this.submitBtn);

    }

}
export default Contacts;
