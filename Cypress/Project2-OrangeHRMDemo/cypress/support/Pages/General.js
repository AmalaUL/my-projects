class General {
    title() {
        return cy.get('.oxd-text--h6 ');
    }
    mainMenu() {
        return cy.get('.oxd-main-menu-item--name');
    }
}
export default General;