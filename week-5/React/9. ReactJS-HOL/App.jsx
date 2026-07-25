/* Exercise 9 — React Router (simulated without react-router-dom) */

const { useState } = React;

/*
 * Since we're running via CDN without a bundler, we simulate client-side
 * routing with a simple state-based "router". In a real project you'd use
 * react-router-dom's <BrowserRouter>, <Routes>, <Route>, <Link>, etc.
 */

function NavLink({ to, current, onClick, children }) {
    const active = to === current;
    return (
        <button onClick={() => onClick(to)} style={{
            padding: '10px 20px', border: 'none', borderRadius: '10px',
            background: active ? '#764ba2' : 'transparent',
            color: active ? '#fff' : 'rgba(255,255,255,0.7)',
            fontWeight: '600', fontSize: '15px', cursor: 'pointer',
            transition: 'all 0.2s',
        }}>
            {children}
        </button>
    );
}

function Home() {
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏠</div>
            <h2 style={{ color: '#333' }}>Home Page</h2>
            <p style={{ color: '#888', marginTop: '8px' }}>Welcome to the React Router demo! Navigate using the links above.</p>
        </div>
    );
}

function About() {
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>ℹ️</div>
            <h2 style={{ color: '#333' }}>About Page</h2>
            <p style={{ color: '#888', marginTop: '8px' }}>
                React Router enables client-side routing in single-page applications.
                It maps URL paths to components without full page reloads.
            </p>
        </div>
    );
}

function Contact() {
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📧</div>
            <h2 style={{ color: '#333' }}>Contact Page</h2>
            <p style={{ color: '#888', marginTop: '8px' }}>yash.raut@example.com</p>
        </div>
    );
}

function NotFound() {
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
            <h2 style={{ color: '#f5576c' }}>404 — Not Found</h2>
            <p style={{ color: '#888', marginTop: '8px' }}>The page you're looking for doesn't exist.</p>
        </div>
    );
}

function App() {
    const [route, setRoute] = useState('home');

    const pages = { home: <Home />, about: <About />, contact: <Contact /> };

    return (
        <div style={{
            background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🗺 React Router
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '20px' }}>
                Simulated client-side routing with state-based navigation.
            </p>

            {/* Navigation bar */}
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px',
                background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '4px' }}>
                <NavLink to="home" current={route} onClick={setRoute}>Home</NavLink>
                <NavLink to="about" current={route} onClick={setRoute}>About</NavLink>
                <NavLink to="contact" current={route} onClick={setRoute}>Contact</NavLink>
                <NavLink to="unknown" current={route} onClick={setRoute}>404</NavLink>
            </nav>

            {/* Page content */}
            {pages[route] || <NotFound />}

            <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: '12px', marginTop: '16px' }}>
                In production, use <code>react-router-dom</code> for real URL-based routing.
            </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
