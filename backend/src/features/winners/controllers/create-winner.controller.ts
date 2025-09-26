import { NextFunction, Request, Response } from "express";
import { CreateWinner } from "../domain/contracts/create-winner";
import { Validation } from "../../../config/contracts/validation";
import { BadRequestError } from "../../../errors/bad-request-error";

export class CreateWinnerController {
  constructor(
    readonly createWinners: CreateWinner,
    private readonly validation: Validation
  ) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const erro = this.validation.validate(req.body);
      if (erro) {
        throw new BadRequestError(erro.message);
      }

      const { nome, estado, cidade, premio, data } = req.body;

      const winners = await this.createWinners.create({
        cidade,
        estado,
        nome,
        premio,
        data,
      });

      return res.json(winners);
    } catch (err) {
      return next(err);
    }
  }
}
