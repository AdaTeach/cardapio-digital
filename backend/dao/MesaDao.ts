import { db } from "../src/infra/database/connection";
import Connection from "./Connection";


class MesaDAO extends Connection {

    async delete(id: number) {
        return db.run(
            "DELETE FROM mesas WHERE id = ?",
            [id]
        );
    }

}

export default new MesaDAO();