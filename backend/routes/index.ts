import { Request, Response, Router } from "express";
import ProdutoEntity from "../entities/Produto";
import ProdutoController from "../controller/ProdutoController";
import MesaController from "../controller/MesaController";
import MesaEntity from "../entities/Mesa";

const router = Router();

router.get("/produtos", async (req: Request, res: Response) => {
    try {
        const produtos = await ProdutoController.list();
        res.status(200).json(produtos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/produto", async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const { nome, valor, descricao, detalhe } = data;
        const produto = new ProdutoEntity(nome, valor, descricao, detalhe);
        const returnProduto = await ProdutoController.create(produto);
        res.status(201).json(returnProduto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/mesas", async (_req: Request, res: Response) => {
    try {
        const mesas = await MesaController.list();
        res.status(200).json(mesas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.put("/mesa/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { numero, capacidade, status } = req.body;
        const mesa = new MesaEntity(numero, capacidade, status);
        const result = await MesaController.update(id, mesa);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.patch("/mesa/:numero/status", async (req: Request, res: Response) => {
    try {
        const numero = parseInt(String(req.params.numero));
        const { status } = req.body;
        const result = await MesaController.updateStatus(numero, status);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/mesa/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const returnMesa = await MesaController.delete(id);
        res.status(200).json(returnMesa);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
