import { expect } from "@playwright/test";

class Cart {
    constructor(page) {
        this.page = page;
        this.cartLink = '.fa-shopping-cart';
        this.cartDescription = '.cart_description';
        this.cartPriceLable = '.cart_total_price';
    }

    async viewCart() {
        await this.page.click(this.cartLink);
        const cartDescription = this.page.locator(this.cartDescription);
        await expect(cartDescription.first()).toBeVisible();
        const totalPriceList = await this.page.$$(this.cartPriceLable);
        let expectedTotalPrice = [];
        for (let totalprice of totalPriceList) {
            const price = await totalprice.textContent();
            const numericValue = price.replace(/[^\d]/g, '');
            expectedTotalPrice.push(Number(numericValue));
        }
        console.log(expectedTotalPrice);
        const finalExpectedTotalPrice = await expectedTotalPrice.reduce((acc, num) => acc + num, 0);
        console.log(finalExpectedTotalPrice);
        return finalExpectedTotalPrice;
    }

}
export default Cart;
