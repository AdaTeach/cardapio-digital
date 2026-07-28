import Mesa from "../entities/Mesa";
import MesaDao from '../dao/MesaDao';

class MesaController {

    async create(mesa: Mesa) {
        const returnData = await MesaDao.create(mesa);
        return returnData;
    }

}

export default new MesaController();
