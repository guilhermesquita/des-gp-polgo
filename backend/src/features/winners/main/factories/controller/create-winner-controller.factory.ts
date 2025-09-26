import { CreateWinnerController } from "../../../controllers/create-winner.controller";
import { createWinnerFactory } from "../usecase/create-winner-usecase.factory";
import { makeAddDreamValidation } from "./create-winner-validation.factory";

export const makeCreateWinnerController = () => {
  return new CreateWinnerController(
    createWinnerFactory(),
    makeAddDreamValidation()
  );
};
