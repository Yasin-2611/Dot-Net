/* Exercise 10 — Custom Hooks */

const { useState, useEffect } = React;

// --- Custom Hook: useLocalStorage ---
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved !== null ? JSON.parse(saved) : initialValue;
        } catch { return initialValue; }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// --- Custom Hook: useToggle ---
function useToggle(initial = false) {
    const [on, setOn] = useState(initial);
    const toggle = () => setOn(o => !o);
    return [on, toggle];
}

// --- Custom Hook: useCounter ---
function useCounter(initial = 0, step = 1) {
    const [count, setCount] = useState(initial);
    return {
        count,
        increment: () => setCount(c => c + step),
        decrement: () => setCount(c => c - step),
        reset: () => setCount(initial),
    };
}

// --- Demo components using the hooks ---

function PersistentNotes() {
    const [notes, setNotes] = useLocalStorage('react-notes', '');
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>📝 useLocalStorage</h3>
            <textarea value={notes} onChange={e => setNotes(e.target.value)}
                placeholder="Type notes… they persist across reloads!"
                style={{ width: '100%', height: '80px', padding: '12px', borderRadius: '10px',
                    border: '2px solid #e0e0e0', fontSize: '14px', resize: 'vertical', outline: 'none' }} />
            <p style={{ color: '#aaa', fontSize: '12px', marginTop: '4px' }}>
                Data saved to localStorage under key "react-notes"
            </p>
        </div>
    );
}

function ToggleDemo() {
    const [darkMode, toggleDark] = useToggle(false);
    return (
        <div style={{
            background: darkMode ? '#1a1a2e' : '#fff', color: darkMode ? '#e0e0e0' : '#333',
            borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px',
            transition: 'all 0.3s',
        }}>
            <h3 style={{ marginBottom: '8px' }}>🔀 useToggle</h3>
            <button onClick={toggleDark} style={{
                padding: '10px 24px', border: 'none', borderRadius: '10px',
                background: darkMode ? '#e94560' : '#764ba2', color: '#fff',
                fontWeight: '600', cursor: 'pointer',
            }}>
                {darkMode ? '☀ Light' : '🌙 Dark'}
            </button>
        </div>
    );
}

function CounterDemo() {
    const { count, increment, decrement, reset } = useCounter(0, 5);
    return (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>🔢 useCounter (step=5)</h3>
            <div style={{ fontSize: '40px', fontWeight: '800', color: '#764ba2', margin: '12px 0' }}>{count}</div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <button onClick={decrement} style={{ padding: '8px 20px', border: 'none', borderRadius: '8px', background: '#f5576c', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>−5</button>
                <button onClick={reset} style={{ padding: '8px 20px', border: 'none', borderRadius: '8px', background: '#888', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Reset</button>
                <button onClick={increment} style={{ padding: '8px 20px', border: 'none', borderRadius: '8px', background: '#43e97b', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>+5</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '8px' }}>🪝 Custom Hooks</h1>
            <p style={{ color: '#555', textAlign: 'center', marginBottom: '24px' }}>
                Reusable stateful logic extracted into custom hooks.
            </p>
            <PersistentNotes />
            <ToggleDemo />
            <CounterDemo />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
