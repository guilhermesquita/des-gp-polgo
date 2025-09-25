import { Request, Response } from "express";
import { CreateWinner } from "../domain/contracts/create-winner";

export class CreateWinnerController {
  constructor(readonly createWinners: CreateWinner) {}

  async handle(req: Request, res: Response) {
    try {
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
      console.error("Error fetching winners", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
