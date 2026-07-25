# Exercise 4 — Conditional Rendering

## Scenario / Goal
Build components that render **different UI** based on application state.
Demonstrates if/else returns, ternary operators, and `&&` short-circuit rendering.

## Concept — Conditional Rendering

React lets you render different elements based on conditions using standard
JavaScript control flow inside your components:

```jsx
// 1. if/else (early return)
if (isLoggedIn) return <Dashboard />;
return <LoginForm />;

// 2. Ternary
{isLoggedIn ? <Dashboard /> : <LoginForm />}

// 3. && short-circuit
{showWarning && <Warning />}
```

## Project Structure

```
4. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # LoginControl & StatusBadge components
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A **login/welcome** card that toggles between login form and welcome message.
- A **status selector** that conditionally shows a badge and a "Do not disturb" warning.

## Key Takeaways
- Use if/else for entirely different return trees; ternary for inline toggling.
- `&&` short-circuit is great for "show this if true" patterns.
- Returning `null` from a component renders nothing.
