import Login from "../support/Pages/Login";
import Cart from "../support/Pages/Cart";

const login = new Login();
const cart = new Cart();

describe('Login Session Persistance Check', () => {
    let testData;
    before('Load Fixture', () => {
        cy.fixture('products').then((data) => {
            testData = data;
        })
    })
    beforeEach('setUp', () => {
        cy.login();
    })

    it('TC-1 Check app is alive after refresh', () => {
        cy.addProductsToCart(testData.brandName);
        login.navLink().contains('Cart').click();
        cart.cartDescription().should('be.visible');


        cy.getCookie('sessionid').should('exist').and('have.property', 'value')
            .then((cookie) => {
                cy.log('Before Cookie:', cookie); // This logs the string session id
                const beforeSessionId = cookie;
                // no cookie.value here
                cy.reload();
                cy.getCookie('sessionid').should('exist').and('have.property', 'value')
                    .then((cookie) => {
                        cy.log('After Cookie:', cookie);
                        const afterSessionId = cookie;

                        expect(afterSessionId).to.eq(beforeSessionId);
                        cart.cartDescription().should('be.visible');
                    })
            });
    })
    afterEach('logout the application', () => {
        login.navLink().contains('Logout').click();
        login.loginButton().should('be.visible');
    })
})


