import { GetWinnersPageable } from "../../../domain/contracts/get-winners-pageable";
import { GetWinnersPageableUsecase } from "../../../domain/usecase/get-winners-pageable.usecase";
import { WinnerRepository } from "../../../repository/winner.repository";

export const getWinnersPageableFactory = (): GetWinnersPageable => {
  const winnerRepository = new WinnerRepository();
  return new GetWinnersPageableUsecase(winnerRepository);
};
