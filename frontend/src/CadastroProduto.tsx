import { useState, FormEvent } from 'react'

interface FormData {
    nome: string
    descricao: string
    detalhes: string
    valor: string
}

interface FormErrors {
    nome?: string
    valor?: string
}

export function CadastroProduto() {
    const [form, setForm] = useState<FormData>({ nome: '', descricao: '', detalhes: '', valor: '' })

    function formatValor(digits: string): string {
        if (!digits) return ''
        const padded = digits.padStart(3, '0')
        const intPart = padded.slice(0, -2).replace(/^0+/, '') || '0'
        return `${intPart}.${padded.slice(-2)}`
    }
    const [errors, setErrors] = useState<FormErrors>({})

    function validate(): boolean {
        const next: FormErrors = {}
        if (!form.nome.trim()) next.nome = 'Nome é obrigatório'
        else if (form.nome.length > 50) next.nome = 'Máximo 50 caracteres'
        if (!form.valor || form.valor === '00000.00') next.valor = 'Valor é obrigatório'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    
        if (!validate()) {
            console.log('Errro ao validar')
            return;
        }
      
      const dataForm = { ...form, valor: parseFloat(form.valor) }
      
      try {
            const r = await fetch('/produto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataForm),
            })

            if (!r.ok) {
                setErro('Erro ao criar produto.')
                return
            }

            setSucesso('Produto criado com sucesso!')
            setForm({ nome: '', descricao: '', detalhes: '', valor: '' })
        } catch {
            setErro('Erro ao conectar. Tente novamente.')
        }
      
      
      
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        if (name === 'valor') {
            const digits = value.replace(/\D/g, '').slice(0, 7)
            setForm(prev => ({ ...prev, valor: formatValor(digits) }))
        } else {
            setForm(prev => ({ ...prev, [name]: value }))
        }
        setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <span style={styles.headerTitle}>Cardápio Digital</span>
            </header>

            <main style={styles.main}>
                <div style={styles.card}>
                    <h2 style={styles.title}>Cadastro de Produto</h2>

                    <form onSubmit={handleSubmit} style={styles.form} noValidate>
                        <div style={styles.field}>
                            <label style={styles.label}>
                                Nome <span style={styles.required}>*</span>
                            </label>
                            <input
                                style={{ ...styles.input, ...(errors.nome ? styles.inputError : {}) }}
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                maxLength={50}
                                placeholder="Nome do produto"
                            />
                            <div style={styles.fieldFooter}>
                                {errors.nome && <span style={styles.error}>{errors.nome}</span>}
                                <span style={{ ...styles.counter, marginLeft: 'auto' }}>
                                    {form.nome.length}/50
                                </span>
                            </div>
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Valor <span style={styles.required}>*</span></label>
                            <input
                                style={{ ...styles.input, ...(errors.valor ? styles.inputError : {}) }}
                                name="valor"
                                value={form.valor}
                                onChange={handleChange}
                                inputMode="numeric"
                                placeholder="00.00"
                            />
                            {errors.valor && <span style={styles.error}>{errors.valor}</span>}
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Descrição</label>
                            <textarea
                                style={styles.textarea}
                                name="descricao"
                                value={form.descricao}
                                onChange={handleChange}
                                maxLength={255}
                                placeholder="Breve descrição do produto"
                                rows={3}
                            />
                            <span style={styles.counter}>{form.descricao.length}/255</span>
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Detalhes</label>
                            <textarea
                                style={styles.textarea}
                                name="detalhes"
                                value={form.detalhes}
                                onChange={handleChange}
                                maxLength={255}
                                placeholder="Informações adicionais"
                                rows={3}
                            />
                            <span style={styles.counter}>{form.detalhes.length}/255</span>
                        </div>

                        <button type="submit" style={styles.button}>
                            Cadastrar produto
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'system-ui, sans-serif',
    },
    header: {
        backgroundColor: '#e8e8e8',
        padding: '12px 24px',
        borderBottom: '1px solid #d4d4d4',
    },
    headerTitle: {
        fontWeight: 600,
        fontSize: '16px',
        color: '#111',
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        padding: '48px 16px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '32px',
        width: '100%',
        maxWidth: '480px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    },
    title: {
        margin: '0 0 28px',
        fontSize: '20px',
        fontWeight: 600,
        color: '#111',
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
        transition: 'border-color 0.15s',
        color: '#111',
    },
    inputError: {
        borderColor: '#e53e3e',
    },
    textarea: {
        padding: '10px 12px',
        border: '1px solid #d4d4d4',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit',
        color: '#111',
    },
    fieldFooter: {
        display: 'flex',
        alignItems: 'center',
    },
    error: {
        fontSize: '12px',
        color: '#e53e3e',
    },
    counter: {
        fontSize: '12px',
        color: '#999',
        textAlign: 'right',
    },
    button: {
        marginTop: '8px',
        padding: '12px',
        backgroundColor: '#111',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
    },
}
  
