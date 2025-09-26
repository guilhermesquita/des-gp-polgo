"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWinnerUsecase = void 0;
const not_found_error_1 = require("../../../../errors/not-found-error");
class UpdateWinnerUsecase {
    constructor(updateWinner, checkById) {
        this.updateWinner = updateWinner;
        this.checkById = checkById;
    }
    async update(params) {
        const { id } = params;
        const winnerExists = await this.checkById.check(id);
        if (!winnerExists) {
            throw new not_found_error_1.NotFoundError("Registro não encontrado");
        }
        return await this.updateWinner.update(params);
    }
}
exports.UpdateWinnerUsecase = UpdateWinnerUsecase;
