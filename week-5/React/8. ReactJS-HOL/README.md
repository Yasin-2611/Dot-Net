# Exercise 8 — Context API

## Scenario / Goal
Implement a **theme toggler** using React's **Context API** to share global state
(dark/light mode) across deeply nested components without prop drilling.

## Concept — Context API

Context provides a way to pass data through the component tree without manually
passing props at every level.

```jsx
const ThemeContext = createContext();

// Provider wraps the tree
<ThemeContext.Provider value={theme}>
    <App />
</ThemeContext.Provider>

// Any descendant can consume
const theme = useContext(ThemeContext);
```

**Key points:**
- `createContext()` creates the context object.
- `<Provider value={…}>` makes data available to all descendants.
- `useContext(Ctx)` reads the nearest Provider's value.

## Project Structure

```
8. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # ThemeProvider, ThemedCard, ThemeToggle
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

A page with themed cards and a Dark/Light mode toggle button. Clicking the
button switches the entire UI theme globally through Context.

## Key Takeaways
- Context avoids "prop drilling" for truly global state.
- Wrap the tree with a Provider and consume with `useContext`.
- For complex state, combine Context with `useReducer`.
