import { AuthenticateAdmin } from "../contracts/authenticate-admin";

export class AuthenticateAdminUsecase implements AuthenticateAdmin {
  constructor(readonly authenticateAdmin: AuthenticateAdmin) {}

  async authenticate(
    params: AuthenticateAdmin.Params
  ): Promise<AuthenticateAdmin.Result> {
    return await this.authenticateAdmin.authenticate(params);
  }
}
