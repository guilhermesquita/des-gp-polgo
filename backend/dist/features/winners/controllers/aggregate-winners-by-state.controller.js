"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWinnersByStateController = void 0;
class AggregateWinnersByStateController {
    constructor(aggregateWinners) {
        this.aggregateWinners = aggregateWinners;
    }
    async handle(_req, res) {
        try {
            const result = await this.aggregateWinners.aggregate();
            return res.json(result);
        }
        catch (err) {
            console.error("Error aggregating winners by state", err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.AggregateWinnersByStateController = AggregateWinnersByStateController;
