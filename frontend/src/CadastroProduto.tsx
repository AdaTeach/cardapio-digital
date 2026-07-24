import { useState, FormEvent } from 'react'

interface FormData {
    nome: string
    descricao: string
    detalhes: string
    valor: string
}

export function CadastroProduto() {
    const [form, setForm] = useState<FormData>({ nome: '', descricao: '', detalhes: '', valor: '' })
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setErro('')

        try {
            const r = await fetch('/produto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: form.nome,
                    descricao: form.descricao,
                    detalhes: form.detalhes,
                    valor: parseFloat(form.valor),
                }),
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
}