# Exercise 1 — Introduction to React & JSX

## Scenario / Goal
Build a simple React application using **JSX** to understand how React renders
UI elements. Create a greeting card component that demonstrates JSX expressions,
embedding JavaScript in markup, and the virtual DOM concept.

## Concept — React & JSX

**What is React?**
React is a JavaScript library for building user interfaces. It uses a
component-based architecture where the UI is broken into reusable pieces.

**What is JSX?**
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code
inside JavaScript. Babel transpiles JSX into `React.createElement()` calls.

```jsx
// JSX syntax
const element = <h1>Hello, {name}!</h1>;

// Transpiled to:
const element = React.createElement('h1', null, `Hello, ${name}!`);
```

**Key JSX Rules:**
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- All tags must be closed (including self-closing like `<img />`)
- Wrap multiple elements in a single parent or use `<React.Fragment>`
- Embed JS expressions inside `{}`

## Project Structure

```
1. ReactJS-HOL/
├── index.html      # Entry point — loads React via CDN
├── App.jsx         # Main application component
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.
React and Babel are loaded from a CDN for simplicity.

## Expected Output

A styled greeting card displaying:
- A heading with the user's name (from a JS variable)
- The current date and time (computed via JS expression)
- A list of favourite technologies rendered via `.map()`
- Inline styles applied through JSX

## Key Takeaways
- JSX lets you write declarative UI code that *looks* like HTML but is actually
  JavaScript under the hood.
- Curly braces `{}` let you embed *any* JavaScript expression inside JSX.
- React elements are plain objects — `React.createElement()` creates them;
  `ReactDOM.createRoot().render()` paints them to the real DOM.
- JSX must return a single root element; use fragments (`<>...</>`) to avoid
  extra DOM nodes.
