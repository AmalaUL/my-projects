import Products from '../support/Pages/Products';
import Cart from '../support/Pages/Cart';
import CheckOut from '../support/Pages/CheckOut';
import Payment from '../support/Pages/Payment';
import Login from '../support/Pages/Login';

const products = new Products();
const cart = new Cart();
const checkout = new CheckOut();
const payment = new Payment();
const login = new Login();

describe('Purchase Flow Test Suite', () => {
    let testData
    before('dataSetUp', () => {
        cy.fixture('products').then((data) => {
            testData = data;
        })
    })
    beforeEach('setUp', () => {
        cy.login();
    })

    it('TC-1-select multiple orders', () => {
        cy.addProductsToCart(testData.brandName);
    })

    it('TC-2-View Cart and Proceed to checkout', () => {
        login.navLink().contains('Cart').click();
        let totalPrice = [];
        cart.cartDescription().should('be.visible');
        cart.cartPriceLable().each(($price) => {
            const value = $price.text();//Rs. 3493
            const numericValue = value.replace(/[^\d]/g, '');
            totalPrice.push(Number(numericValue));//3493

        }).then(() => {
            const finalPrice = totalPrice.reduce((acc, num) => num + acc, 0);
            cy.log(finalPrice);
            cart.proceedtoCheckOutBtn().click();
            checkout.billingNameLabel().should('be.visible').and('contains.text', testData.billingName);
            checkout.totalPriceLabel().last().then($price => {
                const totalValue = $price.text();
                const totalPrice = Number(totalValue.replace(/[^\d]/g, ''));
                expect(totalPrice).to.eq(finalPrice);

            })
        })
    })

    it('TC-3-Make Payment and download invoice', () => {
        login.navLink().contains('Cart').click();
        cart.proceedtoCheckOutBtn().click();
        checkout.placeOrderBtn().click();
        payment.heading().contains('Payment');
        payment.nameTextBox().should('be.visible').type(testData.name);
        payment.cardTextBox().should('be.visible').type(testData.cardNumber);
        payment.cvcTextBox().should('be.visible').type(testData.cvc);
        payment.expiryMonthTextBox().should('be.visible').type(testData.expiryMonth);
        payment.expiryYearTextBox().should('be.visible').type(testData.expiryYear);
        payment.payAndConfirmOrderBtn().click();
        payment.confirmationMessage().should('be.visible').contains('Congratulations! Your order has been confirmed!');
        payment.downloadInvoiceBtn().click();
        cy.task('fileExists', 'cypress/downloads/invoice.txt').should('be.true');
    })
    afterEach('logout the application', () => {
        login.navLink().contains('Logout').click();
        login.loginButton().should('be.visible');
    })
})

