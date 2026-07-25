# Exercise 12 — Error Boundaries

## Scenario / Goal
Implement an **Error Boundary** class component that catches JavaScript errors
in child component rendering and displays a fallback UI instead of crashing.

## Concept — Error Boundaries

Error boundaries are React components that catch errors during rendering,
in lifecycle methods, and in constructors of the whole tree below them.

```jsx
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) return <FallbackUI />;
        return this.props.children;
    }
}
```

**Key points:**
- Must be a **class component** (no hook equivalent yet).
- Only catches errors in **rendering** — not in event handlers or async code.
- Wrap different sections to isolate failures.

## Project Structure

```
12. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # ErrorBoundary class + BuggyCounter + SafeWidget
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A counter that crashes at 3 — the ErrorBoundary catches it and shows a
  fallback with a "Try Again" button.
- A safe widget below that remains unaffected by the crash.

## Key Takeaways
- Error boundaries prevent one broken component from taking down the whole app.
- They require `getDerivedStateFromError` and/or `componentDidCatch`.
- Place them strategically around independent sections of UI.
