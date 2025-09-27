import { Request, Response, NextFunction } from "express";
import { AuthenticateAdmin } from "../domain/contracts/authenticate-admin";

export class LoginAdminController {
  constructor(readonly authenticateAdmin: AuthenticateAdmin) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await this.authenticateAdmin.authenticate({
        email,
        password,
      });
      if (!result.sucess) return res.status(401).json(result);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
