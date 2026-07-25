/* Exercise 5 — Lists & Keys */

const { useState } = React;

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React basics', done: true },
        { id: 2, text: 'Understand JSX', done: true },
        { id: 3, text: 'Master Components & Props', done: false },
        { id: 4, text: 'Practice State management', done: false },
    ]);
    const [input, setInput] = useState('');
    let nextId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

    const addTodo = () => {
        if (!input.trim()) return;
        setTodos([...todos, { id: nextId++, text: input.trim(), done: false }]);
        setInput('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const cardStyle = {
        background: '#fff',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    };

    const itemStyle = (done) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: '10px',
        background: done ? '#f0fdf4' : '#fafafa',
        marginBottom: '8px',
        transition: 'all 0.2s',
    });

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#333', marginBottom: '16px', textAlign: 'center' }}>
                ✅ Todo List
            </h2>

            {/* Add new todo */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <input
                    style={{
                        flex: 1, padding: '12px 16px', border: '2px solid #e0e0e0',
                        borderRadius: '10px', fontSize: '15px', outline: 'none',
                    }}
                    placeholder="Add a new task…"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo} style={{
                    padding: '12px 20px', border: 'none', borderRadius: '10px',
                    background: '#43e97b', color: '#fff', fontWeight: '700',
                    fontSize: '18px', cursor: 'pointer',
                }}>+</button>
            </div>

            {/* Render list with unique keys */}
            {todos.length === 0 && (
                <p style={{ textAlign: 'center', color: '#aaa' }}>No tasks yet!</p>
            )}
            {todos.map(todo => (
                <div key={todo.id} style={itemStyle(todo.done)}>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <span style={{
                        flex: 1,
                        textDecoration: todo.done ? 'line-through' : 'none',
                        color: todo.done ? '#aaa' : '#333',
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => removeTodo(todo.id)} style={{
                        border: 'none', background: 'none', color: '#f5576c',
                        cursor: 'pointer', fontSize: '18px',
                    }}>✕</button>
                </div>
            ))}

            <p style={{ textAlign: 'center', marginTop: '16px', color: '#888', fontSize: '13px' }}>
                {todos.filter(t => t.done).length} / {todos.length} completed
            </p>
        </div>
    );
}

function App() {
    const wrapperStyle = {
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '32px',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                📋 Lists &amp; Keys
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Rendering dynamic lists with <code>.map()</code> and unique <code>key</code> props.
            </p>
            <TodoApp />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
