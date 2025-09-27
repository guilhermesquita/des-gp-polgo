import { UpdateStore } from "../../../domain/contracts/update-store";
import { UpdateStoreUsecase } from "../../../domain/usecase/update-store.usecase";
import { StoreRepository } from "../../../repository/store.repository";

export const updateStoreFactory = (): UpdateStore => {
  const repo = new StoreRepository();
  return new UpdateStoreUsecase(repo, repo);
};
