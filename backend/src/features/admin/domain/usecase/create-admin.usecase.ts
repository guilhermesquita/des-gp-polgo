import { CreateAdmin } from "../contracts/create-admin";

export class CreateAdminUsecase implements CreateAdmin {
  constructor(readonly createAdmin: CreateAdmin) {}

  async create(params: CreateAdmin.Params): Promise<CreateAdmin.Result> {
    return await this.createAdmin.create(params);
  }
}
