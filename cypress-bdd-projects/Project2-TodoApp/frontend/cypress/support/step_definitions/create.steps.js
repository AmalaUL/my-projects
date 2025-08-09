import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoList from '../Pages/TodoList';

const todolist = new TodoList();
When('I edit the title and description for already added list', () => {
    cy.intercept('POST', `${Cypress.env('backendUrl')}/todos`).as('createTodos');
    todolist.titleTxtBox().type('Javascript');
    todolist.descriptionTxtBox().type('JS Prep for 1 hour');
})
Then('I add the list and validate added list', () => {

    todolist.addTodoBtn().contains('Add Todo').click();
    //assertion
    cy.wait('@createTodos').its('response.statusCode').should('eq', 201);
    todolist.titleLbl().should('be.visible').and('contain.text', 'Javascript');
})
