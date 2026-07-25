/* Exercise 16 — useRef & DOM Manipulation */

const { useRef, useState, useEffect } = React;

function FocusInput() {
    const inputRef = useRef(null);

    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px',
        }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>🎯 Auto-Focus Input</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
                <input ref={inputRef} placeholder="Click the button to focus me"
                    style={{
                        flex: 1, padding: '12px 16px', border: '2px solid #e0e0e0',
                        borderRadius: '10px', fontSize: '15px', outline: 'none',
                    }} />
                <button onClick={() => inputRef.current.focus()} style={{
                    padding: '12px 20px', border: 'none', borderRadius: '10px',
                    background: '#f12711', color: '#fff', fontWeight: '700', cursor: 'pointer',
                }}>Focus</button>
            </div>
        </div>
    );
}

function RenderCounter() {
    const renderCount = useRef(0);
    const [text, setText] = useState('');

    // useRef value persists across renders without causing re-renders
    renderCount.current += 1;

    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px',
        }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>🔄 Render Counter</h3>
            <input value={text} onChange={e => setText(e.target.value)}
                placeholder="Type to trigger re-renders"
                style={{
                    width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0',
                    borderRadius: '10px', fontSize: '15px', outline: 'none', marginBottom: '8px',
                }} />
            <p style={{ color: '#888' }}>
                This component has rendered <strong style={{ color: '#f5af19' }}>{renderCount.current}</strong> times.
            </p>
            <p style={{ color: '#aaa', fontSize: '12px' }}>
                <code>useRef</code> tracks this without causing extra renders.
            </p>
        </div>
    );
}

function PreviousValue() {
    const [value, setValue] = useState('');
    const prevRef = useRef('');

    useEffect(() => {
        prevRef.current = value;
    }, [value]);

    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>⏮ Previous Value</h3>
            <input value={value} onChange={e => setValue(e.target.value)}
                placeholder="Type something…"
                style={{
                    width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0',
                    borderRadius: '10px', fontSize: '15px', outline: 'none', marginBottom: '8px',
                }} />
            <p style={{ color: '#555' }}>
                Current: <strong>{value || '(empty)'}</strong>
            </p>
            <p style={{ color: '#888' }}>
                Previous: <strong>{prevRef.current || '(empty)'}</strong>
            </p>
        </div>
    );
}

function App() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                📌 useRef &amp; DOM
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Accessing DOM nodes and persisting values without re-renders.
            </p>
            <FocusInput />
            <RenderCounter />
            <PreviousValue />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
