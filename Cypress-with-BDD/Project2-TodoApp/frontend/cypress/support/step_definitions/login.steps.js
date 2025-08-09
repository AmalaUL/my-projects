import { Given } from '@badeball/cypress-cucumber-preprocessor';


Given('I login to the todo application', () => {
    cy.login(Cypress.env('userId'), Cypress.env('password'))
})
