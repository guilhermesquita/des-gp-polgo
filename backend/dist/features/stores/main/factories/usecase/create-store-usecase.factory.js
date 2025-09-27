"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreFactory = void 0;
const create_store_usecase_1 = require("../../../domain/usecase/create-store.usecase");
const store_repository_1 = require("../../../repository/store.repository");
const createStoreFactory = () => {
    const repo = new store_repository_1.StoreRepository();
    return new create_store_usecase_1.CreateStoreUsecase(repo);
};
exports.createStoreFactory = createStoreFactory;
