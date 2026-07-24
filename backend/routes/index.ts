import { Request, Response, Router } from "express";
import ProdutoEntity from "../entities/Produto";
import ProdutoController from "../controller.ts/ProdutoController";

const router = Router();

router.post("/produto", async (req: Request, res: Response) => {
    try{
        const { data } = req.body;
        const { nome, valor, descricao, detalhe } = data;
        const produto = new ProdutoEntity(nome, valor, descricao, detalhe);
        const returnProduto = await ProdutoController.create(produto);
        res.status(201).json(returnProduto);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error " });
    }
});

export default router;