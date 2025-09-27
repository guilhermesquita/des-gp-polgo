import { AggregateWinnersByState } from "../contracts/aggregate-winners-by-state";

export class AggregateWinnersByStateUsecase implements AggregateWinnersByState {
  constructor(readonly aggregateWinners: AggregateWinnersByState) {}

  async aggregate(): Promise<AggregateWinnersByState.Result> {
    return await this.aggregateWinners.aggregate();
  }
}
