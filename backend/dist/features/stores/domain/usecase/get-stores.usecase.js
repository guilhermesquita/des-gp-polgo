"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoresUsecase = void 0;
class GetStoresUsecase {
    constructor(getStores) {
        this.getStores = getStores;
    }
    async pageable(params) {
        return await this.getStores.pageable(params);
    }
}
exports.GetStoresUsecase = GetStoresUsecase;
