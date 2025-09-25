"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWinnerUsecase = void 0;
class CreateWinnerUsecase {
    constructor(createWinner) {
        this.createWinner = createWinner;
    }
    async create(params) {
        return await this.createWinner.create(params);
    }
}
exports.CreateWinnerUsecase = CreateWinnerUsecase;
