import { CreateWinnerController } from "../../../controllers/create-winner.controller";
import { createWinnerFactory } from "../usecase/create-winner-usecase.factory";

export const makeCreateWinnerController = () => {
  return new CreateWinnerController(createWinnerFactory());
};
