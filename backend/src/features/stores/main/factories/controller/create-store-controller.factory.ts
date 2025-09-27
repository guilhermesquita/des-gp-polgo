import { CreateStoreController } from "../../../controllers/create-store.controller";
import { createStoreFactory } from "../usecase/create-store-usecase.factory";

export const makeCreateStoreController = () => {
  return new CreateStoreController(createStoreFactory());
};
