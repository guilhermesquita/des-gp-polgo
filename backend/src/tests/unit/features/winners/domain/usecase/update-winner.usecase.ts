import { NotFoundError } from "../../../../../../errors/not-found-error";
import { CheckWinnerById } from "../../../../../../features/winners/domain/contracts/check-winner-by-id";
import { UpdateWinner } from "../../../../../../features/winners/domain/contracts/update-winner";

export class UpdateWinnerUsecase implements UpdateWinner {
  constructor(
    readonly updateWinner: UpdateWinner,
    readonly checkById: CheckWinnerById
  ) {}

  async update(params: UpdateWinner.Params): Promise<UpdateWinner.Result> {
    const { id } = params;
    const winnerExists = await this.checkById.check(id);
    if (!winnerExists) {
      throw new NotFoundError("Registro não encontrado");
    }
    return await this.updateWinner.update(params);
  }
}
