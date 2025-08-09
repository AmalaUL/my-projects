import { expect } from "@playwright/test";

class Login {
    constructor(page) {
        this.page = page;
        this.userNameTxt = '[name="username"]';
        this.passwordTxt = '[name="password"]';
        this.loginBtn = '[type="submit"]';
        this.title = '.oxd-text--h6'

    }

    async loginApp(username, password) {
        await this.page.goto('/');
        await this.page.fill(this.userNameTxt, username);
        await this.page.fill(this.passwordTxt, password);
        await this.page.click(this.loginBtn);
        await expect(this.page.locator(this.title)).toHaveText('Dashboard');
    }

}
export default Login;
