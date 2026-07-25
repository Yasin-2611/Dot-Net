/* Exercise 17 — React Suspense & Lazy Loading (simulated) */

const { useState, useEffect, Suspense } = React;

/*
 * React.lazy() + Suspense requires a bundler (Webpack / Vite) for dynamic
 * import(). Since we're running via CDN, we SIMULATE the pattern:
 * - A wrapper that delays rendering to mimic code-splitting.
 * - <Suspense fallback={...}> wrapping the "lazy" component.
 */

// --- Simulated lazy component loader ---
function useLazyComponent(factory, delay = 1500) {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setComponent(() => factory());
        }, delay);
        return () => clearTimeout(timer);
    }, []);
    return Component;
}

// --- "Heavy" components that would be lazily loaded in production ---
function Dashboard() {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '28px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
            <h2 style={{ color: '#333', marginBottom: '12px' }}>📊 Dashboard</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                    { label: 'Users', value: '1,234', color: '#11998e' },
                    { label: 'Revenue', value: '$56.7K', color: '#38ef7d' },
                    { label: 'Orders', value: '892', color: '#667eea' },
                    { label: 'Growth', value: '+12%', color: '#f5576c' },
                ].map((stat, i) => (
                    <div key={i} style={{
                        background: '#f8f9fa', borderRadius: '12px', padding: '16px',
                        textAlign: 'center',
                    }}>
                        <p style={{ color: '#888', fontSize: '13px' }}>{stat.label}</p>
                        <p style={{ color: stat.color, fontSize: '24px', fontWeight: '800' }}>{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Settings() {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '28px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
            <h2 style={{ color: '#333', marginBottom: '12px' }}>⚙️ Settings</h2>
            {['Notifications', 'Privacy', 'Theme', 'Language'].map((item, i) => (
                <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none',
                }}>
                    <span style={{ color: '#555' }}>{item}</span>
                    <span style={{ color: '#aaa' }}>→</span>
                </div>
            ))}
        </div>
    );
}

// --- Loading fallback ---
function LoadingFallback({ text }) {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
        }}>
            <div style={{ fontSize: '36px', marginBottom: '12px', animation: 'spin 1s linear infinite' }}>⏳</div>
            <p style={{ color: '#888' }}>{text || 'Loading component…'}</p>
        </div>
    );
}

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const LazyDashboard = useLazyComponent(() => Dashboard, 2000);
    const LazySettings = useLazyComponent(() => Settings, 3000);

    const tabStyle = (tab) => ({
        padding: '10px 24px', border: 'none', borderRadius: '10px',
        background: activeTab === tab ? '#11998e' : 'transparent',
        color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.7)',
        fontWeight: '600', fontSize: '15px', cursor: 'pointer',
    });

    const ActiveComponent = activeTab === 'dashboard' ? LazyDashboard : LazySettings;

    return (
        <div style={{
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                ⏳ Suspense &amp; Lazy Loading
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '20px' }}>
                Simulated code-splitting with loading fallbacks.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px',
                background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '4px' }}>
                <button style={tabStyle('dashboard')} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
                <button style={tabStyle('settings')} onClick={() => setActiveTab('settings')}>Settings</button>
            </div>

            {ActiveComponent ? <ActiveComponent /> : <LoadingFallback text={`Loading ${activeTab}…`} />}

            <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: '12px', marginTop: '16px' }}>
                In production: <code>const Comp = React.lazy(() =&gt; import('./Comp'));</code>
            </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
