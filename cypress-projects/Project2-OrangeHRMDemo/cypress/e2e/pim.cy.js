import Pim from "../support/Pages/Pim";
import General from "../support/Pages/General";
import { faker } from "@faker-js/faker";

const pim = new Pim();
const general = new General();
const employee = {
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    fullName: function () {
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}

describe('Employee maanagement', () => {

    beforeEach('Login SetUp', () => {
        cy.login(Cypress.env('userId'), Cypress.env('password'));
        general.mainMenu().contains('PIM').click();
        general.title().should('be.visible').and('have.text', 'PIM');
    })

    it('TC-1 Add employee', () => {
        pim.addBtn().click();
        pim.firstNameTxt().type(employee.firstName);
        pim.middleNameTxt().type(employee.middleName);
        pim.lastNameTxt().type(employee.lastName);
        pim.employeeIdTxt().clear();
        pim.saveBtn().click();
        cy.contains('Successfully Saved').should('be.visible');
        general.title().should('contain.text', 'Personal Details');

    })

    it('TC-2 -Search and Edit an Employee', () => {
        cy.intercept('GET', '**/personal-details').as('personalDetails');
        //search employee
        cy.searchEmployee(employee.fullName(), employee.lastName);
        //edit employee
        pim.editIcon().click();
        cy.wait('@personalDetails').its('response.statusCode').should('eq', 200);
        pim.subItems().contains('Job').click();
        general.title().should('contain.text', 'Job Details');
        pim.jobDropDown().first().click();
        pim.roleOptions().contains('Automaton Tester').click();
        pim.saveBtn().click();
        cy.contains('Successfully Updated').should('be.visible');
    })

    it('TC-3 -Search and Delete an Employee', () => {
        cy.intercept('DELETE', '**/pim/employees').as('employees');
        //search employee
        cy.searchEmployee(employee.fullName(), employee.lastName);

        //delete employee
        pim.deleteBtn().click();
        pim.confirmationDeleteBtn().click();
        cy.contains('Successfully Deleted').should('be.visible');
        cy.wait('@employees').its('response.statusCode').should('eq', 200);
    })


})