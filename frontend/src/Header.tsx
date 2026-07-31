import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    return (
        <header style={styles.header}>
            <span style={styles.title}>Cardápio Digital</span>
            <nav style={styles.nav}>
                <button style={styles.link} onClick={() => navigate('/produtos')}>Produtos</button>
                <button style={styles.link} onClick={() => navigate('/mesa')}>Mesas</button>
            </nav>
        </header>
    );
}

const styles: Record<string, React.CSSProperties> = {
    header: {
        backgroundColor: '#1e40af',
        color: '#fff',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: '22px',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    nav: {
        display: 'flex',
        gap: '8px',
    },
    link: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(255,255,255,0.5)',
        color: '#fff',
        padding: '6px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: '500',
    },
};

