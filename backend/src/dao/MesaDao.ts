import Mesa from "../entities/Mesa";
import { db } from "../infra/database/connection";

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

    async list() {
        return db.all("SELECT * FROM mesas");
    }

    async update(id: number, { numero, capacidade, status }: Mesa) {
        return db.run(
            "UPDATE mesas SET numero = ?, capacidade = ?, status = ? WHERE id = ?",
            [numero, capacidade, status, id]
        );
    }

    async delete(id: number) {
        return db.run(
            "DELETE FROM mesas WHERE id = ?",
            [id]
        );
    }

}

export default new MesaDAO();
