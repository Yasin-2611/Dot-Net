/* Exercise 4 — Conditional Rendering */

const { useState } = React;

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const cardStyle = {
        background: '#fff',
        borderRadius: '16px',
        padding: '32px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        marginBottom: '20px',
    };

    const inputStyle = {
        padding: '12px 16px',
        border: '2px solid #e0e0e0',
        borderRadius: '10px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '280px',
        marginBottom: '12px',
        outline: 'none',
    };

    const btnStyle = (bg) => ({
        padding: '12px 28px',
        border: 'none',
        borderRadius: '12px',
        background: bg,
        color: '#fff',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
    });

    if (isLoggedIn) {
        return (
            <div style={cardStyle}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>👋</div>
                <h2 style={{ color: '#333' }}>Welcome, {username || 'User'}!</h2>
                <p style={{ color: '#888', margin: '12px 0' }}>You are now logged in.</p>
                <button style={btnStyle('#f5576c')} onClick={() => setIsLoggedIn(false)}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div style={cardStyle}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔐</div>
            <h2 style={{ color: '#333', marginBottom: '16px' }}>Please Log In</h2>
            <input
                style={inputStyle}
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <button
                style={btnStyle(username.trim() ? '#4facfe' : '#ccc')}
                onClick={() => username.trim() && setIsLoggedIn(true)}
            >
                Login
            </button>
        </div>
    );
}

function StatusBadge({ status }) {
    const colors = { online: '#43e97b', offline: '#ccc', busy: '#f5576c' };
    const style = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '20px',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        margin: '4px',
    };
    const dot = {
        width: '10px', height: '10px', borderRadius: '50%',
        background: colors[status] || '#ccc',
    };
    return (
        <span style={style}>
            <span style={dot}></span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
}

function App() {
    const [status, setStatus] = useState('online');

    const wrapperStyle = {
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '32px',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🔀 Conditional Rendering
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Different UI based on component state.
            </p>
            <LoginControl />
            <div style={{
                background: '#fff', borderRadius: '16px', padding: '24px',
                textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}>
                <h3 style={{ color: '#333', marginBottom: '12px' }}>Status Selector</h3>
                <div style={{ marginBottom: '12px' }}>
                    {['online', 'busy', 'offline'].map(s => (
                        <button key={s} onClick={() => setStatus(s)} style={{
                            padding: '8px 16px', margin: '4px', border: 'none',
                            borderRadius: '8px', cursor: 'pointer',
                            background: status === s ? '#4facfe' : '#f0f0f0',
                            color: status === s ? '#fff' : '#555',
                            fontWeight: '600',
                        }}>
                            {s}
                        </button>
                    ))}
                </div>
                <StatusBadge status={status} />
                {status === 'busy' && (
                    <p style={{ color: '#f5576c', fontSize: '13px', marginTop: '8px' }}>
                        ⚠ Do not disturb
                    </p>
                )}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
