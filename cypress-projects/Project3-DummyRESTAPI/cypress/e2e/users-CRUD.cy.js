/// <reference types="cypress" />

describe('API Test-Users', () => {
    let testData, id;

    before('Load test data', () => {
        cy.fixture('employee').then((data) => {
            testData = data;
        })
    })


    it('TC-1 Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: testData,
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.id).to.exist;
            id = response.body.id;
            expect(response.body.title).to.eq(testData.title);
        })

    })

    it('TC-2 Get the created user details', () => {
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/2`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);

        })
    })

    it('TC-3 update title of created user', () => {
        cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/1`,
            body: {
                title: "Automation"

            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Automation');

        })
    })

    it('TC-4 Delete the created employee', () => {
        cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })

})