import { Request, Response } from "express";
import { DeleteWinner } from "../domain/contracts/delete-winner";

export class DeleteWinnerController {
  constructor(readonly deleteWinner: DeleteWinner) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await this.deleteWinner.delete({ id });

      if (!result.sucess) {
        return res.status(404).json(result);
      }

      return res.json(result);
    } catch (err) {
      console.error("Error deleting winner", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
