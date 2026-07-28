import { Request, Response, Router } from "express";
import ProdutoEntity from "../entities/Produto";
import ProdutoController from "../controller.ts/ProdutoController";
import MesaController from "../controller.ts/MesaController";


const router = Router();

router.post("/produto", async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const { nome, valor, descricao, detalhe } = data;
        const produto = new ProdutoEntity(nome, valor, descricao, detalhe);
        const returnProduto = await ProdutoController.create(produto);
        res.status(201).json(returnProduto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error " });
    }
});

router.delete("/mesa/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const returnMesa = await MesaController.delete(id);
        res.status(200).json(returnMesa);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error " });
    }
});

export default router;