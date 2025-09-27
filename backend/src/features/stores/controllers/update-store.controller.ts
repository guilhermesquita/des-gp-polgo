import { Request, Response, NextFunction } from "express";
import { UpdateStore } from "../domain/contracts/update-store";

export class UpdateStoreController {
  constructor(readonly updateStore: UpdateStore) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await this.updateStore.update({ id, ...req.body });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
