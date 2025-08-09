### Playwright OrangeHRM Demo Mini Project
## Pre-Requisite:
- install playwright - npm install playwright@latest
- create .env file with URL and credentials
- install dotenv - npm install dotenv --save-dev
- to run test in all 3 browsers - npx playwright test 
- run Project in Headed Mode (for debugging) - npx playwright test --project=chromium --headed

# Scenario 1: Add Employee
This test create a new employee in the application.

Approach:
- Log in as an existing user
- Navigate to the PIM page
- Add an employee by providing neccessary details (first name, middle name,last name)
- Assert that the employee was created successfully

# Scenario 2: Search and Edit Employee
This test searches for an employee and edit the job details

Approach:
- Login as an existing user
- Navigate to the PIM page
- Enter created employee's name and perform a search
- Edit job title and save changes
- Validate that updated job title is visible

# Scenario 3: Search and Delete Employee
This test search an employee and edit the job details

Approach:
- Login as an existing user
- Navigate to the PIM page
- Enter created employee's name and perform a search
- Delete the employee
- Validate employee is removed

# Learnings / Challenges Faced
- Learned how to use waitForResponse to wait for API requests and perform assertions
- Practiced assertion on locators filtered by text content
- Handling dynamic page elements and synchronization challenges
