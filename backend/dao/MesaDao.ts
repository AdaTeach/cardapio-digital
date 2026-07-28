import Mesa from "../entities/Mesa";
import { db } from "../src/infra/database/connection";
import Connection from "./Connection";

class MesaDAO extends Connection {

    async create({ numero, capacidade, status }: Mesa) {
        return db.run(
            "INSERT INTO mesas (numero, capacidade, status) VALUES (?, ?, ?)",
            [numero, capacidade, status]
        );
    }

}

export default new MesaDAO();
