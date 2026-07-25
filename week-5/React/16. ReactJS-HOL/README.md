# Exercise 16 — useRef & DOM Manipulation

## Scenario / Goal
Use the `useRef` hook to **access DOM elements** directly (focus an input),
**track render counts** without causing re-renders, and **store previous values**.

## Concept — useRef

`useRef` returns a mutable ref object whose `.current` property persists
across renders without triggering re-renders:

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus(); // direct DOM access
```

**Two main use cases:**
1. **DOM access** — attach `ref` to a JSX element to get the real DOM node.
2. **Mutable instance variable** — persist a value across renders (timers, counters, previous state) without causing re-renders.

## Project Structure

```
16. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # FocusInput, RenderCounter, PreviousValue
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A text input with a "Focus" button that programmatically focuses the input.
- A render counter that tracks how many times the component has rendered.
- A previous-value tracker showing both current and previous input values.

## Key Takeaways
- `useRef` is like a "box" that holds a mutable value in `.current`.
- Updating `.current` does **not** trigger a re-render.
- Use `ref` attribute for imperative DOM operations (focus, scroll, measure).
