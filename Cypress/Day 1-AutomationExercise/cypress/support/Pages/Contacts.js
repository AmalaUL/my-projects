class Contacts {
    nameTextBox() {
        return cy.get('[data-qa="name"]');
    }
    emailTextBox() {
        return cy.get('[data-qa="email"]');
    }
    subjectTextBox() {
        return cy.get('[data-qa="subject"]');
    }
    messageTextBox() {
        return cy.get('[data-qa="message"]');
    }
    chooseFileBtn() {
        return cy.get('[name="upload_file"]');
    }
    submitBtn() {
        return cy.get('[data-qa="submit-button"]');
    }

}
export default Contacts;