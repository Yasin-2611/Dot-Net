# Exercise 5 — Lists & Keys

## Scenario / Goal
Build a **Todo List** application that renders a dynamic list of items using
`.map()` with unique `key` props. Supports adding, toggling, and removing items.

## Concept — Lists & Keys

When rendering arrays in JSX, each element must have a unique `key` prop so
React can efficiently track additions, removals, and re-orderings.

```jsx
{items.map(item => (
    <li key={item.id}>{item.text}</li>
))}
```

**Key rules:**
- Keys must be **unique among siblings** (not globally).
- Prefer **stable IDs** from your data over array indices.
- Keys are not passed as props to the component — they are used internally by React.

## Project Structure

```
5. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # TodoApp component with add / toggle / remove
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

An interactive todo list with a text input, checkboxes, delete buttons, and a
completion counter at the bottom.

## Key Takeaways
- `.map()` is the idiomatic way to render lists in React.
- Always provide a `key` prop to help React's reconciliation algorithm.
- Use immutable updates (`filter`, spread, `map` returning new objects) to modify state arrays.
