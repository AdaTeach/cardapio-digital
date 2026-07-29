import Mesa from "../entities/Mesa";
import MesaDao from "../dao/MesaDao";

class MesaController {

    async create(mesa: Mesa) {
        return MesaDao.create(mesa);
    }

    async list() {
        return MesaDao.list();
    }

    async update(id: number, mesa: Mesa) {
        return MesaDao.update(id, mesa);
    }

    async delete(id: number) {
        return MesaDao.delete(id);
    }

}

export default new MesaController();
