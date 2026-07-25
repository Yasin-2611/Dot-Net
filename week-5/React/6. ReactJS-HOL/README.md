# Exercise 6 — Forms & Controlled Components

## Scenario / Goal
Build a **registration form** where every input's value is driven by React state
(controlled components). Includes validation and submission handling.

## Concept — Controlled Components

In a controlled component, form data is handled by React state. The `value`
attribute is bound to state, and `onChange` updates it:

```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

**Key points:**
- The React state is the "single source of truth" for the input's value.
- Works with `<input>`, `<textarea>`, `<select>`, and `<input type="checkbox">`.
- Validation can run on submit or on every keystroke.

## Project Structure

```
6. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # RegistrationForm with validation
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

A styled registration form with name, email, role dropdown, and terms checkbox.
Inline validation errors appear on submit; successful submission shows a confirmation banner.

## Key Takeaways
- Controlled components give React full control over form state.
- `e.preventDefault()` stops the browser's default form submission.
- Consolidating form fields into a single state object keeps the code tidy.
