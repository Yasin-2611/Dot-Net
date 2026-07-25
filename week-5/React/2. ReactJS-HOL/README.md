# Exercise 2 — Components & Props

## Scenario / Goal
Build a team roster page using **reusable functional components** that accept
data through **props**. Demonstrates component composition and prop drilling.

## Concept — Components & Props

**Functional Components** are plain JavaScript functions that return JSX. They
receive a single `props` object (or destructured individual props).

```jsx
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
```

**Key points:**
- Props are **read-only** — a component must never modify its own props.
- Parent components pass data *down* to children via props (one-way data flow).
- Components can be **composed** — a parent renders children, passing each its
  own set of props.

## Project Structure

```
2. ReactJS-HOL/
├── index.html      # Entry point — loads React via CDN
├── App.jsx         # UserCard, Badge, Team & App components
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

A team roster showing four styled user cards, each displaying an avatar initial,
name, and role. A row of badges at the bottom demonstrates another reusable component.

## Key Takeaways
- Components let you split the UI into independent, reusable pieces.
- Props flow **one way** — parent → child — making data flow predictable.
- Composition (nesting components inside other components) is the primary
  pattern for building complex UIs in React.
