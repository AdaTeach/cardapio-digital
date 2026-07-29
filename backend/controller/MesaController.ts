import MesaDao from "../dao/MesaDao";

class MesaController {

    async delete(id: number){
        const returnData = await MesaDao.delete(id)
        return returnData;
    }
}

export default new MesaController();