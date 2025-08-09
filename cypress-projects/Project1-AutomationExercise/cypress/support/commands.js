// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from './Pages/Login';
import Products from './Pages/Products';

const login = new Login();
const products = new Products();

Cypress.Commands.add('login', () => {
    cy.visit('/');
    login.signUpLink().click();
    login.emailAddressTextBox().type(Cypress.env('emailAddress'));
    login.passwordTextBox().type(Cypress.env('password'));
    login.loginButton().click();
    login.loggedInLabel().should('be.visible').and('have.text', 'Demo1234');

})

Cypress.Commands.add('addProductsToCart', (brandName) => {
    login.navLink().contains('Products').click();
    products.brandNameLink().contains(brandName).click();
    products.addToCartBtn().each((btn) => {
        cy.wrap(btn).click().then(() => {
            products.continueShoppingBtn().should('be.visible').click();
        })
    });

})

//tooltip visible in UI but not in DOM so used below approach
Cypress.Commands.add('checkToolTipMessage', (locator, expectedMessage) => {
    locator.then(($el) => {
        const validity = $el[0].validity;
        const actualMessage = $el[0].validationMessage;

        expect(validity.valid).to.be.false;
        expect(actualMessage).to.include(expectedMessage);
    });
})

Cypress.on('uncaught:exception', (err) => {
    console.error('Caught error:', err.message);
    return false; // lets Cypress continue
});
