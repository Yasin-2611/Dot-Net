/* Exercise 2 — Components & Props */

// --- Functional component receiving props ---
function UserCard({ name, role, avatar }) {
    const cardStyle = {
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        margin: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        flex: '1 1 200px',
        maxWidth: '250px',
    };

    const avatarStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${avatar.color1}, ${avatar.color2})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        fontSize: '32px',
        color: '#fff',
        fontWeight: 'bold',
    };

    return (
        <div style={cardStyle}>
            <div style={avatarStyle}>{name.charAt(0)}</div>
            <h3 style={{ color: '#333', marginBottom: '4px' }}>{name}</h3>
            <p style={{ color: '#888', fontSize: '14px' }}>{role}</p>
        </div>
    );
}

// --- Reusable Badge component ---
function Badge({ text, color }) {
    const style = {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '20px',
        background: color,
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600',
        margin: '4px',
    };
    return <span style={style}>{text}</span>;
}

// --- Team component that composes UserCards ---
function Team({ members }) {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px',
    };

    return (
        <div style={containerStyle}>
            {members.map((m, i) => (
                <UserCard key={i} name={m.name} role={m.role} avatar={m.avatar} />
            ))}
        </div>
    );
}

// --- Main App ---
function App() {
    const teamMembers = [
        { name: 'Alice', role: 'Frontend Developer', avatar: { color1: '#667eea', color2: '#764ba2' } },
        { name: 'Bob', role: 'Backend Engineer', avatar: { color1: '#f093fb', color2: '#f5576c' } },
        { name: 'Charlie', role: 'DevOps Lead', avatar: { color1: '#4facfe', color2: '#00f2fe' } },
        { name: 'Diana', role: 'UI/UX Designer', avatar: { color1: '#43e97b', color2: '#38f9d7' } },
    ];

    const wrapperStyle = {
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '32px',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🧩 Components &amp; Props
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Each card is a reusable <code>&lt;UserCard /&gt;</code> receiving data via props.
            </p>

            <Team members={teamMembers} />

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Badge text="React 18" color="#61dafb" />
                <Badge text="Functional" color="#764ba2" />
                <Badge text="Props" color="#f5576c" />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
