class Payment {
    heading() {
        return cy.get('h2.heading');
    }
    nameTextBox() {
        return cy.get('[data-qa="name-on-card"]');
    }
    cardTextBox() {
        return cy.get('[data-qa="card-number"]');
    }
    cvcTextBox() {
        return cy.get('[data-qa="cvc"]');
    }
    expiryMonthTextBox() {
        return cy.get('[data-qa="expiry-month"]');
    }
    expiryYearTextBox() {
        return cy.get('[data-qa="expiry-year"]');
    }
    payAndConfirmOrderBtn() {
        return cy.get('[data-qa="pay-button"]');
    }
    confirmationMessage() {
        return cy.get('.col-sm-9 p');
    }
    downloadInvoiceBtn() {
        return cy.get('.check_out');
    }
}
export default Payment;