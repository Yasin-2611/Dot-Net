# Exercise 9 — React Router

## Scenario / Goal
Implement **client-side routing** so the app renders different page components
(Home, About, Contact, 404) based on the current "route", without a full page reload.

## Concept — React Router

`react-router-dom` is the standard library for routing in React SPAs:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
    <Link to="/about">About</Link>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
</BrowserRouter>
```

> Since this exercise runs via CDN (no bundler), routing is **simulated** with
> state. The concepts (path-to-component mapping, 404 fallback) are identical.

## Project Structure

```
9. ReactJS-HOL/
├── index.html      # Entry point
├── App.jsx         # NavLink, Home, About, Contact, NotFound, App
└── README.md       # This file
```

## How to Run

Open `index.html` directly in a web browser — no build step required.

## Expected Output

A navigation bar with Home, About, Contact, and 404 links. Clicking each renders
the corresponding page component without reloading the page.

## Key Takeaways
- React Router maps URL paths to components for SPA navigation.
- `<Route path="*">` catches unmatched URLs (404 page).
- Navigation with `<Link>` avoids full page reloads.
