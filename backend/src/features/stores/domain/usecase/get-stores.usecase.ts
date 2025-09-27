import { GetStores } from "../contracts/get-stores";

export class GetStoresUsecase implements GetStores {
  constructor(readonly getStores: GetStores) {}

  async pageable(params: GetStores.Params): Promise<GetStores.Result> {
    return await this.getStores.pageable(params);
  }
}
