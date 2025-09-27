import { CreateStore } from "../contracts/create-store";

export class CreateStoreUsecase implements CreateStore {
  constructor(readonly createStore: CreateStore) {}

  async create(params: CreateStore.Params): Promise<CreateStore.Result> {
    return await this.createStore.create(params);
  }
}
