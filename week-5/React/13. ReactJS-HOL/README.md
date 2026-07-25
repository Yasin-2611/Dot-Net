# Exercise 13 — React.memo & useMemo

## Scenario / Goal
Optimise rendering performance using `React.memo` (skip re-renders when props
haven't changed) and `useMemo` (cache expensive computations).

## Concept — Memoisation in React

| API | Purpose |
|-----|---------|
| `React.memo(Component)` | Wraps a component; skips re-render if props are shallowly equal. |
| `useMemo(() => compute(), [deps])` | Caches a computed value; only recomputes when deps change. |
| `useCallback(fn, [deps])` | Caches a function reference (equivalent to `useMemo(() => fn, [deps])`). |

## Project Structure

```
13. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # ExpensiveList (React.memo) + useMemo search filter
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.
Open the browser console to observe when `ExpensiveList` re-renders.

## Expected Output

- An unrelated counter that, when clicked, does **not** trigger a re-render of `ExpensiveList`.
- A search box that filters items using `useMemo`; only recomputes when the search term changes.

## Key Takeaways
- `React.memo` prevents child re-renders when parent state changes but child props don't.
- `useMemo` avoids recomputing expensive values on every render.
- Only optimise when there's a measurable performance issue; premature optimisation adds complexity.
