import { Request, Response, NextFunction } from "express";
import { CreateStore } from "../domain/contracts/create-store";

export class CreateStoreController {
  constructor(readonly createStore: CreateStore) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, cnpj, estado, cidade, endereco } = req.body;
      const result = await this.createStore.create({
        nome,
        cnpj,
        estado,
        cidade,
        endereco,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
