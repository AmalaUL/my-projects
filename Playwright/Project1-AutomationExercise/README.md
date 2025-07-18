### Playwright Automation Exercise Mini Project
## Pre-Requisite:
- install playwright - npm install playwright@latest
- create .env file with URL and credentials
- install dotenv - npm install dotenv --save-dev
- to run test in all 3 browsers - npx playwright test 
- run Project in Headed Mode (for debugging) - npx playwright test --project=chromium --headed

# Scenario 1: Purchase Flow
this test checks an invoice of the placed order.

Approach:
- Log in as an existing user
- Add multiple products to the cart
- Proceed to checkout and validate final price
- Make payment and download invoice
- Assert file is downloaded and content is accurate

# Scenario 2: Login Session Persistence
this test checks an application is alive even after reloading the page.

Approach:
- Login and add product to cart
- Capture session cookie
- Reload page
- Validate that the same session cookie exists
- Confirm cart state is retained

# Scenario 3: Form Validation (Contact Us Page)
this test checks error message when email is missing and invalid input is given.

Approach:
- Native HTML5 validation using validity.valid and validationMessage
- Used evaluate() to extract tooltip message since it's not in DOM

# Learnings / Challenges Faced
- Switched from forEach to for...of in Playwright loops to support await behavior.
- Understood that assigning a function’s return value to a variable, and passing it to another method ensures better control over async logic.
- Reused a single function for multiple edge cases like undefined & invalid input.
- Used evaluate() to read el.validity.valid and el.validationMessage for tooltips that are not in the DOM.
- Faced failures due to missing await before expect() — learned that await is essential even for assertions.
