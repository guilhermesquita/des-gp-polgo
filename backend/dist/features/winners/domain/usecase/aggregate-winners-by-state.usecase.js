"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWinnersByStateUsecase = void 0;
class AggregateWinnersByStateUsecase {
    constructor(aggregateWinners) {
        this.aggregateWinners = aggregateWinners;
    }
    async aggregate() {
        return await this.aggregateWinners.aggregate();
    }
}
exports.AggregateWinnersByStateUsecase = AggregateWinnersByStateUsecase;
