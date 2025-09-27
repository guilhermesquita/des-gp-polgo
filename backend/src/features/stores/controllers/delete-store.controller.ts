import { Request, Response, NextFunction } from "express";
import { DeleteStore } from "../domain/contracts/delete-store";

export class DeleteStoreController {
  constructor(readonly deleteStore: DeleteStore) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.deleteStore.delete({ id });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
