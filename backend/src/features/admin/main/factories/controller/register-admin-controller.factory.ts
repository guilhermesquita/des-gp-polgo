import { RegisterAdminController } from "../../../controllers/register-admin.controller";
import { createAdminFactory } from "../usecase/create-admin-usecase.factory";

export const makeRegisterAdminController = () => {
  return new RegisterAdminController(createAdminFactory());
};
