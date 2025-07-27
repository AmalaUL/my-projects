### Cypress Automation Test 
## Purpose
Automate critical flows(Login and Create/Edit/Delete employee) for the OrangeHRM demo app using Cypress

## Test Scenarios
- Login OrangeHRM application
- Add an Employee
- Search for an Employee
- Edit Employee details
- Delete an Employee

## Tech Stack
- Cypress
- Javascript
- Node.js
- 'dotenv' for environment variable management
- BitBucket pipelines for CI 

## How to Run Tests
- npm install
- create .env file in project root folder based on .env.example before running test 
- npx cypress open # To run tests in interactive mod
- npx cypress run # To run tests in headless mode

## TestData
- Static User: Managed via .env file (includes URL, username, password)
- Employee : Generated dynamically using Faker (random name per test run)

## TestCases
# TC-1 -Add Employee
- Login to the application
- Navigate to Pim page
- Add a new employee with required details

# TC-2 -Search and Edit an Employee
- Login to the application
- Navigate to Pim Page
- Search for the created employee
- Edit the employee details
- Update job title and Save changes

# TC-3 -Search and Delete an Employee
- Login to the application
- Navigate to Pim Page
- Search for the created employee
- Delete the Employee
