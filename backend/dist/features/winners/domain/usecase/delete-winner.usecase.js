"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWinnerUsecase = void 0;
const not_found_error_1 = require("../../../../errors/not-found-error");
class DeleteWinnerUsecase {
    constructor(deleteWinner, checkById) {
        this.deleteWinner = deleteWinner;
        this.checkById = checkById;
    }
    async delete(params) {
        const { id } = params;
        const winnerExists = await this.checkById.check(id);
        if (!winnerExists) {
            throw new not_found_error_1.NotFoundError("Registro não encontrado");
        }
        return await this.deleteWinner.delete(params);
    }
}
exports.DeleteWinnerUsecase = DeleteWinnerUsecase;
