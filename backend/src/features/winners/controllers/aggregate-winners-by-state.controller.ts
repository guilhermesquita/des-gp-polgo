import { Request, Response, NextFunction } from "express";
import { AggregateWinnersByState } from "../domain/contracts/aggregate-winners-by-state";

export class AggregateWinnersByStateController {
  constructor(readonly aggregateWinners: AggregateWinnersByState) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.aggregateWinners.aggregate();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
