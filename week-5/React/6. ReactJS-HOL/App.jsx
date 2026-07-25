/* Exercise 6 — Forms & Controlled Components */

const { useState } = React;

function RegistrationForm() {
    const [form, setForm] = useState({ name: '', email: '', role: 'developer', agree: false });
    const [submitted, setSubmitted] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email format';
        if (!form.agree) errs.agree = 'You must agree to the terms';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted({ ...form });
        setForm({ name: '', email: '', role: 'developer', agree: false });
    };

    const cardStyle = {
        background: '#fff', borderRadius: '16px', padding: '28px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    };

    const inputStyle = (err) => ({
        width: '100%', padding: '12px 16px',
        border: `2px solid ${err ? '#f5576c' : '#e0e0e0'}`,
        borderRadius: '10px', fontSize: '15px', outline: 'none', marginBottom: '4px',
    });

    const labelStyle = { display: 'block', fontWeight: '600', color: '#555', marginBottom: '6px', marginTop: '12px' };
    const errStyle = { color: '#f5576c', fontSize: '12px', marginBottom: '4px' };

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>📝 Registration</h2>

            {submitted && (
                <div style={{ background: '#f0fdf4', borderRadius: '10px', padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
                    <strong style={{ color: '#22c55e' }}>✓ Submitted!</strong>
                    <p style={{ color: '#555', marginTop: '4px' }}>
                        {submitted.name} — {submitted.email} — {submitted.role}
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>Name</label>
                <input style={inputStyle(errors.name)} name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                {errors.name && <p style={errStyle}>{errors.name}</p>}

                <label style={labelStyle}>Email</label>
                <input style={inputStyle(errors.email)} name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                {errors.email && <p style={errStyle}>{errors.email}</p>}

                <label style={labelStyle}>Role</label>
                <select name="role" value={form.role} onChange={handleChange} style={{ ...inputStyle(false), cursor: 'pointer' }}>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                </select>

                <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                    I agree to the terms
                </label>
                {errors.agree && <p style={errStyle}>{errors.agree}</p>}

                <button type="submit" style={{
                    width: '100%', padding: '14px', border: 'none', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
                    color: '#fff', fontSize: '16px', fontWeight: '700', cursor: 'pointer', marginTop: '16px',
                }}>
                    Register
                </button>
            </form>
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
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>📋 Forms &amp; Controlled Components</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                React state as the single source of truth for all form inputs.
            </p>
            <RegistrationForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
