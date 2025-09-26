"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWinnerFactory = void 0;
const delete_winner_usecase_1 = require("../../../domain/usecase/delete-winner.usecase");
const winner_repository_1 = require("../../../repository/winner.repository");
const deleteWinnerFactory = () => {
    const winnerRepository = new winner_repository_1.WinnerRepository();
    return new delete_winner_usecase_1.DeleteWinnerUsecase(winnerRepository, winnerRepository);
};
exports.deleteWinnerFactory = deleteWinnerFactory;
