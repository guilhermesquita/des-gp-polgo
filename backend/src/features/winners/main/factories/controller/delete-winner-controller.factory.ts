import { DeleteWinnerController } from "../../../controllers/delete-winner.controller";
import { deleteWinnerFactory } from "../usecase/delete-winner-usecase.factory";

export const makeDeleteWinnerController = () => {
  return new DeleteWinnerController(deleteWinnerFactory());
};
