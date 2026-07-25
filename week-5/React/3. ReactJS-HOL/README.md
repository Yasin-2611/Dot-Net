# Exercise 3 — State & Event Handling

## Scenario / Goal
Build interactive components that respond to user clicks using **React state**
(`useState` hook) and **event handlers**. Includes a counter and a toggle.

## Concept — State & Events

**State** is data that belongs to a component and can change over time. When
state changes, React automatically re-renders the component.

```jsx
const [count, setCount] = useState(0);
```

**Event handling** in React uses camelCase attributes (`onClick`, `onChange`).
Handlers receive a synthetic event object that wraps the native browser event.

**Key points:**
- State is local and private to the component.
- Always use the setter function — never mutate state directly.
- Use the functional updater form `setCount(c => c + 1)` when the new value
  depends on the previous value.

## Project Structure

```
3. ReactJS-HOL/
├── index.html      # Entry point — loads React via CDN
├── App.jsx         # Counter & ToggleMessage components
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

- A **counter** with −, Reset, and + buttons that updates a large number display.
- A **toggle** button that shows/hides a message.

## Key Takeaways
- `useState` returns a `[value, setter]` pair; calling the setter triggers a re-render.
- Event handlers are passed as function references — `onClick={handleClick}`, not `onClick={handleClick()}`.
- State updates may be batched; use the functional form when computing next state from previous state.
