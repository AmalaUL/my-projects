import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoList from '../Pages/TodoList';

const todolist = new TodoList();
When('I delete the list', () => {
    cy.intercept('DELETE', `${Cypress.env('backendUrl')}/todos/**`).as('deleteList');
    todolist.editOrDeleteBtn().contains('Delete').click();

})
Then('I validate the list is removed', () => {
    cy.wait('@deleteList').its('response.statusCode').should('eq', 204);
    expect(Cypress.$('li strong').length).to.eq(0);

})
