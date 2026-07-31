import Produto from "../entities/Produto";
import ProdutoDao from '../dao/ProdutoDao';

class ProdutoController {

    async list() {
        const returnData = await ProdutoDao.list();
        return returnData;
    }

    async create(produto: Produto) {
        const returnData = await ProdutoDao.create(produto);
        return returnData;
    }

}

export default new ProdutoController();