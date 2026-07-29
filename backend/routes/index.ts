import { Request, Response, Router } from "express";
import ProdutoEntity from "../entities/Produto";
import MesaEntity from "../entities/Mesa";
import ProdutoController from "../controller.ts/ProdutoController";
import MesaController from "../controller.ts/MesaController";


const router = Router();

router.get("/produtos", async (req: Request, res: Response) => {
    try{
        const produtos = await ProdutoController.list();
        res.status(201).json(produtos);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error " });
    }
});

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

router.get("/mesa", async (_req: Request, res: Response) => {
    try {
        const mesas = await MesaController.list();
        res.status(200).json(mesas);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/mesa", async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const { numero, capacidade, status } = data;
        const mesa = new MesaEntity(numero, capacidade, status);
        const returnMesa = await MesaController.create(mesa);
        res.status(201).json(returnMesa);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.put("/mesa/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { data } = req.body;
        const { numero, capacidade, status } = data;
        const mesa = new MesaEntity(numero, capacidade, status);
        const returnMesa = await MesaController.update(id, mesa);
        res.status(200).json(returnMesa);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/mesa/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await MesaController.delete(id);
        res.status(204).send();
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;