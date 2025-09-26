import { UpdateWinner } from "../../../domain/contracts/update-winner";
import { UpdateWinnerUsecase } from "../../../domain/usecase/update-winner.usecase";
import { WinnerRepository } from "../../../repository/winner.repository";

export const updateWinnerFactory = (): UpdateWinner => {
  const winnerRepository = new WinnerRepository();
  return new UpdateWinnerUsecase(winnerRepository, winnerRepository);
};
