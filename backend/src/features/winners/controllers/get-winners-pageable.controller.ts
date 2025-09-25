import { Request, Response } from "express";
import { GetWinnersPageable } from "../domain/contracts/get-winners-pageable";

export class GetWinnerController {
  constructor(readonly getWinners: GetWinnersPageable) {}

  async handle(req: Request, res: Response) {
    try {
      const {
        page = "1",
        limit = "10",
        orderBy = "asc",
        order = "name",
        nome,
        estado,
        premio,
      } = req.query;

      const winners = await this.getWinners.pageable({
        pageable: {
          page: Number(page) || 1,
          limit: Number(limit) || 10,
          orderBy: String(orderBy) as "asc" | "desc",
          order: String(order),
        },
        filters: {
          nome: nome ? String(nome) : undefined,
          estado: estado ? String(estado) : undefined,
          premio: premio ? String(premio) : undefined,
        },
      });

      return res.json(winners);
    } catch (err) {
      console.error("Error fetching winners", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
