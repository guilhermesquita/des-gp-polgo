import { UpdateStoreController } from "../../../controllers/update-store.controller";
import { updateStoreFactory } from "../usecase/update-store-usecase.factory";

export const makeUpdateStoreController = () => {
  return new UpdateStoreController(updateStoreFactory());
};
