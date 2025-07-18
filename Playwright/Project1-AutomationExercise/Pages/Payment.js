import { expect } from "@playwright/test";
import fs from 'fs/promises';//to read content

class Payment {
    constructor(page) {
        this.page = page;
        this.placeOrderBtn = 'a.check_out';
        this.heading = 'h2.heading';
        this.nameTextBox = '[data-qa="name-on-card"]';
        this.cardTextBox = '[data-qa="card-number"]';
        this.cvcTextBox = '[data-qa="cvc"]';
        this.expiryMonthTextBox = '[data-qa="expiry-month"]';
        this.expiryYearTextBox = '[data-qa="expiry-year"]';
        this.payAndConfirmOrderBtn = '[data-qa="pay-button"]';
        this.confirmationMessage = '.col-sm-9 p';
        this.downloadInvoiceBtn = '.check_out';
    }

    async makePayment(name, cardNum, cvcNum, expiryMonth, expiryYear, price) {
        await this.page.click(this.placeOrderBtn);
        await expect(this.page.locator(this.heading)).toHaveText('Payment');
        await this.page.fill(this.nameTextBox, name);
        await this.page.fill(this.cardTextBox, cardNum);
        await this.page.fill(this.cvcTextBox, cvcNum);
        await this.page.fill(this.expiryMonthTextBox, expiryMonth);
        await this.page.fill(this.expiryYearTextBox, expiryYear);
        await this.page.click(this.payAndConfirmOrderBtn);
        await expect(this.page.locator(this.confirmationMessage)).toContainText('Congratulations! Your order has been confirmed!')
        //download file
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.click(this.downloadInvoiceBtn)
        ])

        const filePath = 'downloads/' + Date.now() + 'my-invoice.txt';
        await download.saveAs(filePath)

        //read the content
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
        //assertion
        await expect(content).toContain(`Hi Demo 1234, Your total purchase amount is ${price}. Thank you`);

    }

}
export default Payment;
