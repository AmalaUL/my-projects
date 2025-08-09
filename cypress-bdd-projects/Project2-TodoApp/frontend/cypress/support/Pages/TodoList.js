class TodoList {
    titleTxtBox() {
        return cy.get('[placeholder="Title"]');
    }
    descriptionTxtBox() {
        return cy.get('[placeholder="Description"]');
    }
    addTodoBtn() {
        return cy.get('div button');
    }
    titleLbl() {
        return cy.get('li strong');
    }
    editOrDeleteBtn() {
        return cy.get('div li button');
    }

}
export default TodoList; 