import { GetWinnerController } from "../../../controllers/get-winners-pageable.controller";
import { getWinnersPageableFactory } from "../usecase/get-winners-pageable-usecase.factory";
import { makeGetWinnersPageableValidation } from "./get-winners-pageable-validation.factory";

export const makeGetWinnersPageableController = () => {
  return new GetWinnerController(
    getWinnersPageableFactory(),
    makeGetWinnersPageableValidation()
  );
};
