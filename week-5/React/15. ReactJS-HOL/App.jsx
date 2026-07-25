/* Exercise 15 — React Portals */

const { useState } = React;

// --- Modal rendered via Portal ---
function Modal({ title, children, onClose }) {
    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)', animation: 'fadeIn 0.2s ease',
        }} onClick={onClose}>
            <div onClick={e => e.stopPropagation()} style={{
                background: '#fff', borderRadius: '20px', padding: '32px',
                maxWidth: '420px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                transform: 'translateY(0)', animation: 'slideUp 0.3s ease',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ color: '#333', margin: 0 }}>{title}</h2>
                    <button onClick={onClose} style={{
                        border: 'none', background: '#f0f0f0', borderRadius: '50%',
                        width: '32px', height: '32px', fontSize: '16px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>✕</button>
                </div>
                <div style={{ color: '#555', lineHeight: '1.6' }}>{children}</div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

// --- Tooltip via Portal ---
function Tooltip({ text, children }) {
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
        setShow(true);
    };

    return (
        <>
            <span onMouseEnter={handleEnter} onMouseLeave={() => setShow(false)}
                style={{ cursor: 'help', borderBottom: '2px dotted #764ba2' }}>
                {children}
            </span>
            {show && ReactDOM.createPortal(
                <div style={{
                    position: 'fixed', left: pos.x, top: pos.y, transform: 'translate(-50%, -100%)',
                    background: '#333', color: '#fff', padding: '6px 12px', borderRadius: '8px',
                    fontSize: '13px', whiteSpace: 'nowrap', pointerEvents: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}>
                    {text}
                </div>,
                document.getElementById('modal-root')
            )}
        </>
    );
}

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div style={{
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
            borderRadius: '20px', padding: '32px',
        }}>
            <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                🌀 React Portals
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
                Rendering children into a different DOM node via <code>createPortal</code>.
            </p>

            <div style={{
                background: '#fff', borderRadius: '16px', padding: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center', marginBottom: '16px',
            }}>
                <h3 style={{ color: '#333', marginBottom: '12px' }}>Modal Demo</h3>
                <button onClick={() => setModalOpen(true)} style={{
                    padding: '12px 28px', border: 'none', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)', color: '#333',
                    fontWeight: '700', fontSize: '15px', cursor: 'pointer',
                }}>Open Modal</button>
            </div>

            <div style={{
                background: '#fff', borderRadius: '16px', padding: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden',
            }}>
                <h3 style={{ color: '#333', marginBottom: '8px' }}>Tooltip Demo</h3>
                <p style={{ color: '#555', lineHeight: '1.8' }}>
                    Hover over{' '}
                    <Tooltip text="Rendered outside #root via a Portal!">this text</Tooltip>
                    {' '}to see a tooltip rendered via portal. The tooltip escapes
                    any <code>overflow: hidden</code> container.
                </p>
            </div>

            {modalOpen && (
                <Modal title="Portal Modal" onClose={() => setModalOpen(false)}>
                    <p>This modal is rendered into <code>#modal-root</code> — a sibling of
                    <code>#root</code> — yet it still bubbles React events normally.</p>
                    <p style={{ marginTop: '12px' }}>
                        Portals are perfect for modals, tooltips, and dropdowns that need to
                        visually "break out" of their parent's overflow or stacking context.
                    </p>
                </Modal>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
