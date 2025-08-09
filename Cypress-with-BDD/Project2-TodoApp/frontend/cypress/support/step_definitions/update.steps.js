import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoList from '../Pages/TodoList';

const todolist = new TodoList();
When('I edit the title and description for already added list', () => {
    let promptIndex = 0;
    cy.window().then(win => {
        const response = ['Updated JS', 'Updated JS PREP']
        cy.stub(win, 'prompt').callsFake(() => {
            return response[promptIndex++];
        })
        todolist.editOrDeleteBtn().contains('Edit').click();

    })
})
Then('I validate the updated title', () => {
    todolist.titleLbl().should('contain.text', 'Updated JS');
    todolist.titleLbl().should('not.contain', 'JavaScript');

})
