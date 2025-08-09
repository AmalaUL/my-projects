# - Project 3: DUMMY REST API 
## - Pre-requisites
Install Cypress:
npm install cypress --save-dev

Initialize Cypress project:
npx cypress open

## - Scenarios: 
Create Post — sends a POST request and validates the response contains the new post with an ID.
Fetch Posts — sends GET requests to retrieve all posts and a single post by ID, validating response structure.
Edit Post — sends PUT and PATCH requests to update existing posts and verifies changes.
Delete Post — sends DELETE requests and checks for successful status codes.

### - Learnings:
- Validating API responses including status codes, response body, and headers.
- Writing clean, maintainable tests with proper assertions

### To Improve Later
- Add tests for error scenarios (e.g., invalid data, unauthorized access)
- Add reporting with screenshots and logs on failure. 
