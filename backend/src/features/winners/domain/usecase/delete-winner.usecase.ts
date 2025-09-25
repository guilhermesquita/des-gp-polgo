import { DeleteWinner } from "../contracts/delete-winner";

export class DeleteWinnerUsecase implements DeleteWinner {
  constructor(readonly deleteWinner: DeleteWinner) {}

  async delete(params: DeleteWinner.Params): Promise<DeleteWinner.Result> {
    return await this.deleteWinner.delete(params);
  }
}
