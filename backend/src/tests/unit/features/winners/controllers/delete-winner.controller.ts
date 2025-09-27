import { Request, Response, NextFunction } from "express";
import { DeleteWinner } from "../domain/contracts/delete-winner.spec";

export class DeleteWinnerController {
  constructor(readonly deleteWinner: DeleteWinner) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await this.deleteWinner.delete({ id });

      if (!result.sucess) {
        return res.status(404).json(result);
      }

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
