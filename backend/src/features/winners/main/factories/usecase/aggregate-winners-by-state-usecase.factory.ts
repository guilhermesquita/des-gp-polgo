import { AggregateWinnersByState } from "../../../domain/contracts/aggregate-winners-by-state";
import { AggregateWinnersByStateUsecase } from "../../../domain/usecase/aggregate-winners-by-state.usecase";
import { WinnerRepository } from "../../../repository/winner.repository";

export const aggregateWinnersByStateFactory = (): AggregateWinnersByState => {
  const winnerRepository = new WinnerRepository();
  return new AggregateWinnersByStateUsecase(winnerRepository);
};
