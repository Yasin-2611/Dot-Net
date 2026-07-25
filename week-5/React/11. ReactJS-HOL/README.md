# Exercise 11 — Higher-Order Components (HOC)

## Scenario / Goal
Create **higher-order components** (`withLoading`, `withBorder`) that wrap
existing components to add cross-cutting functionality without modifying them.

## Concept — Higher-Order Components

A HOC is a function that takes a component and returns a new enhanced component:

```jsx
function withLoading(WrappedComponent) {
    return function ({ isLoading, ...props }) {
        if (isLoading) return <Spinner />;
        return <WrappedComponent {...props} />;
    };
}

const EnhancedList = withLoading(UserList);
```

**Key points:**
- HOCs are a pattern, not a React API.
- They follow the convention `withXxx`.
- Don't mutate the original component — wrap it.
- Modern React often prefers custom hooks, but HOCs are still widely used.

## Project Structure

```
11. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # withLoading, withBorder HOCs + UserList, Greeting
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A user list that shows a loading spinner for 2 seconds, then renders the list.
- A greeting card wrapped with a coloured border by the `withBorder` HOC.

## Key Takeaways
- HOCs enable code reuse for cross-cutting concerns (loading, auth, logging).
- They compose: `withBorder(withLoading(Component))`.
- Prefer custom hooks for new code, but understand HOCs for legacy codebases.
