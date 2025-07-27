// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from '../support/Pages/Login.js';
import General from './Pages/General.js';
import Pim from './Pages/Pim.js';


const login = new Login();
const general = new General();
const pim = new Pim();

Cypress.Commands.add('login', (userName, password) => {
    cy.intercept('GET', '**/dashboard/index').as('index');

    cy.visit('/');
    login.userNameTxt().clear().type(userName);
    login.passwordTxt().clear().type(password);
    login.loginBtn().click();
    cy.wait('@index').its('response.statusCode').should('eq', 200);
    general.title().should('be.visible').and('have.text', 'Dashboard');

})

Cypress.Commands.add('searchEmployee', (employeeFullName, employeeLastName) => {
    //search employee
    pim.employeeName().first().type(employeeFullName).type('{enter}');
    pim.searchBtn().click();
    pim.recordFoundLabel().should('be.visible').and('contain.text', '(1) Record Found');
    pim.nameLabel().should('be.visible').and('contain.text', employeeLastName);
})