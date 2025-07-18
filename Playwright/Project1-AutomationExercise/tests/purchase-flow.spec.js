import { test, expect } from '@playwright/test';
import Login from '../Pages/Login.js';
import Products from '../Pages/Products.js';
import Cart from '../Pages/Cart.js';
import CheckOut from '../Pages/Checkout.js';
import Payment from '../Pages/Payment.js';
import testData from '../TestData/products.json' assert { type: 'json' }

test.describe('Purchase Flow Test Suite', () => {

    let login, products, cart, checkout, payment;

    test.beforeEach('SetUp', async ({ page }) => {
        login = new Login(page);
        products = new Products(page);
        cart = new Cart(page);
        checkout = new CheckOut(page);
        payment = new Payment(page);

        await login.loginApp(process.env.APPLICATION_EMAIL_ADDRESS, process.env.APPLICATION_PASSWORD);

    })

    test('TC-1 Add products to cart', async ({ page }) => {
        await products.addProductsToCart(testData.brandName);
    })

    test('TC-2 Place Order and Download Invoice', async ({ page }) => {
        const expectedPrice = await cart.viewCart();
        await checkout.proceedToCheckout(testData.billingName, expectedPrice);
        await payment.makePayment(testData.name, testData.cardNumber, testData.cvc, testData.expiryMonth, testData.expiryYear, expectedPrice)
    })








})