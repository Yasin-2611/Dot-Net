# Exercise 7 — React Lifecycle & useEffect

## Scenario / Goal
Demonstrate **side effects** in functional components using the `useEffect` hook.
Build a stopwatch timer and a live window-size tracker.

## Concept — useEffect

`useEffect` runs side-effect code after render. It replaces class lifecycle
methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

```jsx
useEffect(() => {
    // runs after render
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);   // cleanup
}, [dependency]);                     // re-run when dependency changes
```

**Dependency array patterns:**
| Array | Runs when |
|-------|-----------|
| `[]` | Once after initial render (mount) |
| `[a, b]` | After render if `a` or `b` changed |
| *(omitted)* | After every render |

## Project Structure

```
7. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # Timer & WindowSize components
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A **stopwatch** with Start/Pause and Reset controls.
- A **live window-size** display that updates as the browser is resized.

## Key Takeaways
- `useEffect` is the hook for side effects (timers, subscriptions, DOM mutations).
- The **cleanup function** prevents memory leaks by tearing down subscriptions.
- The dependency array controls *when* the effect re-runs.
