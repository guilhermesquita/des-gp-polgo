"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreUsecase = void 0;
class CreateStoreUsecase {
    constructor(createStore) {
        this.createStore = createStore;
    }
    async create(params) {
        return await this.createStore.create(params);
    }
}
exports.CreateStoreUsecase = CreateStoreUsecase;
