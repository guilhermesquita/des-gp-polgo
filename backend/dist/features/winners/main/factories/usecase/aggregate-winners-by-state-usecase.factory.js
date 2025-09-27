"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateWinnersByStateFactory = void 0;
const aggregate_winners_by_state_usecase_1 = require("../../../domain/usecase/aggregate-winners-by-state.usecase");
const winner_repository_1 = require("../../../repository/winner.repository");
const aggregateWinnersByStateFactory = () => {
    const winnerRepository = new winner_repository_1.WinnerRepository();
    return new aggregate_winners_by_state_usecase_1.AggregateWinnersByStateUsecase(winnerRepository);
};
exports.aggregateWinnersByStateFactory = aggregateWinnersByStateFactory;
