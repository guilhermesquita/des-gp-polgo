"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStoreFactory = void 0;
const update_store_usecase_1 = require("../../../domain/usecase/update-store.usecase");
const store_repository_1 = require("../../../repository/store.repository");
const updateStoreFactory = () => {
    const repo = new store_repository_1.StoreRepository();
    return new update_store_usecase_1.UpdateStoreUsecase(repo);
};
exports.updateStoreFactory = updateStoreFactory;
