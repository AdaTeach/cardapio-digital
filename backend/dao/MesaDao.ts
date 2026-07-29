import { db } from "../src/infra/database/connection";
import Connection from "./Connection";
import Mesa from "../entities/Mesa";

class MesaDAO extends Connection {

    async create({ numero, capacidade, status }: Mesa) {
        return db.run(
            "INSERT INTO mesas (numero, capacidade, status) VALUES (?, ?, ?)",
            [numero, capacidade, status]
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
