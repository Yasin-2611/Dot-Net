# Exercise 15 — React Portals

## Scenario / Goal
Use `ReactDOM.createPortal` to render a **modal dialog** and a **tooltip**
outside the main `#root` DOM node, demonstrating how portals escape parent
CSS constraints like `overflow: hidden`.

## Concept — React Portals

Portals let you render children into a DOM node that exists outside the
parent component's DOM hierarchy:

```jsx
ReactDOM.createPortal(child, document.getElementById('modal-root'));
```

**Key points:**
- The rendered child behaves as if it's inside the React tree (events bubble normally).
- It's physically in a different DOM node — escaping CSS overflow, z-index issues, etc.
- Ideal for modals, tooltips, popovers, and notification toasts.

## Project Structure

```
15. ReactJS-HOL/
├── index.html      # Entry point with #root and #modal-root divs
├── App.jsx         # Modal (portal) + Tooltip (portal)
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A **button** that opens a modal rendered into `#modal-root`.
- **Hoverable text** that displays a tooltip rendered via portal.

## Key Takeaways
- `createPortal` renders into any DOM node, not just `#root`.
- React event bubbling works across portals.
- Use portals for UI that must visually "break out" of its parent.
