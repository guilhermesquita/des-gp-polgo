"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAggregateWinnersByStateController = void 0;
const aggregate_winners_by_state_controller_1 = require("../../../controllers/aggregate-winners-by-state.controller");
const aggregate_winners_by_state_usecase_factory_1 = require("../usecase/aggregate-winners-by-state-usecase.factory");
const makeAggregateWinnersByStateController = () => {
    return new aggregate_winners_by_state_controller_1.AggregateWinnersByStateController((0, aggregate_winners_by_state_usecase_factory_1.aggregateWinnersByStateFactory)());
};
exports.makeAggregateWinnersByStateController = makeAggregateWinnersByStateController;
