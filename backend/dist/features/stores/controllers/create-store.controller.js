"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreController = void 0;
class CreateStoreController {
    constructor(createStore) {
        this.createStore = createStore;
    }
    async handle(req, res, next) {
        try {
            const { nome, cnpj, estado, cidade, endereco } = req.body;
            const result = await this.createStore.create({
                nome,
                cnpj,
                estado,
                cidade,
                endereco,
            });
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.CreateStoreController = CreateStoreController;
