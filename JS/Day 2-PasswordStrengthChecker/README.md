# Password Strength Checker

This is a simple JavaScript mini project that analyzes a password entered by the user and displays:

- ✅ Password is Strong/Medium/Weak with bar
- ✅ Shows message on what needs to be improved


### 📁 Files

- `password-strength-checker.html` — Base HTML with minimal markup
- `password-strength-checker.js` — All DOM manipulation and logic handled via JavaScript

### 🚀 How to Run

1. Open `password-strength-checker.html` in your browser
2. Type a password into the input box with different combinations (less or greater than 8 characters, with/without special characters & numbers)
3. See the results below the input!

### 🧠 Features Covered

- DOM manipulation using JavaScript
- Event handling (`input`)
- Working with strings, Debounce function, arrays
- Regex usage for input validation
- Modular function design
- Edge case handling

### 🧠 What I Learned
- Using a debounce function to optimize input handling and improve performance.
- Applying regular expressions (regex) to validate password rules (length, uppercase, numbers, special chars).
- Styling elements in real-time (progress bar width and color) based on input feedback.

- Struggled with:
  - Correctly syncing the progress bar’s width and color with password strength levels,
  - Choosing between innerHTML and textContent for safe and clear DOM updates,
  - Implementing debounce properly to avoid lag or too many function calls,
  - Handling conditional logic for listing unmet criteria alongside strength messages.

### 📌 To Improve Later
- Password Visibility Toggle — Add an option to show/hide the password input for ease of use.
- More Granular Strength Scoring — Implement finer scoring instead of fixed 25% steps for more accurate feedback.
- Better UI/UX & Styling — Enhance progress bar visuals and layout for clearer user feedback
