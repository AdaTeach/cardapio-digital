class Mesa {
    numero: number;
    capacidade: number;
    status: string;

    constructor(numero: number, capacidade: number, status: string = 'disponivel') {
        this.validateNumero(numero);
        this.validateCapacidade(capacidade);
        this.validateStatus(status);
        this.numero = numero;
        this.capacidade = capacidade;
        this.status = status;
    }

    validateNumero(numero: number) {
        if (!Number.isInteger(numero) || numero <= 0) throw new Error("Número da mesa deve ser um inteiro positivo");
    }

    validateCapacidade(capacidade: number) {
        if (!Number.isInteger(capacidade) || capacidade <= 0) throw new Error("Capacidade deve ser um inteiro positivo");
    }

    validateStatus(status: string) {
        const allowed = ['disponivel', 'ocupada', 'reservada'];
        if (!allowed.includes(status)) throw new Error(`Status inválido. Use: ${allowed.join(', ')}`);
    }
}

export default Mesa;