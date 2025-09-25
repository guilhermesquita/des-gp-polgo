import { Request, Response } from "express";
import winnerModel from "../domain/model/winner.model";
import { GetWinnersPageable } from "../domain/contracts/get-winners-pageable";

export const getWinners = async (_req: Request, res: Response) => {
  try {
    const winners = await winnerModel.find().lean();
    res.json(winners);
  } catch (err) {
    console.error("Error fetching winners:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

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

// export const getUserById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const user = await User.findById(id).lean();
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// };

// export const createUser = async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   const user = await User.create({ name, email });
//   res.status(201).json(user);
// };

// export const updateUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const updates = req.body;
//   const user = await User.findByIdAndUpdate(id, updates, { new: true }).lean();
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await User.findByIdAndDelete(id).lean();
//   if (!result) return res.status(404).json({ message: "User not found" });
//   res.json({ ok: true });
// };
