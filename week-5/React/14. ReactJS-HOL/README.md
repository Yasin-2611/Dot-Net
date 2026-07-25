# Exercise 14 — useReducer Hook

## Scenario / Goal
Build a **shopping cart** using `useReducer` for complex state transitions
(add, remove, increment, decrement, clear) via dispatched actions.

## Concept — useReducer

`useReducer` is an alternative to `useState` for complex state logic:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return { ...state, items: [...state.items, action.payload] };
        default:   return state;
    }
}

dispatch({ type: 'ADD', payload: newItem });
```

**When to use `useReducer` over `useState`:**
- State has multiple sub-values.
- Next state depends on the previous state.
- You want to centralise update logic in one function.

## Project Structure

```
14. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # cartReducer + ShoppingCart component
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

An interactive shopping cart where you can add products, adjust quantities,
remove items, and clear the entire cart.

## Key Takeaways
- `useReducer` manages complex state with explicit action types.
- The reducer is a pure function — easy to test and reason about.
- Combines well with Context to provide global dispatch.
