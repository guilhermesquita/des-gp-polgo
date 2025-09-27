import { CreateAdmin } from "../../../domain/contracts/create-admin";
import { CreateAdminUsecase } from "../../../domain/usecase/create-admin.usecase";
import { AdminRepository } from "../../../repository/admin.repository";

export const createAdminFactory = (): CreateAdmin => {
  const repo = new AdminRepository();
  return new CreateAdminUsecase(repo);
};
