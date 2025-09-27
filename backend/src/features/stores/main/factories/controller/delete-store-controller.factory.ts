import { DeleteStoreController } from "../../../controllers/delete-store.controller";
import { deleteStoreFactory } from "../usecase/delete-store-usecase.factory";

export const makeDeleteStoreController = () => {
  return new DeleteStoreController(deleteStoreFactory());
};
