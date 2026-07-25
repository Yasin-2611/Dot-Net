/* Exercise 3 — State & Event Handling */

const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    const cardStyle = {
        background: '#fff',
        borderRadius: '16px',
        padding: '32px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        marginBottom: '20px',
    };

    const countStyle = {
        fontSize: '72px',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #f093fb, #f5576c)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '16px 0',
    };

    const btnStyle = (bg) => ({
        padding: '12px 28px',
        border: 'none',
        borderRadius: '12px',
        background: bg,
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        cursor: 'pointer',
        margin: '0 8px',
        transition: 'transform 0.15s',
    });

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#333' }}>🔢 Counter</h2>
            <div style={countStyle}>{count}</div>
            <div>
                <button style={btnStyle('#f5576c')} onClick={() => setCount(c => c - 1)}>− 1</button>
                <button style={btnStyle('#888')} onClick={() => setCount(0)}>Reset</button>
                <button style={btnStyle('#764ba2')} onClick={() => setCount(c => c + 1)}>+ 1</button>
            </div>
        </div>
    );
}

function ToggleMessage() {
    const [visible, setVisible] = useState(true);

    const cardStyle = {
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>👁 Toggle Message</h3>
            <button
                style={{
                    padding: '10px 24px',
                    border: 'none',
                    borderRadius: '10px',
                    background: visible ? '#f5576c' : '#764ba2',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '12px',
                }}
                onClick={() => setVisible(v => !v)}
            >
                {visible ? 'Hide' : 'Show'} Message
            </button>
            {visible && (
                <p style={{ color: '#555', fontSize: '14px', marginTop: '8px' }}>
                    ✨ This message is controlled by React state!
                </p>
            )}
        </div>
    );
}

function App() {
    const wrapperStyle = {
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '32px',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                ⚡ State &amp; Events
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Interactive components driven by <code>useState</code> and event handlers.
            </p>
            <Counter />
            <ToggleMessage />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
