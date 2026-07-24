import Produto from "../entities/Produto";
import { db } from "../src/infra/database/connection";
import Connection from "./Connection";

class ProdutoDAO extends Connection {

    async create({nome, valor, descricao, detalhe}: Produto) {
        return db.run(
            "INSERT INTO produtos (nome, valor, descricao, detalhe) VALUES (?, ?, ?, ?)",
            [nome, valor, descricao, detalhe]
        );
    }

}

export default new ProdutoDAO();