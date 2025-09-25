"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWinnerUsecase = void 0;
class UpdateWinnerUsecase {
    constructor(updateWinner) {
        this.updateWinner = updateWinner;
    }
    async update(params) {
        return await this.updateWinner.update(params);
    }
}
exports.UpdateWinnerUsecase = UpdateWinnerUsecase;
