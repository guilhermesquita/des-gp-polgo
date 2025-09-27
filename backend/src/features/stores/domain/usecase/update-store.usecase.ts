import { NotFoundError } from "../../../../errors/not-found-error";
import { CheckStoreById } from "../contracts/check-store-by-id";
import { UpdateStore } from "../contracts/update-store";

export class UpdateStoreUsecase implements UpdateStore {
  constructor(
    readonly updateStore: UpdateStore,
    readonly checkStoreById: CheckStoreById
  ) {}

  async update(params: UpdateStore.Params): Promise<UpdateStore.Result> {
    const { id } = params;
    const storeExists = await this.checkStoreById.check(id);
    if (!storeExists) {
      throw new NotFoundError("Registro não encontrado");
    }
    return await this.updateStore.update(params);
  }
}
