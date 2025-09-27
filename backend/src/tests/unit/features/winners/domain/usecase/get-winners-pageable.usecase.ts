import { GetWinnersPageable } from "../contracts/get-winners-pageable.spec";

export class GetWinnersPageableUsecase implements GetWinnersPageable {
  constructor(readonly getWinnersPageable: GetWinnersPageable) {}

  async pageable(
    params: GetWinnersPageable.Params
  ): Promise<GetWinnersPageable.Result> {
    return await this.getWinnersPageable.pageable(params);
  }
}
