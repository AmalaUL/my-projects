import { test, expect } from '@playwright/test';
import Login from '../Pages/Login';
import Contacts from '../Pages/Contacts';
import testData from '../TestData/contacts.json' assert {type: 'json'};

test.describe('Form Validation in Contacts Us', () => {
    let login, contacts;
    test.beforeEach('login Setup', async ({ page }) => {
        login = new Login(page);
        contacts = new Contacts(page);

        await login.loginApp(process.env.APPLICATION_EMAIL_ADDRESS, process.env.APPLICATION_PASSWORD);

    })
    test('TC-1 Form with missing email', async ({ page }) => {
        const errorMessage = `Please fill out this field.`;
        await contacts.fillContactForm(testData.name, undefined, testData.subject, testData.message, errorMessage);

    })
    test('TC-2 Form with invalid email', async ({ page }) => {
        const errorMessage = `Please include an '@' in the email address. '${testData.email}' is missing an '@'.`;
        await contacts.fillContactForm(testData.name, testData.email, testData.subject, testData.message, errorMessage);

    })

})
