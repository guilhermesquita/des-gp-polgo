import { UpdateWinnerController } from "../../../controllers/update-winner.controller";
import { updateWinnerFactory } from "../usecase/update-winner-usecase.factory";

export const makeUpdateWinnerController = () => {
  return new UpdateWinnerController(updateWinnerFactory());
};
