"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreUsecase = void 0;
class UpdateStoreUsecase {
    constructor(updateStore) {
        this.updateStore = updateStore;
    }
    async update(params) {
        return await this.updateStore.update(params);
    }
}
exports.UpdateStoreUsecase = UpdateStoreUsecase;
