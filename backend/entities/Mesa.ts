type MesaStatus = "disponivel" | "ocupada" | "reservada";

class Mesa {
    numero: number;
    capacidade: number;
    status: MesaStatus;

    constructor(numero: number, capacidade: number, status: MesaStatus) {
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

    validateStatus(status: MesaStatus) {
        const valid: MesaStatus[] = ["disponivel", "ocupada", "reservada"];
        if (!valid.includes(status)) throw new Error("Status inválido. Use: disponivel, ocupada ou reservada");
    }
}

export default Mesa;
