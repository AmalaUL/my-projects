# Word Counter App

This is a simple JavaScript mini project that analyzes a sentence entered by the user and displays:

- ✅ Total number of words (excluding symbols)
- ✅ Total number of characters (with and without spaces)
- ✅ Most frequently occurring word
- ✅ Most frequently occurring character (excluding symbols)

### 📁 Files

- `word-counter-app.html` — Base HTML with minimal markup
- `word-counter-app.js` — All DOM manipulation and logic handled via JavaScript

### 🚀 How to Run

1. Open `word-counter-app.html` in your browser
2. Type a sentence into the input box
3. Click **Analyze**
4. See the results below the input!

### 🧠 Features Covered

- DOM manipulation using JavaScript
- Event handling (`click`)
- Working with strings, arrays, objects
- Regex usage for input validation
- Modular function design
- Edge case handling

### 🧠 What I Learned
- Learned how to use regex to clean input effectively
- Realized that regex does not work directly on arrays — needs to be used on individual elements
- Practiced handling edge cases like:
  - No repeated characters or words
  - Input is empty or contains only spaces

- Struggled with:
  - Initially declared global variables with initialization outside the function — which didn’t update correctly on each button click. Moved initialization inside the `countFunc` to fix this
  - Used `textContent` to render result with `<br>`, which displayed HTML as plain text — replaced it with `innerHTML` to render it properly in new lines

### 📌 To Improve Later
- Add separate CSS styling for better layout and separation of concerns
- Add test cases to validate edge scenarios
- Improve UI with basic animations or visual feedback

---

👩‍💻 Built as part of a self-practice JS mini project series
