"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWinnerFactory = void 0;
const create_winner_usecase_1 = require("../../../domain/usecase/create-winner.usecase");
const winner_repository_1 = require("../../../repository/winner.repository");
const createWinnerFactory = () => {
    const winnerRepository = new winner_repository_1.WinnerRepository();
    return new create_winner_usecase_1.CreateWinnerUsecase(winnerRepository);
};
exports.createWinnerFactory = createWinnerFactory;
