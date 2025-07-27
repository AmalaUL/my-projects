class Login {
    userNameTxt() {
        return cy.get('[name="username"]');
    }
    passwordTxt() {
        return cy.get('[name="password"]');
    }
    loginBtn() {
        return cy.get('[type="submit"]');
    }

}
export default Login;