# - Cypress Day 1- Mini Project : Automation Exercise site
## - Pre-requisites
Install Cypress:
npm install cypress --save-dev

Initialize Cypress project:
npx cypress open

Install dotenv for environment variable handling:
npm install dotenv --save-dev

Configure .env in cypress.config.js using process.env.KEY

## - Scenario 1: Cypress Purchase Flow Test
This test case automates the full user purchase flow and validates the successful download of the invoice file (invoice.txt). The test confirms the file exists under the cypress/downloads/ directory using a custom Node.js task.

### -Approach:
Logged in as Existing User
Add Products to Cart
Place the order
Download invoice

### -Challenges / Learnings:
- Environment Variables (Cypress.env Issue):
Initially encountered undefined values when accessing environment variables using Cypress.env('key') in commands.js. This was because Cypress only loads .env variables that start with the CYPRESS_ prefix.
The issue was resolved by renaming environment variables in .env like:

CYPRESS_APPLICATION_EMAIL_ADDRESS=Demo1234@gmail.com
instead of
APPLICATION_EMAIL_ADDRESS=Demo1234@gmail.com
- File Download Validation via Task:
Created a custom Node.js task (fileExists) inside setupNodeEvents to validate the presence of a downloaded file using fs.existsSync(). This helped assert that the invoice was actually downloaded.
- Asynchronous Behavior of Cypress:
Faced timing issues and undefined errors when extracting dynamic content. Resolved by chaining .then() properly with Cypress commands and handling .each() loops carefully to maintain order and timing.
- Unexpected Token Error with .each():
Ran into a SyntaxError: Unexpected token ')' during use of .each(). Though adding Cypress.on('uncaught:exception') suppressed the error, it’s likely the root cause was a missing/extra parenthesis or misuse of the callback. Needs deeper inspection later.

## -Scenario 2: Login Session Persistence
To verify that the user’s login session and cart state persist across page reloads or revisits

### -Approach:
Logged in as existing user
Added products to cart
Captured session cookie value before reload
Reloaded page
Verified session cookie remains unchanged
Validated cart UI elements after reload to confirm state persistence

### -Challenges / Learnings:
- Identifying the correct cookie key name used by the application.
- Understanding that Cypress commands are asynchronous and require chaining with .then() for reliable access to values.
- Initially, accessing the session cookie’s .value returned undefined even though the cookie existed in the browser. Later discovered that in this app, the cookie is returned as a string rather than an object, so I used the cookie value directly without .value.

## -Scenario 3: Form Validation with Edge Cases
To validate that native browser tooltips and HTML5 validation are enforced correctly when submitting the "Contact Us" form with missing or invalid input values.

### -Approach:
- Triggered form submission with intentionally incorrect input
- Accessed browser-native validation using .validity.valid and .validationMessage from the DOM element
- Created a reusable custom Cypress command checkToolTipMessage() to assert validation behavior

### -Challenges / Learnings::
- Native validation tooltips are not part of the DOM and cannot be directly selected or asserted via Cypress .get() or .contains().
- Cypress wraps elements as jQuery objects — native DOM properties like .validity and .validationMessage require accessing the element with $el[0].
- Accidentally shadowed the input argument message in the custom command — resolved by renaming the inner variable.
- Created readable, reusable code with a custom command to simplify future validations.
