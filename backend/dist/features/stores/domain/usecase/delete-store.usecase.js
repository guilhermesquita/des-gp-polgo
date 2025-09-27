"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStoreUsecase = void 0;
class DeleteStoreUsecase {
    constructor(deleteStore) {
        this.deleteStore = deleteStore;
    }
    async delete(params) {
        return await this.deleteStore.delete(params);
    }
}
exports.DeleteStoreUsecase = DeleteStoreUsecase;
