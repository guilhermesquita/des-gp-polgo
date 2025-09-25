"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinnersPageableFactory = void 0;
const get_winners_pageable_usecase_1 = require("../../../domain/usecase/get-winners-pageable.usecase");
const winner_repository_1 = require("../../../repository/winner.repository");
const getWinnersPageableFactory = () => {
    const winnerRepository = new winner_repository_1.WinnerRepository();
    return new get_winners_pageable_usecase_1.GetWinnersPageableUsecase(winnerRepository);
};
exports.getWinnersPageableFactory = getWinnersPageableFactory;
