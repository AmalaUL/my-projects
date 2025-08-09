import { expect } from "@playwright/test";

class Products {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = '.productinfo .add-to-cart';
        this.continueShoppingBtn = '.modal-footer > .btn'
        this.productsLink = '.card_travel';
        this.title = 'h2.title';
    }
    //dynamic locator
    brandNameLink(value) {
        return this.page.locator(`.brands-name>ul>li>a:has-text('${value}')`).click();
    }

    async addProductsToCart(brandName) {
        await this.page.click(this.productsLink);
        await this.brandNameLink(brandName);
        const addToCartButton = await this.page.$$(this.addToCartBtn)
        for (let button of addToCartButton) {
            await button.click();
            await expect(this.page.locator(this.continueShoppingBtn)).toBeVisible();
            await this.page.click(this.continueShoppingBtn);

        };
    }

}
export default Products;