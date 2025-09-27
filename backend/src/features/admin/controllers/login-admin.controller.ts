import { Request, Response } from "express";
import { AuthenticateAdmin } from "../domain/contracts/authenticate-admin";

export class LoginAdminController {
  constructor(readonly authenticateAdmin: AuthenticateAdmin) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.authenticateAdmin.authenticate({
        email,
        password,
      });
      if (!result.sucess) return res.status(401).json(result);
      return res.json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
