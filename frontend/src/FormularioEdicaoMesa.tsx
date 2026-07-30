import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './Header';

type MesaStatus = "disponivel" | "ocupada" | "reservada";

interface FormData {
    numero: string;
    capacidade: string;
    status: MesaStatus;
}

interface FormErrors {
    numero?: string;
    capacidade?: string;
}

export function FormularioEdicaoMesa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState<FormData>({ numero: '', capacidade: '', status: 'disponivel' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`/api/mesa`)
            .then(r => r.json())
            .then((mesas: { id: number; numero: number; capacidade: number; status: MesaStatus }[]) => {
                const mesa = mesas.find(m => m.id === Number(id));
                if (mesa) {
                    setForm({
                        numero: String(mesa.numero),
                        capacidade: String(mesa.capacidade),
                        status: mesa.status,
                    });
                }
            });
    }, [id]);

    function validate(): boolean {
        const next: FormErrors = {};
        const numero = parseInt(form.numero);
        const capacidade = parseInt(form.capacidade);

        if (!form.numero) next.numero = 'Número é obrigatório';
        else if (!Number.isInteger(numero) || numero <= 0) next.numero = 'Deve ser um inteiro positivo';

        if (!form.capacidade) next.capacidade = 'Capacidade é obrigatória';
        else if (!Number.isInteger(capacidade) || capacidade <= 0) next.capacidade = 'Deve ser um inteiro positivo';

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErro('');
        setSucesso(false);

        if (!validate()) return;

        try {
            const r = await fetch(`/api/mesa/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    numero: parseInt(form.numero),
                    capacidade: parseInt(form.capacidade),
                    status: form.status,
                }),
            });

            if (!r.ok) {
                setErro('Erro ao atualizar mesa.');
                return;
            }

            setSucesso(true);
            setTimeout(() => navigate('/mesa'), 1000);
        } catch {
            setErro('Erro ao conectar. Tente novamente.');
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    return (
        <div style={styles.page}>
            <Header />

            <main style={styles.main}>
                <div style={styles.card}>
                    <h2 style={styles.title}>Editar Mesa</h2>

                    {sucesso && <p style={styles.sucesso}>Mesa atualizada! Redirecionando...</p>}
                    {erro && <p style={styles.erro}>{erro}</p>}

                    <form onSubmit={handleSubmit} style={styles.form} noValidate>
                        <div style={styles.field}>
                            <label style={styles.label}>
                                Número <span style={styles.required}>*</span>
                            </label>
                            <input
                                style={{ ...styles.input, ...(errors.numero ? styles.inputError : {}) }}
                                name="numero"
                                value={form.numero}
                                onChange={handleChange}
                                inputMode="numeric"
                                placeholder="Ex: 1"
                            />
                            {errors.numero && <span style={styles.error}>{errors.numero}</span>}
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>
                                Capacidade <span style={styles.required}>*</span>
                            </label>
                            <input
                                style={{ ...styles.input, ...(errors.capacidade ? styles.inputError : {}) }}
                                name="capacidade"
                                value={form.capacidade}
                                onChange={handleChange}
                                inputMode="numeric"
                                placeholder="Ex: 4"
                            />
                            {errors.capacidade && <span style={styles.error}>{errors.capacidade}</span>}
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Status</label>
                            <select
                                style={styles.select}
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="disponivel">Disponível</option>
                                <option value="ocupada">Ocupada</option>
                                <option value="reservada">Reservada</option>
                            </select>
                        </div>

                        <div style={styles.acoes}>
                            <button type="button" style={styles.btnVoltar} onClick={() => navigate('/mesa')}>
                                Voltar
                            </button>
                            <button type="submit" style={styles.btnSalvar}>
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer style={styles.footer}>© 2026 Cardápio Digital</footer>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        fontFamily: 'system-ui, sans-serif',
    },
    header: {
        backgroundColor: '#1e40af',
        color: '#fff',
        padding: '16px 32px',
        fontSize: '22px',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    main: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px 16px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '24px',
        width: '100%',
        maxWidth: '360px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    title: {
        margin: '0 0 28px',
        fontSize: '20px',
        fontWeight: 600,
        color: '#1e40af',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    },
    label: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#333',
    },
    required: {
        color: '#e53e3e',
    },
    input: {
        padding: '10px 12px',
        border: '1px solid #d4d4d4',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        color: '#111',
    },
    inputError: {
        borderColor: '#e53e3e',
    },
    select: {
        padding: '10px 12px',
        border: '1px solid #d4d4d4',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        color: '#111',
        backgroundColor: '#fff',
    },
    acoes: {
        display: 'flex',
        gap: '12px',
        marginTop: '8px',
    },
    btnVoltar: {
        flex: 1,
        padding: '12px',
        border: '1px solid #d4d4d4',
        borderRadius: '6px',
        backgroundColor: '#fff',
        color: '#555',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
    },
    btnSalvar: {
        flex: 1,
        padding: '12px',
        border: '1px solid #4f46e5',
        borderRadius: '6px',
        backgroundColor: '#eef2ff',
        color: '#4f46e5',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
    },
    error: {
        fontSize: '12px',
        color: '#e53e3e',
    },
    sucesso: {
        backgroundColor: '#f0fdf4',
        border: '1px solid #86efac',
        color: '#166534',
        borderRadius: '6px',
        padding: '10px 14px',
        fontSize: '14px',
        marginBottom: '16px',
    },
    erro: {
        backgroundColor: '#fff1f2',
        border: '1px solid #fecdd3',
        color: '#be123c',
        borderRadius: '6px',
        padding: '10px 14px',
        fontSize: '14px',
        marginBottom: '16px',
    },
    footer: {
        backgroundColor: '#1e40af',
        color: '#aaa',
        textAlign: 'center',
        padding: '16px',
        fontSize: '13px',
    },
};
