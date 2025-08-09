class Pim {
    addBtn() {
        return cy.get('.bi-plus');
    }
    firstNameTxt() {
        return cy.get('[name="firstName"]');
    }
    middleNameTxt() {
        return cy.get('[name="middleName"]');
    }
    lastNameTxt() {
        return cy.get('[name="lastName"]');
    }
    employeeIdTxt() {
        return cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input');
    }
    saveBtn() {
        return cy.get('.oxd-button--secondary');
    }
    employeeName() {
        return cy.get('.oxd-autocomplete-text-input');
    }
    searchBtn() {
        return cy.get('[type="submit"]');
    }
    recordFoundLabel() {
        return cy.get('.orangehrm-horizontal-padding>.oxd-text--span');
    }
    nameLabel() {
        return cy.get('.oxd-table-card > .oxd-table-row >.oxd-padding-cell');
    }
    editIcon() {
        return cy.get('.bi-pencil-fill');
    }
    subItems() {
        return cy.get('.orangehrm-tabs-item');
    }
    jobDropDown() {
        return cy.get('.oxd-select-text>.oxd-select-text--after>.bi-caret-down-fill ');
    }
    roleOptions() {
        return cy.get('.oxd-select-option');
    }
    deleteBtn() {
        return cy.get('.bi-trash');
    }
    confirmationDeleteBtn() {
        return cy.get('.oxd-button--label-danger');
    }
}
export default Pim;