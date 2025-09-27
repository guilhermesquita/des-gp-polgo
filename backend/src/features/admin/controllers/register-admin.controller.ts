import { Request, Response, NextFunction } from "express";
import { CreateAdmin } from "../domain/contracts/create-admin";

export class RegisterAdminController {
  constructor(readonly createAdmin: CreateAdmin) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await this.createAdmin.create({ email, password });
      if (!result.sucess) return res.status(400).json(result);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
