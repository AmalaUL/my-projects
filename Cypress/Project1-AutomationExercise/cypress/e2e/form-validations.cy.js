import Login from "../support/Pages/Login";
import Contacts from "../support/Pages/Contacts";
import 'cypress-file-upload';


const login = new Login();
const contacts = new Contacts();

describe('Form Validation with edge cases', () => {
    let testData;
    before('Load Test Data from Fixture', () => {
        cy.fixture('contacts').then((data) => {
            testData = data;
        })
    })
    beforeEach('SetUp', () => {
        cy.login();
    })

    it('Form with missing email', () => {
        login.navLink().contains('Contact us').click();
        contacts.nameTextBox().clear().type(testData.name);
        contacts.subjectTextBox().clear().type(testData.subject);
        contacts.messageTextBox().clear().type(testData.message)
        contacts.chooseFileBtn().attachFile('./TestFiles/invoice.txt');
        contacts.submitBtn().click();

        // Assert the email field is invalid and triggers a validation message
        cy.checkToolTipMessage(contacts.emailTextBox(), 'Please fill out this field')
    });

    it('TC-2 Form with invalid email', () => {
        login.navLink().contains('Contact us').click();
        contacts.nameTextBox().clear().type(testData.name);
        contacts.emailTextBox().clear().type(testData.email)
        contacts.subjectTextBox().clear().type(testData.subject);
        contacts.messageTextBox().clear().type(testData.message)
        contacts.chooseFileBtn().attachFile('./TestFiles/invoice.txt');
        contacts.submitBtn().click();

        // Assert the email field is invalid and triggers a validation message
        const message = `Please include an '@' in the email address. '${testData.email}' is missing an '@'.`
        cy.checkToolTipMessage(contacts.emailTextBox(), message)

    });

    afterEach('logout the application', () => {
        login.navLink().contains('Logout').click();
        login.loginButton().should('be.visible');
    })
})




