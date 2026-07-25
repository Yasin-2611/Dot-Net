/* Exercise 7 — React Lifecycle & useEffect */

const { useState, useEffect } = React;

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;
        const id = setInterval(() => setSeconds(s => s + 1), 1000);
        // Cleanup function runs when component unmounts or deps change
        return () => clearInterval(id);
    }, [running]);

    const cardStyle = {
        background: '#fff', borderRadius: '16px', padding: '28px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)', textAlign: 'center',
        marginBottom: '20px',
    };

    const timeStr = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#333', marginBottom: '8px' }}>⏱ Stopwatch</h2>
            <div style={{
                fontSize: '56px', fontWeight: '800', fontFamily: 'monospace',
                color: running ? '#fa709a' : '#555', margin: '16px 0',
            }}>
                {timeStr}
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <button onClick={() => setRunning(r => !r)} style={{
                    padding: '12px 28px', border: 'none', borderRadius: '12px',
                    background: running ? '#f5576c' : '#43e97b', color: '#fff',
                    fontWeight: '700', fontSize: '15px', cursor: 'pointer',
                }}>
                    {running ? 'Pause' : 'Start'}
                </button>
                <button onClick={() => { setRunning(false); setSeconds(0); }} style={{
                    padding: '12px 28px', border: 'none', borderRadius: '12px',
                    background: '#888', color: '#fff', fontWeight: '700',
                    fontSize: '15px', cursor: 'pointer',
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

function WindowSize() {
    const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center',
        }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>📐 Window Size (live)</h3>
            <p style={{ fontSize: '20px', color: '#fa709a', fontWeight: '700' }}>
                {size.w} × {size.h}
            </p>
            <p style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>Resize the browser to see this update</p>
        </div>
    );
}

function App() {
    const wrapperStyle = {
        background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
        borderRadius: '20px', padding: '32px',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🔄 Lifecycle &amp; useEffect
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Side effects: timers, event listeners, and cleanup.
            </p>
            <Timer />
            <WindowSize />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
