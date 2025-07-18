import { test, expect, chromium } from '@playwright/test';
import Login from '../Pages/Login';
import Products from '../Pages/Products';

test.describe('Login Session Persistance Check', () => {

    let login, products;
    test.beforeEach('Login SetUp', async ({ page }) => {

        login = new Login(page);
        products = new Products(page);
        await login.loginApp(process.env.APPLICATION_EMAIL_ADDRESS, process.env.APPLICATION_PASSWORD);
    })

    test('TC-1 Check session is alive after reload', async ({ context, page }) => {
        await page.locator(products.productsLink).click();
        await expect(page.locator(products.title)).toContainText('All Products');
        const cookies = await context.cookies();

        const beforeSessionIdCookie = await cookies.find((c) => c.name === 'sessionid')
        const beforeSessionId = await beforeSessionIdCookie.value;
        console.log(beforeSessionId);

        await page.reload();

        const afterSessionIdCookie = await cookies.find((c) => c.name === 'sessionid')
        const afterSessionId = await afterSessionIdCookie.value;
        console.log(afterSessionId);

        expect(afterSessionId).toBe(beforeSessionId);
        await expect(page.locator(products.title)).toContainText('All Products');

    })
})
