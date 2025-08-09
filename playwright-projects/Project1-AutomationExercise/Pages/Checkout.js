import { expect } from "@playwright/test";

class CheckOut {
    constructor(page) {
        this.page = page;
        this.proceedtoCheckOutBtn = 'a.check_out';
        this.billingNameLabel = '#address_invoice > .address_firstname';
        this.cartPriceLable = '.cart_total_price';
        this.totalPriceLabel = 'p.cart_total_price';
    }

    async proceedToCheckout(billingName, expectedPrice) {
        await this.page.click(this.proceedtoCheckOutBtn);
        await expect(this.page.locator(this.billingNameLabel)).toHaveText(billingName);
        const totalPrice = await this.page.locator(this.totalPriceLabel);
        const finalPrice = await totalPrice.last().textContent();
        const actualTotalPrice = await Number(finalPrice.replace(/[^\d]/g, ''));
        console.log(actualTotalPrice);
        await expect(actualTotalPrice).toBe(expectedPrice);
    }
}
export default CheckOut;

