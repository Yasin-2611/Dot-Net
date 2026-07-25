# Exercise 17 — React Suspense & Lazy Loading

## Scenario / Goal
Demonstrate **code-splitting** concepts using `React.lazy` and `<Suspense>` to
load components on demand with a loading fallback. Simulated via CDN since
`React.lazy` requires a bundler.

## Concept — Suspense & Lazy Loading

```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));

<Suspense fallback={<Spinner />}>
    <Dashboard />
</Suspense>
```

**Key points:**
- `React.lazy` wraps a dynamic `import()` — the component's code is fetched on demand.
- `<Suspense>` shows a `fallback` UI while the lazy component loads.
- Reduces initial bundle size by splitting code into chunks.

> This exercise simulates the pattern with a timer since CDN-based React
> doesn't support `React.lazy()`.

## Project Structure

```
17. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # Simulated lazy loading with Dashboard & Settings
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

A tabbed interface with Dashboard and Settings. Each tab shows a loading
spinner for a few seconds (simulating network fetch), then reveals the component.

## Key Takeaways
- Lazy loading splits your app into smaller chunks loaded on demand.
- `<Suspense>` provides a declarative loading state.
- In production, combine with React Router for route-based code splitting.
