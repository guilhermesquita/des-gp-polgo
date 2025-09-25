import { UpdateWinner } from "../contracts/update-winner";

export class UpdateWinnerUsecase implements UpdateWinner {
  constructor(readonly updateWinner: UpdateWinner) {}

  async update(params: UpdateWinner.Params): Promise<UpdateWinner.Result> {
    return await this.updateWinner.update(params);
  }
}
