import { expect } from "@playwright/test";

class Login {
    constructor(page) {
        this.page = page;
        this.signUpLink = '.navbar-nav>li .fa-lock';
        this.emailAddressTextBox = '[data-qa="login-email"]';
        this.passwordTextBox = '[data-qa="login-password"]';
        this.loginButton = '[data-qa="login-button"]';
        this.loggedInLabel = '.navbar-nav>li>a>b'
        this.navLink = '.navbar-nav>li>a'
    }

    async loginApp(username, password) {
        await this.page.goto('/');

        const consentButton = this.page.getByRole('button', { name: 'Consent' });
        if (await consentButton.isVisible()) {
            await consentButton.click();
        }

        await this.page.click(this.signUpLink);
        await this.page.fill(this.emailAddressTextBox, username);
        await this.page.fill(this.passwordTextBox, password)
        await this.page.click(this.loginButton);
        expect(this.page.locator(this.loggedInLabel)).toContainText(password);

    }

}
export default Login;