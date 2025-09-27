import { CreateStore } from "../../../domain/contracts/create-store";
import { CreateStoreUsecase } from "../../../domain/usecase/create-store.usecase";
import { StoreRepository } from "../../../repository/store.repository";

export const createStoreFactory = (): CreateStore => {
  const repo = new StoreRepository();
  return new CreateStoreUsecase(repo);
};
