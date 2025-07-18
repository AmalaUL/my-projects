class CheckOut {
    billingNameLabel() {
        return cy.get('#address_invoice > .address_firstname');
    }
    cartPriceLable() {
        return cy.get('.cart_total_price');
    }
    totalPriceLabel() {
        return cy.get('p.cart_total_price');
    }
    placeOrderBtn() {
        return cy.get('a.check_out');
    }
}
export default CheckOut;