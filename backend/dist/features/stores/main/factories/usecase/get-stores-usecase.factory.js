"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoresFactory = void 0;
const get_stores_usecase_1 = require("../../../domain/usecase/get-stores.usecase");
const store_repository_1 = require("../../../repository/store.repository");
const getStoresFactory = () => {
    const repo = new store_repository_1.StoreRepository();
    return new get_stores_usecase_1.GetStoresUsecase(repo);
};
exports.getStoresFactory = getStoresFactory;
