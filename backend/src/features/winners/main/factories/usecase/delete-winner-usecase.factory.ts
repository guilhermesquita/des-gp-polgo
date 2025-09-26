import { DeleteWinner } from "../../../domain/contracts/delete-winner";
import { DeleteWinnerUsecase } from "../../../domain/usecase/delete-winner.usecase";
import { WinnerRepository } from "../../../repository/winner.repository";

export const deleteWinnerFactory = (): DeleteWinner => {
  const winnerRepository = new WinnerRepository();
  return new DeleteWinnerUsecase(winnerRepository, winnerRepository);
};
