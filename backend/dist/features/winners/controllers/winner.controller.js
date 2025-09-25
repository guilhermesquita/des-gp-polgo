"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinners = void 0;
// import User from "../models/User";
const getWinners = async (_req, res) => {
    const winners = {
        id: "dacas",
        name: "teste",
    };
    res.json(winners);
};
exports.getWinners = getWinners;
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
