"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWinnerUsecase = void 0;
class DeleteWinnerUsecase {
    constructor(deleteWinner) {
        this.deleteWinner = deleteWinner;
    }
    async delete(params) {
        return await this.deleteWinner.delete(params);
    }
}
exports.DeleteWinnerUsecase = DeleteWinnerUsecase;
