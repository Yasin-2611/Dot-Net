/* Exercise 8 — Context API */

const { useState, useContext, createContext } = React;

// --- Create Theme Context ---
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    const toggle = () => setDark(d => !d);
    const theme = {
        dark,
        toggle,
        bg: dark ? '#1a1a2e' : '#ffffff',
        card: dark ? '#16213e' : '#f8f9fa',
        text: dark ? '#e0e0e0' : '#333333',
        accent: dark ? '#e94560' : '#764ba2',
    };
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

function useTheme() {
    return useContext(ThemeContext);
}

// --- Deeply nested child — accesses context without prop drilling ---
function ThemedCard({ title, children }) {
    const theme = useTheme();
    return (
        <div style={{
            background: theme.card, borderRadius: '16px', padding: '24px',
            boxShadow: `0 4px 20px rgba(0,0,0,${theme.dark ? 0.3 : 0.08})`,
            marginBottom: '16px', transition: 'all 0.3s',
        }}>
            <h3 style={{ color: theme.accent, marginBottom: '8px' }}>{title}</h3>
            <div style={{ color: theme.text }}>{children}</div>
        </div>
    );
}

function ThemeToggle() {
    const theme = useTheme();
    return (
        <button onClick={theme.toggle} style={{
            padding: '12px 28px', border: 'none', borderRadius: '12px',
            background: theme.accent, color: '#fff', fontWeight: '700',
            fontSize: '15px', cursor: 'pointer', marginBottom: '20px',
        }}>
            {theme.dark ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

function AppContent() {
    const theme = useTheme();

    React.useEffect(() => {
        document.body.style.background = theme.dark
            ? 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, [theme.dark]);

    return (
        <div style={{
            background: `${theme.bg}22`, backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px', transition: 'all 0.3s',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🎨 Context API
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Global theme state via <code>createContext</code> + <code>useContext</code>.
            </p>
            <div style={{ textAlign: 'center' }}>
                <ThemeToggle />
            </div>
            <ThemedCard title="What is Context?">
                Context provides a way to pass data through the component tree without
                having to pass props down manually at every level.
            </ThemedCard>
            <ThemedCard title="When to use it?">
                Use Context for "global" data like themes, locale, or the authenticated
                user — data many components need at different nesting levels.
            </ThemedCard>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
