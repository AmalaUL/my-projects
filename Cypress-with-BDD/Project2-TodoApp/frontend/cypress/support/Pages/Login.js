class Login {
    usernameTxtBox() {
        return cy.get('[placeholder="Username"]');
    }
    passwordTxtBox() {
        return cy.get('[placeholder="Password"]');
    }
    loginBtn() {
        return cy.get('#root div button');
    }
    headingLbl() {
        return cy.get('div h2');
    }

}
export default Login;