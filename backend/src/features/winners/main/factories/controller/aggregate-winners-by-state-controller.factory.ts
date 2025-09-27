import { AggregateWinnersByStateController } from "../../../controllers/aggregate-winners-by-state.controller";
import { aggregateWinnersByStateFactory } from "../usecase/aggregate-winners-by-state-usecase.factory";

export const makeAggregateWinnersByStateController = () => {
  return new AggregateWinnersByStateController(
    aggregateWinnersByStateFactory()
  );
};
