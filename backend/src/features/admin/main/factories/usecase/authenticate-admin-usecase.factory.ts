import { AuthenticateAdmin } from "../../../domain/contracts/authenticate-admin";
import { AuthenticateAdminUsecase } from "../../../domain/usecase/authenticate-admin.usecase";
import { AdminRepository } from "../../../repository/admin.repository";

export const authenticateAdminFactory = (): AuthenticateAdmin => {
  const repo = new AdminRepository();
  return new AuthenticateAdminUsecase(repo);
};
