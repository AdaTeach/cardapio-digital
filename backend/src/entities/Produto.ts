class Produto {
    nome: string;
    descricao: string | null;
    detalhe: string | null;
    valor: number;

    constructor(nome: string, valor: number, descricao: string | null, detalhe: string | null) {
        this.validateNome(nome);
        this.validateValor(valor);
        this.validateDescricao(descricao);
        this.validateDetalhe(detalhe);
        this.nome = nome;
        this.valor = valor;
        this.descricao = descricao;
        this.detalhe = detalhe;
    }

    validateNome(nome: string) {
        if (nome.trim().length === 0) throw new Error("Nome não pode ser vazio");
        if (nome.trim().length > 50) throw new Error("Nome não pode ter que do que 50 caracteres");
    }

    validateValor(valor: number) {
        if (valor <= 0) throw new Error("Valor não pode ser zero ou negativo");
    }

    validateDescricao(descricao: string | null) {
        if (descricao && descricao.trim().length > 255) throw new Error("Descrição não pode ter mais do que 255 caracteres");
    }

    validateDetalhe(detalhe: string | null) {
        if (detalhe && detalhe.trim().length > 255) throw new Error("Detalhe não pode ter mais do que 255 caracteres");
    }

    static fromPayload(produto: string): Produto {
        const { nome, valor, descricao, detalhe } = JSON.parse(produto);
        return new Produto(nome, valor, descricao, detalhe);
    }

}

export default Produto;