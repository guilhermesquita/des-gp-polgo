import { GetWinnerController } from "../../../controllers/winner.controller";
import { getWinnersPageableFactory } from "../usecase/get-winners-pageable-usecase.factory";

export const makeGetWinnersPageableController = () => {
  return new GetWinnerController(getWinnersPageableFactory());
};
