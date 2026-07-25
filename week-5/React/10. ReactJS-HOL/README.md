# Exercise 10 — Custom Hooks

## Scenario / Goal
Extract **reusable stateful logic** into custom hooks (`useLocalStorage`,
`useToggle`, `useCounter`) and consume them from multiple components.

## Concept — Custom Hooks

A custom hook is a JavaScript function whose name starts with `use` and that
calls other hooks. It lets you share logic between components without
duplicating code:

```jsx
function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);
    const increment = () => setCount(c => c + 1);
    return { count, increment };
}
```

**Rules of hooks** still apply: only call hooks at the top level, only in
React functions or other custom hooks.

## Project Structure

```
10. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # useLocalStorage, useToggle, useCounter + demo UI
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

Three demo cards:
1. **useLocalStorage** — a textarea whose content persists across page reloads.
2. **useToggle** — a dark/light mode toggle.
3. **useCounter** — a counter with step = 5.

## Key Takeaways
- Custom hooks are the primary mechanism for logic reuse in React.
- They follow the same rules as built-in hooks.
- Extracting hooks keeps components focused on rendering.
