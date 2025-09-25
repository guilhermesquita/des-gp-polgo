import { CreateWinner } from "../contracts/create-winner";

export class CreateWinnerUsecase implements CreateWinner {
  constructor(readonly createWinner: CreateWinner) {}

  async create(params: CreateWinner.Params): Promise<CreateWinner.Result> {
    return await this.createWinner.create(params);
  }
}
