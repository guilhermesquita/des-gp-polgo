"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStoreController = void 0;
class DeleteStoreController {
    constructor(deleteStore) {
        this.deleteStore = deleteStore;
    }
    async handle(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.deleteStore.delete({ id });
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.DeleteStoreController = DeleteStoreController;
