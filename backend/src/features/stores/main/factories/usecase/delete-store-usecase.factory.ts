import { DeleteStore } from "../../../domain/contracts/delete-store";
import { DeleteStoreUsecase } from "../../../domain/usecase/delete-store.usecase";
import { StoreRepository } from "../../../repository/store.repository";

export const deleteStoreFactory = (): DeleteStore => {
  const repo = new StoreRepository();
  return new DeleteStoreUsecase(repo, repo);
};
