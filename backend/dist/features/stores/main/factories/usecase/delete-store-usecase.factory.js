"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStoreFactory = void 0;
const delete_store_usecase_1 = require("../../../domain/usecase/delete-store.usecase");
const store_repository_1 = require("../../../repository/store.repository");
const deleteStoreFactory = () => {
    const repo = new store_repository_1.StoreRepository();
    return new delete_store_usecase_1.DeleteStoreUsecase(repo);
};
exports.deleteStoreFactory = deleteStoreFactory;
