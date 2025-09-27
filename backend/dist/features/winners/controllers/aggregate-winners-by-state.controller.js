"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWinnersByStateController = void 0;
class AggregateWinnersByStateController {
    constructor(aggregateWinners) {
        this.aggregateWinners = aggregateWinners;
    }
    async handle(_req, res, next) {
        try {
            const result = await this.aggregateWinners.aggregate();
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.AggregateWinnersByStateController = AggregateWinnersByStateController;
