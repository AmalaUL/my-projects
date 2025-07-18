class Products {
    
    brandNameLink() {
        return cy.get('.brands-name>ul>li>a');
    }
    addToCartBtn() {
        return cy.get('.productinfo .add-to-cart');
    }
    continueShoppingBtn() {
        return cy.get('.modal-footer > .btn');
    }
}
export default Products;