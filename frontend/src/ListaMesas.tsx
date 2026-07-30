import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

type MesaStatus = "disponivel" | "ocupada" | "reservada";

interface Mesa {
    id: number;
    numero: number;
    capacidade: number;
    status: MesaStatus;
}

const statusColor: Record<MesaStatus, string> = {
    disponivel: "#2e7d32",
    ocupada: "#c62828",
    reservada: "#f57c00",
};

const statusLabel: Record<MesaStatus, string> = {
    disponivel: "Disponível",
    ocupada: "Ocupada",
    reservada: "Reservada",
};

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
    },
    header: {
        backgroundColor: "#1e40af",
        color: "#fff",
        padding: "16px 32px",
        fontSize: "22px",
        fontWeight: "bold",
        letterSpacing: "1px",
    },
    main: {
        flex: 1,
        padding: "32px",
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
    },
    titulo: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "24px",
        color: "#111",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
    },
    cardBase: {
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
    },
    cardHover: {
        transform: "translateY(-6px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    },
    cardTitulo: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#111",
    },
    cardInfo: {
        fontSize: "14px",
        color: "#555",
    },
    badge: {
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#fff",
        width: "fit-content",
    },
    select: {
        padding: "6px 8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "13px",
        cursor: "pointer",
        width: "100%",
    },
    btnAlterar: {
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #4f46e5",
        backgroundColor: "#eef2ff",
        color: "#4f46e5",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "bold",
        width: "100%",
    },
    btnDeletar: {
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #e11d48",
        backgroundColor: "#fff1f2",
        color: "#e11d48",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "bold",
        width: "100%",
    },
    acoes: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "8px",
    },
    erro: {
        color: "#c62828",
        marginBottom: "16px",
    },
    footer: {
        backgroundColor: "#1e40af",
        color: "#aaa",
        textAlign: "center",
        padding: "16px",
        fontSize: "13px",
    },
};

export function ListarMesas() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [erro, setErro] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setErro(false);
        fetch('/api/mesa')
            .then(r => {
                if (!r.ok) throw new Error();
                return r.json();
            })
            .then(setMesas)
            .catch(() => setErro(true));
    }, []);

    async function deletarMesa(id: number) {
        await fetch(`/api/mesa/${id}`, { method: 'DELETE' });
        setMesas(prev => prev.filter(m => m.id !== id));
    }

    
    return (
        <div style={styles.page}>
            <Header />

            <main style={styles.main}>
                <h1 style={styles.titulo}>Mesas</h1>

                {erro && <p style={styles.erro}>Erro ao carregar mesas.</p>}

                <div style={styles.grid}>
                    {mesas.map(mesa => (
                        <div
                            key={mesa.id}
                            style={{
                                ...styles.cardBase,
                                ...(hoveredId === mesa.id ? styles.cardHover : {}),
                            }}
                            onMouseEnter={() => setHoveredId(mesa.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <span style={styles.cardTitulo}>Mesa {mesa.numero}</span>
                            <span style={styles.cardInfo}>Capacidade: {mesa.capacidade} pessoas</span>
                            <span style={{ ...styles.badge, backgroundColor: statusColor[mesa.status] }}>
                                {statusLabel[mesa.status]}
                            </span>

                            <div style={styles.acoes}>
                                <button style={styles.btnAlterar} onClick={() => navigate(`/mesa/${mesa.id}/editar`)}>
                                    Alterar
                                </button>

                                <button style={styles.btnDeletar} onClick={() => deletarMesa(mesa.id)}>
                                    Deletar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer style={styles.footer}>© 2026 Cardápio Digital</footer>
        </div>
    );
}
