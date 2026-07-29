import Mesa from "../entities/Mesa";
import { db } from "../src/infra/database/connection";

class MesaDAO {

    async create({ numero, capacidade, status }: Mesa) {
        return db.run(
            "INSERT INTO mesas (numero, capacidade, status) VALUES (?, ?, ?)",
            [numero, capacidade, status]
        );
    }

    async updateStatus(numero: number, status: string) {
        return db.run(
            "UPDATE mesas SET status = ? WHERE numero = ?",
            [status, numero]
        );
    }

}

export default new MesaDAO();
