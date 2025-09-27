import { Request, Response } from "express";
import { AggregateWinnersByState } from "../domain/contracts/aggregate-winners-by-state";

export class AggregateWinnersByStateController {
  constructor(readonly aggregateWinners: AggregateWinnersByState) {}

  async handle(_req: Request, res: Response) {
    try {
      const result = await this.aggregateWinners.aggregate();
      return res.json(result);
    } catch (err) {
      console.error("Error aggregating winners by state", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
