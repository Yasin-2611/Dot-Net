/* Exercise 11 — Higher-Order Components (HOC) */

const { useState, useEffect } = React;

// --- HOC: withLoading ---
function withLoading(WrappedComponent) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <div style={{
                    background: '#fff', borderRadius: '16px', padding: '32px',
                    textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    marginBottom: '16px',
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>⏳</div>
                    <p style={{ color: '#888' }}>Loading…</p>
                </div>
            );
        }
        return <WrappedComponent {...props} />;
    };
}

// --- HOC: withBorder ---
function withBorder(WrappedComponent, color = '#764ba2') {
    return function WithBorderComponent(props) {
        return (
            <div style={{ border: `3px solid ${color}`, borderRadius: '18px', padding: '4px', marginBottom: '16px' }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}

// --- Base Components ---
function UserList({ users }) {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>👥 Users</h3>
            {users.map((u, i) => (
                <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px', borderRadius: '8px', background: '#f8f9fa', marginBottom: '6px',
                }}>
                    <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: `hsl(${i * 60}, 70%, 65%)`, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700',
                    }}>{u.charAt(0)}</div>
                    <span style={{ color: '#333' }}>{u}</span>
                </div>
            ))}
        </div>
    );
}

function Greeting({ name }) {
    return (
        <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center',
        }}>
            <h3 style={{ color: '#333' }}>Hello, {name}! 🎉</h3>
        </div>
    );
}

// --- Enhanced components ---
const UserListWithLoading = withLoading(UserList);
const GreetingWithBorder = withBorder(Greeting, '#f5576c');

function App() {
    const [loading, setLoading] = useState(true);
    const users = ['Alice', 'Bob', 'Charlie', 'Diana'];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🏗 Higher-Order Components
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Wrapping components with HOCs to add loading states and styling.
            </p>

            <UserListWithLoading isLoading={loading} users={users} />
            <GreetingWithBorder name="Yash" />

            <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '12px', marginTop: '12px' }}>
                The user list shows a loading spinner for 2 seconds (simulated fetch).
            </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
