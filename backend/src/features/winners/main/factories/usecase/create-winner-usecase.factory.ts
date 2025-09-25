import { CreateWinner } from "../../../domain/contracts/create-winner";
import { CreateWinnerUsecase } from "../../../domain/usecase/create-winner.usecase";
import { WinnerRepository } from "../../../repository/winner.repository";

export const createWinnerFactory = (): CreateWinner => {
  const winnerRepository = new WinnerRepository();
  return new CreateWinnerUsecase(winnerRepository);
};
