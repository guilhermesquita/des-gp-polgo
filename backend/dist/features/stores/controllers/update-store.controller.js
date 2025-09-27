"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreController = void 0;
class UpdateStoreController {
    constructor(updateStore) {
        this.updateStore = updateStore;
    }
    async handle(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.updateStore.update({ id, ...req.body });
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.UpdateStoreController = UpdateStoreController;
