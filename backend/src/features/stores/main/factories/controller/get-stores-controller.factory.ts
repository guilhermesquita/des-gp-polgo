import { GetStoresController } from "../../../controllers/get-stores.controller";
import { getStoresFactory } from "../usecase/get-stores-usecase.factory";
import { makeGetStoresPageableValidation } from "../controller/get-stores-pageable-validation.factory";

export const makeGetStoresController = () => {
  return new GetStoresController(
    getStoresFactory(),
    makeGetStoresPageableValidation()
  );
};
