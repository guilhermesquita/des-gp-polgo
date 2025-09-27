import { LoginAdminController } from "../../../controllers/login-admin.controller";
import { authenticateAdminFactory } from "../usecase/authenticate-admin-usecase.factory";

export const makeLoginAdminController = () => {
  return new LoginAdminController(authenticateAdminFactory());
};
