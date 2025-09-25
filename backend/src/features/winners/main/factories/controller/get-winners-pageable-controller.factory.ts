import { GetWinnerController } from "../../../controllers/get-winner-pageable.controller";
import { getWinnersPageableFactory } from "../usecase/get-winners-pageable-usecase.factory";

export const makeGetWinnersPageableController = () => {
  return new GetWinnerController(getWinnersPageableFactory());
};
