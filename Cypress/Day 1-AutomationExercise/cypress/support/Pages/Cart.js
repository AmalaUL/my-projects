class Cart {
    cartLink() {
        return cy.get('.navbar-nav>li>a');
    }
    cartDescription() {
        return cy.get('.cart_description');
    }
    proceedtoCheckOutBtn() {
        return cy.get('a.check_out');
    }
    cartPriceLable() {
        return cy.get('.cart_total_price');
    }
}
export default Cart;