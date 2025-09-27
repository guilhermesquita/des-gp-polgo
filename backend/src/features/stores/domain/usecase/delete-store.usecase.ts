import { NotFoundError } from "../../../../errors/not-found-error";
import { CheckStoreById } from "../contracts/check-store-by-id";
import { DeleteStore } from "../contracts/delete-store";

export class DeleteStoreUsecase implements DeleteStore {
  constructor(
    readonly deleteStore: DeleteStore,
    readonly checkStoreById: CheckStoreById
  ) {}

  async delete(params: DeleteStore.Params): Promise<DeleteStore.Result> {
    const { id } = params;
    const storeExists = await this.checkStoreById.check(id);
    if (!storeExists) {
      throw new NotFoundError("Registro não encontrado");
    }
    return await this.deleteStore.delete(params);
  }
}
