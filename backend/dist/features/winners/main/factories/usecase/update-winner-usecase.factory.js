"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWinnerFactory = void 0;
const update_winner_usecase_1 = require("../../../domain/usecase/update-winner.usecase");
const winner_repository_1 = require("../../../repository/winner.repository");
const updateWinnerFactory = () => {
    const winnerRepository = new winner_repository_1.WinnerRepository();
    return new update_winner_usecase_1.UpdateWinnerUsecase(winnerRepository, winnerRepository);
};
exports.updateWinnerFactory = updateWinnerFactory;
