"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWinnersPageableUsecase = void 0;
class GetWinnersPageableUsecase {
    constructor(getWinnersPageable) {
        this.getWinnersPageable = getWinnersPageable;
    }
    async pageable(params) {
        return await this.getWinnersPageable.pageable(params);
    }
}
exports.GetWinnersPageableUsecase = GetWinnersPageableUsecase;
