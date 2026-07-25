/* Exercise 14 — useReducer Hook */

const { useReducer, useState } = React;

// --- Reducer ---
const initialState = {
    items: [],
    nextId: 1,
};

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, { id: state.nextId, name: action.payload, qty: 1 }],
                nextId: state.nextId + 1,
            };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(i => i.id !== action.payload) };
        case 'INCREMENT':
            return {
                ...state,
                items: state.items.map(i => i.id === action.payload ? { ...i, qty: i.qty + 1 } : i),
            };
        case 'DECREMENT':
            return {
                ...state,
                items: state.items.map(i =>
                    i.id === action.payload ? { ...i, qty: Math.max(1, i.qty - 1) } : i
                ),
            };
        case 'CLEAR':
            return initialState;
        default:
            return state;
    }
}

function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (!input.trim()) return;
        dispatch({ type: 'ADD_ITEM', payload: input.trim() });
        setInput('');
    };

    const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0);

    const cardStyle = {
        background: '#fff', borderRadius: '16px', padding: '28px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '16px' }}>
                🛒 Shopping Cart
            </h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <input value={input} onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addItem()}
                    placeholder="Add product…"
                    style={{ flex: 1, padding: '12px 16px', border: '2px solid #e0e0e0',
                        borderRadius: '10px', fontSize: '15px', outline: 'none' }} />
                <button onClick={addItem} style={{
                    padding: '12px 20px', border: 'none', borderRadius: '10px',
                    background: '#6a11cb', color: '#fff', fontWeight: '700', cursor: 'pointer',
                }}>Add</button>
            </div>

            {state.items.length === 0 && (
                <p style={{ textAlign: 'center', color: '#aaa' }}>Cart is empty</p>
            )}

            {state.items.map(item => (
                <div key={item.id} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 12px', borderRadius: '10px', background: '#f8f9fa',
                    marginBottom: '8px',
                }}>
                    <span style={{ flex: 1, color: '#333', fontWeight: '500' }}>{item.name}</span>
                    <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}
                        style={{ width: '30px', height: '30px', border: 'none', borderRadius: '8px',
                            background: '#e0e0e0', cursor: 'pointer', fontWeight: '700' }}>−</button>
                    <span style={{ fontWeight: '700', color: '#6a11cb', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                    <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
                        style={{ width: '30px', height: '30px', border: 'none', borderRadius: '8px',
                            background: '#e0e0e0', cursor: 'pointer', fontWeight: '700' }}>+</button>
                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                        style={{ border: 'none', background: 'none', color: '#f5576c',
                            cursor: 'pointer', fontSize: '18px' }}>✕</button>
                </div>
            ))}

            {state.items.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    <span style={{ color: '#888' }}>Total items: <strong style={{ color: '#6a11cb' }}>{totalItems}</strong></span>
                    <button onClick={() => dispatch({ type: 'CLEAR' })} style={{
                        padding: '8px 16px', border: 'none', borderRadius: '8px',
                        background: '#f5576c', color: '#fff', fontWeight: '600', cursor: 'pointer',
                    }}>Clear Cart</button>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🔄 useReducer Hook
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Complex state logic with actions and a reducer function.
            </p>
            <ShoppingCart />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
