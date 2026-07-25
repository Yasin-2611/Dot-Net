/* Exercise 13 — React.memo & useMemo */

const { useState, useMemo, useCallback } = React;

// --- Memoised child: only re-renders when its props change ---
const ExpensiveList = React.memo(function ExpensiveList({ items, highlight }) {
    console.log('ExpensiveList rendered');
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px',
        }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>📦 Memoised List ({items.length} items)</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, i) => (
                    <li key={i} style={{
                        padding: '8px 12px', borderRadius: '8px', marginBottom: '4px',
                        background: item.includes(highlight) ? '#eef2ff' : '#fafafa',
                        fontWeight: item.includes(highlight) ? '700' : '400',
                        color: '#333',
                    }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

function App() {
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');

    const allItems = [
        'React Fundamentals', 'Component Lifecycle', 'State Management',
        'React Hooks Deep Dive', 'Performance Optimisation', 'Server Components',
        'React Testing Library', 'TypeScript with React',
    ];

    // useMemo: expensive filter only recalculated when search changes
    const filtered = useMemo(() => {
        console.log('Filtering items…');
        return allItems.filter(item =>
            item.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div style={{
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                ⚡ React.memo &amp; useMemo
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Avoid unnecessary re-renders and recomputations.
            </p>

            {/* Unrelated counter — incrementing it should NOT re-render ExpensiveList */}
            <div style={{
                background: '#fff', borderRadius: '16px', padding: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
                marginBottom: '16px',
            }}>
                <h3 style={{ color: '#333', marginBottom: '8px' }}>Unrelated Counter: {count}</h3>
                <button onClick={() => setCount(c => c + 1)} style={{
                    padding: '10px 24px', border: 'none', borderRadius: '10px',
                    background: '#764ba2', color: '#fff', fontWeight: '600', cursor: 'pointer',
                }}>
                    Increment (check console)
                </button>
                <p style={{ color: '#aaa', fontSize: '12px', marginTop: '6px' }}>
                    Clicking this should NOT log "ExpensiveList rendered".
                </p>
            </div>

            {/* Search input drives useMemo */}
            <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search items (useMemo filters)…"
                style={{
                    width: '100%', padding: '12px 16px', border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px', fontSize: '15px', outline: 'none',
                    background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '16px',
                }} />

            <ExpensiveList items={filtered} highlight={search} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
