"use strict";
// import { NotFoundError } from "../../../../errors/not-found-error";
// import { CheckWinnerById } from "../contracts/check-winner-by-id";
// import { DeleteWinner } from "../contracts/delete-winner.spec";
// export class DeleteWinnerUsecase implements DeleteWinner {
//   constructor(
//     readonly deleteWinner: DeleteWinner,
//     readonly checkById: CheckWinnerById
//   ) {}
//   async delete(params: DeleteWinner.Params): Promise<DeleteWinner.Result> {
//     const { id } = params;
//     const winnerExists = await this.checkById.check(id);
//     if (!winnerExists) {
//       throw new NotFoundError("Registro não encontrado");
//     }
//     return await this.deleteWinner.delete(params);
//   }
// }
