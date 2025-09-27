import { GetStores } from "../../../domain/contracts/get-stores";
import { GetStoresUsecase } from "../../../domain/usecase/get-stores.usecase";
import { StoreRepository } from "../../../repository/store.repository";

export const getStoresFactory = (): GetStores => {
  const repo = new StoreRepository();
  return new GetStoresUsecase(repo);
};
