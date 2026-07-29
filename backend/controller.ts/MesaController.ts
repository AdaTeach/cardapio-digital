import Mesa from "../entities/Mesa";
import MesaDao from '../dao/MesaDao';

class MesaController {

    async create(mesa: Mesa) {
        return MesaDao.create(mesa);
    }

    async updateStatus(numero: number, status: string) {
        Mesa.validateStatusValue(status);
        return MesaDao.updateStatus(numero, status);
    }

}

export default new MesaController();
