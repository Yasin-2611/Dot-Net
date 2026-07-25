/* Exercise 12 — Error Boundaries */

const { useState } = React;

// --- Error Boundary (must be a class component) ---
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    background: '#fff0f0', borderRadius: '16px', padding: '24px',
                    border: '2px solid #f5576c', textAlign: 'center', marginBottom: '16px',
                }}>
                    <div style={{ fontSize: '40px', marginBottom: '8px' }}>💥</div>
                    <h3 style={{ color: '#f5576c' }}>Something went wrong</h3>
                    <p style={{ color: '#888', fontSize: '14px', marginTop: '8px' }}>
                        {this.state.error?.message || 'Unknown error'}
                    </p>
                    <button onClick={() => this.setState({ hasError: false, error: null })} style={{
                        marginTop: '12px', padding: '10px 24px', border: 'none',
                        borderRadius: '10px', background: '#f5576c', color: '#fff',
                        fontWeight: '600', cursor: 'pointer',
                    }}>
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

// --- Component that may throw ---
function BuggyCounter() {
    const [count, setCount] = useState(0);

    if (count === 3) {
        throw new Error('Counter reached 3 — simulated crash!');
    }

    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
            marginBottom: '16px',
        }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>🐛 Buggy Counter</h3>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '12px' }}>
                Crashes when count reaches 3
            </p>
            <div style={{ fontSize: '48px', fontWeight: '800', color: '#f6d365', margin: '12px 0' }}>
                {count}
            </div>
            <button onClick={() => setCount(c => c + 1)} style={{
                padding: '10px 24px', border: 'none', borderRadius: '10px',
                background: '#fda085', color: '#fff', fontWeight: '600',
                cursor: 'pointer', fontSize: '16px',
            }}>
                Increment
            </button>
        </div>
    );
}

function SafeWidget() {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
        }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>✅ Safe Widget</h3>
            <p style={{ color: '#888' }}>This component won't crash. It stays rendered even if the counter above crashes.</p>
        </div>
    );
}

function App() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🛡 Error Boundaries
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Catch render errors gracefully instead of crashing the whole app.
            </p>

            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>

            <SafeWidget />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
