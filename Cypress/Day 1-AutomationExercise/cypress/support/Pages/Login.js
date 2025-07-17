class Login {
    signUpLink() {
        return cy.get('.navbar-nav>li .fa-lock');
    }
    emailAddressTextBox() {
        return cy.get('[data-qa="login-email"]');
    }
    passwordTextBox() {
        return cy.get('[data-qa="login-password"]');
    }
    loginButton() {
        return cy.get('[data-qa="login-button"]');
    }
    loggedInLabel() {
        return cy.get('.navbar-nav>li>a>b');
    }
    navLink() {
        return cy.get('.navbar-nav>li>a');
    }
}
export default Login;